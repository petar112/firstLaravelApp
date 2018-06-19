<?php

namespace MyApp\Console\Commands;

use Illuminate\Console\Command;

class deleteUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'deleteUsers:delete {users}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Deleting users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $users = $this->argument('users');
        \MyApp\User::destroy($users);
            if(empty($users[0])){
                echo "U gave us no ids!!!";
            }else{
                echo "Users were successfully deleted\n";
            }
    }
}
