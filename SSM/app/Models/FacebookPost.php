<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacebookPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'facebook_carousel',
        'selected_pages',
        'image_name',
        'images'
    ];

    protected $casts = [
        'selected_pages' => 'array',
        'images' => 'array',
    ];
}
