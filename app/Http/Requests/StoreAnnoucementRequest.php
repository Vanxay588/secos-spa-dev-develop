<?php

namespace App\Http\Requests;

use App\Models\Annoucement;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreAnnoucementRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('annoucement_create');
    }

    public function rules()
    {
        return [
            'annoucement' => [
                'array',
                'required',
            ],
            'annoucement.*.id' => [
                'integer',
                'exists:media,id',
            ],
            'name' => [
                'string',
                'required',
            ],
            'number' => [
                'integer',
                'min:-2147483648',
                'max:2147483647',
                'required',
            ],
            'short_name' => [
                'string',
                'required',
            ],
            'allow_date' => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'description' => [
                'string',
                'nullable',
            ],
        ];
    }
}
