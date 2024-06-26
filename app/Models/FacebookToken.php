<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacebookToken extends Model
{
    use HasFactory;

    protected $fillable = ['token', 'name', 'facebook_id'];
}
