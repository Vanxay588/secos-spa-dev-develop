<template>
<div >
    <ul class="nav justify-content-center bg-success">
       <li class="nav-item" >
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
    <p>2021 - {{ new Date().getFullYear() }}&nbsp;&nbsp; &copy;&nbsp;{{ $t('global.allRightsReserved') }}&nbsp;&nbsp; Made With &nbsp;&nbsp;{{ $t('panel.site_title') }}</p>
    <hr>
</div>
</template>
<style scoped>
  
 a {
        color: aliceblue;
      }
     
ul li {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    }
  
 hr {
      
          margin-top: auto;
          margin-bottom: 1rem;
          border: 0;
          border-top: 5px solid darkslateblue;
      } 
 p   {    
        position:absolute;
        bottom:0px;
        background-color:#1e1e1e;
        width:100%;
        text-align:center;
        color: aliceblue;  
        padding: 10px;
      }
</style>
