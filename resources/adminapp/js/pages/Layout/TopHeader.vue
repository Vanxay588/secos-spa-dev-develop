<template>
    <nav class="navbar navbar-expand-sm bg-success navbar-absolute ">
      <div class="container">
        <i class="fa fa-map-marker"></i><span><a href="#contactUs">&nbsp; {{ $t('panel.short_location') }}</a></span> &nbsp;&nbsp;&nbsp;
        <i class="fa fa-phone"></i><span>{{ $t('cruds.contactUs.phone') }}</span>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-envelope-o"></i><span><a href="mailto:Inthapunya@gmail.com">&nbsp;Inthapunya@gmail.com</a></span>
        <!-- Collapsable -->
         <div class="collapse navbar-collapse justify-content-end">
              <ul class="navbar-nav">
                <account/>
              </ul>
              <ul class="navbar-nav">
                <top-navbar-languages />
              </ul>
        </div>
      </div>
  </nav>
</template>
<style scoped>
    a {
      color: ghostwhite;
      }
    a:hover {
      text-decoration: none;
      color:#ffc600;
      }
</style>

<script>
  import account from './account.vue'
  export default {
    components: { 
      account 
    }
  }
</script>