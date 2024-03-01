<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\LeadsController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\InvoicesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/user/{id}/username', [UserController::class, 'getUserNameById']);

/**MODULES ROUTES**/

Route::resource('contacts', ContactsController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
        ->middleware(['auth', 'verified']);

Route::resource('leads', LeadsController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
        ->middleware(['auth', 'verified']);

Route::resource('products', ProductsController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
        ->middleware(['auth', 'verified']);

Route::resource('invoices', InvoicesController::class)
        ->only(['index', 'create', 'store', 'edit', 'update', 'destroy'])
        ->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('Home', HomeController::class)
    ->only(['index'])
    ->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
