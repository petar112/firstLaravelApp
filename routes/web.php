<?php

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
    return view('welcome');
});

Route::get('/blade', function(){
    return View("new");
});

Route::get('/login', function() {
    return View("new");
})->name('login');

Route::get('/register', function() {
    return View("new");
})->name('register');

Route::get('/home', 'HomeController@Dance');

Route::get('/delete', 'UsersController@Delete');

Route::get('/getUsersByEmail', 'UsersController@getUsersByEmail');

Route::get('/sendEmail', 'UsersController@sendEmail');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
