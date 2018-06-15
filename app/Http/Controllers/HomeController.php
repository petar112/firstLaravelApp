<?php


namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\DB;

Class HomeController extends BaseController{

    function Dance() {
        $users = DB::select('select * from Users', [1]);

        return $users;
    }
}