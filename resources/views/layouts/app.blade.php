<!DOCTYPE html>
<html lang="en">

<head>
    <!--meta Default -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">

    <!--meta SEO -->
    <meta name="description" content="{{ trans('panel.site_title') }}">
    <meta name="keywords" content="Sangha Education Commission Office of Savannakhet">
    <meta name="author" content="Sangha Education Commission Office of Savannakhet">

     <!-- meta Languages -->
    <meta name="app-locale" content="{{ App::getLocale() }}" />

    <!-- Title -->
    <title>{{ trans('panel.site_title') }}</title>

    <!-- Logo and Icon app-->
    <link rel="apple-touch-icon" sizes="76x76" href="{{ url('/images/icon.png') }}">
    <link rel="icon" type="image/png" href="{{ url('/images/logo.png') }}">

    <!-- Font and Icon -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&family=Material+Icons&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="{{ mix('/adminapp/css/app.css') }}">
    <link rel="stylesheet" href="{{ url('/md/css/material-dashboard.css') }}">
    <link rel="stylesheet" href="{{ url('/css/custom.css') }}">
</head>

<body class="off-canvas-sidebar">
    @yield('content')
<script>
    window.default_locale = app()->getLocale();
</script>
</body>

</html>