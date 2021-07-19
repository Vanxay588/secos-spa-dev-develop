<template>
<nav class="navbar navbar-expand-lg bg-success fixed-top">
  <div class="container">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-bar navbar-kebab"></span>
    <span class="navbar-toggler-bar navbar-kebab"></span>
    <span class="navbar-toggler-bar navbar-kebab"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#homes">{{ $t('cruds.home.title') }} <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#blog">{{ $t('cruds.blog.title') }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Annoucements">{{ $t('cruds.annoucement.title') }}</a>
        </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ $t('cruds.policy.title') }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#policyCategory">{{ $t('cruds.policyCategory.title') }}</a>
            <a class="dropdown-item" href="#policy"> {{ $t('cruds.policy.title') }}</a>
          </div>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ $t('cruds.download.title') }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#downloadCategory">{{ $t('cruds.downloadCategory.title') }}</a>
            <a class="dropdown-item" href="#download"> {{ $t('cruds.download.title') }}</a>
          </div>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#aboutUs">{{ $t('cruds.aboutUs.title') }}</a>
        </li>
         
      </ul>
    </div>
  </div>
</nav>
</template>
