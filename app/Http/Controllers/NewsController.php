<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
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
        $newsPagination = new NewsCollection(News::paginate(8));
        return inertia::render('Hompage', [
            'title' => 'Arkha News',
            'description' => 'selamat datang di Arkha News',
            'news' => $newsAll,
            'newsnew' => $newsNew,
            'newspaginate' => $newsPagination,
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
        $news = News::where('category', $category)->paginate(8);
        // Mengirimkan data ke Inertia
        return inertia('NewsByCategory', [
            'title' => ucfirst($category),
            'news' => $news,
            'auth' => auth()->user(),
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
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        //
    }
}
