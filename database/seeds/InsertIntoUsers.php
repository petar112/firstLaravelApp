<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InsertIntoUsers extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //inserting into users
        DB::table("users")->insert([
            ('firstName') => ('Petar'),
            ('lastName') => ('Nikolic'),
            ('email') => ('petar.n@vivifyideas.com'),
            ('country') => ('Serbia'),
            ('company') => ('VivifyIdeas'),
            ('password') => ('petar')
        ]);

        DB::table("users")->insert([
            ('firstName') => ('Zika'),
            ('lastName') => ('Zikic'),
            ('email') => ('zika.z@google.com'),
            ('country') => ('USA'),
            ('company') => ('google'),
            ('password') => ('zika')
        ]);
    }
}
