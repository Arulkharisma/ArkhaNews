<?php

use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::put('/news/{id}', [NewsController::class, 'update']);
Route::post('/news', [NewsController::class, 'store']);
Route::get('/news/{id}', [NewsController::class, 'show'])->name('news.show');
Route::get('/category/{category}', [NewsController::class, 'showByCategory'])->name('news.byCategory');
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/news/update/{id}', [NewsController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('update.news');


Route::get('/', [NewsController::class, 'index'])->name('hompage');
// ->middleware(['auth', 'verified'])


Route::get('/dashboard', [NewsController::class, 'dashboard'])
->middleware(['auth', 'verified'])
->name('dashboard');

Route::get('/news/edit/{id}', [NewsController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('edit.news');

Route::delete('/news/{id}', [NewsController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('delete.news');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
