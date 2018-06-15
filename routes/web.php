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

Route::get('/home', 'HomeController@Dance'); //->middleware('signed');

Route::get('/blade', function(){
    return View("new");
});

Route::get('/login', function() {
    return View("new");
})->name('login');

Route::get('/login2', function() {
    return View("new");
})->name('register');