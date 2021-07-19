<template>
<div>
  <div>
    <ul class="nav justify-content-center bg-success">
  <li class="nav-item">
    <a class="nav-link " href="#homes">{{ $t('cruds.home.title') }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#blog">{{ $t('cruds.blog.title') }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#Annoucements">{{ $t('cruds.annoucement.title') }}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#policy">{{ $t('cruds.policy.title') }}</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="#download"> {{ $t('cruds.download.title') }}</a>
  </li>
   <li class="nav-item">
    <a class="nav-link" href="#aboutUs">{{ $t('cruds.aboutUs.title') }}</a>
  </li>
  </ul>
  <hr>
  </div>
  
    {{ $t('global.allRightsReserved') }}
 
</div>

</template>
<style scoped>
      a {
        color: aliceblue;
      }
      hr {
          margin-top: auto;
          margin-bottom: 1rem;
          border: 0;
          border-top: 5px solid darkslateblue;
      }
</style>
