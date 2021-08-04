<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                'id'             => 1,
                'name'           => 'Vanxay',
                'email'          => 'Vanxay588@gmail.com',
                'password'       => bcrypt('NQ17401061'),
                'remember_token' => null,
                'surname'        => '',
            ],
            [
                'id'             => 2,
                'name'           => 'Admin',
                'email'          => 'Inthapunya@gmail.com',
                'password'       => bcrypt('9G@/?w_#B2q8seH'),
                'remember_token' => null,
                'surname'        => '',
            ],
        ];

        User::insert($users);
    }
}
