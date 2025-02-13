<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index(){
        $students = Student::all();
        return response()->json([
            'success'=> true,
            'data'=> $students,
        ], 200);
    }
}
