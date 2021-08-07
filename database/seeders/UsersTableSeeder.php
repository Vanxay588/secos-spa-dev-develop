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
                'name'           => 'ວັນໄຊ',
                'surname'        => 'ໄຊຍະພອນ',
                'gender'         => 'ຊາຍ',
                'email'          => 'Vanxay588@gmail.com',
                'password'       => bcrypt('NQ17401061'),
                'remember_token' => null,
              
            ]
        ];

        User::insert($users);
    }
}
