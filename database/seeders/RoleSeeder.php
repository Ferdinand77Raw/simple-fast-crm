<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{ 
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            ['name' => 'Admin', 'parent_id' => null],
            ['name' => 'Ceo', 'parent_id' => 1],
            ['name' => 'Supervisor', 'parent_id' => 2],
            ['name' => 'Customer care', 'parent_id' => 3],
            ['name' => 'Sales Representative', 'parent_id' => 3],
        ];

        DB::table('roles')->insert($roles);
    }
    
}
