<template>
         <nav class="navbar navbar-expand-sm bg-success navbar-absolute ">
           <div class="container">
            <i class="fa fa-map-marker"></i><span>&nbsp;{{ $t('cruds.aboutUs.title') }}</span> &nbsp;&nbsp;&nbsp;
            <i class="fa fa-phone"></i><span>&nbsp;02022618243</span>&nbsp;&nbsp;&nbsp;
            <i class="fa fa-envelope-o"></i><span><a href="mailto:Inthapunya@gmail.com">&nbsp;Inthapunya@gmail.com</a></span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleSidebar"
          :class="{ toggled: $sidebar.showSidebar }"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
          <span class="navbar-toggler-icon icon-bar"></span>
        </button>
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

<script>
import account from './account.vue'
export default {
  components: { account },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    }
  }
}
</script>
<style scoped>
a{
  color: aliceblue;
}

</style>