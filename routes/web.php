<?php

Route::redirect('/', '/homes');

Route::group([
    'prefix'     => 'homes',
    'as'         => 'homes.',
    'namespace'  => 'Homes',
], function () {
    Route::view('/{any?}', 'layouts.admin.app')->name('homes')->where('any', '.*');
});

Route::redirect('/dashboard', '/admin/dashboard');

Auth::routes();

Route::group([
    'prefix'     => 'admin',
    'as'         => 'admin.',
    'namespace'  => 'Admin',
    'middleware' => ['auth'],
], function () {
    Route::view('/{any?}', 'layouts.admin.app')->name('dashboard')->where('any', '.*');
});