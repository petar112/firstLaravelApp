<?php


namespace MyApp\Http\Controllers;

use MyApp\Mail\sendUsersEmails;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

Class UsersController extends BaseController{

    public function delete(Request $request) {
        $usersId = explode(",", $request->get('ids'));
        Artisan::call('deleteUsers:delete', ['users' => $usersId]);
    }

    public function getUsersByEmail(Request $request){
        $userEmail = $request['email'];
        $users = DB::select("select * from Users where email like '%$userEmail.com'");
        echo "Ime Prezime Email<br><hr>";
        foreach ($users as $user){
            echo $user->firstName." ".$user->lastName." -> ".$user->email.'<br><hr>';
        }
    }

    public function sendEmail(){
        Mail::to("perodsdsz@gmail.com")
            ->queue(new sendUsersEmails());
    }
}