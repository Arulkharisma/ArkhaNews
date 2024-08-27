<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $newsAll = News::all();
        $newsNew = News::orderBy('created_at', 'desc')->take(10)->get();
        $newshero = News::where('id', 57)->get();
        $newsPagination = new NewsCollection(News::paginate(8));
        return inertia::render('Hompage', [
            'title' => 'Arkha News',
            'description' => 'selamat datang di Arkha News',
            'news' => $newsAll,
            'newsnew' => $newsNew,
            'newspaginate' => $newsPagination,
            'newshero' => $newshero
        ]);
        
    }
    public function dashboard()
    {
        $news = News::all();
        $newsPagination = new NewsCollection(News::paginate(8));
        return inertia::render('Dashboard', [
            'news' => $news,
        ]);
    }
    public function show($id)
    {
        $news = News::find($id);
        if (!$news) {
            // Redirect atau tampilkan pesan error jika berita tidak ditemukan
            return redirect()->route('home')->with('error', 'News not found');
        }

        return Inertia::render('NewsDetail', [
            'news' => $news,
            'auth' => auth()->user(),
        ]);
    }

    public function showByCategory($category)
    {
        // Mengambil berita berdasarkan kategori
        // $news = News::where('category', $category)->orderBy('created_at', 'desc')->get();
        $newsAll = News::all();
        $news = News::where('category', $category)->paginate(8);
        // Mengirimkan data ke Inertia
        return inertia('NewsByCategory', [
            'title' => ucfirst($category),
            'news' => $news,
            'auth' => auth()->user(),
            'newsall' => $newsAll,
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'author' => 'required|string',
            'category' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',  // Validasi untuk file image
        ]);

        // Proses upload image
        $imagePath = null;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imagePath = $image->store('news_images', 'public');  // Menyimpan image di storage/public/news_images
        }

        // Simpan data ke dalam database
        $news = new News();
        $news->title = $request->input('title');
        $news->description = $request->input('description');
        $news->author = $request->input('author');
        $news->category = $request->input('category');
        $news->image_path = $imagePath;  // Simpan path image ke dalam kolom image_path
        $news->save();

        return response()->json(['message' => 'News created successfully']);
    }

    /**
     * Display the specified resource.
     */
    // public function show(News $news)
    // {
       
    // }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news, Request $request, $id)
    {
        $news = News::find($id);

        // Check if news exists
        if (!$news) {
            return redirect()->back()->withErrors(['error' => 'News not found.']);
        }

        return Inertia::render('EditNews', [
            'news' => $news
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news, $id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'News not found'], 404);
        }

        $news->title = $request->input('title');
        $news->author = $request->input('author');
        $news->category = $request->input('category');
        $news->description = $request->input('description');

        if ($request->hasFile('image_path')) {
            $image = $request->file('image_path');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('images', $imageName, 'public');
            $news->image_path = $imageName;
        }

        $news->save();

        // Redirect ke halaman berita yang telah diperbarui
        return redirect()->route('dashboard')->with('success', 'News updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news, $id)
    {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'News not found'], 404);
        }

        // Hapus gambar dari storage jika ada
        if ($news->image_path && Storage::disk('public')->exists('images/' . $news->image_path)) {
            Storage::disk('public')->delete('images/' . $news->image_path);
        }

        $news->delete();

        return response()->json(['message' => 'News deleted successfully']);
    }
}
