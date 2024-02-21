<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contacts extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'lastname',
        'phone_number',
        'city',
        'state',
        'user_id',
        'created_at',
        'updated_at'
    ];

    public function users(): BelongsTo
    {
        return $this->belongsTo(Users::class);
    }
}
