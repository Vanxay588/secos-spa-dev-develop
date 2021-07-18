<template>
      <div class="col-md-10">
  <nav class="navbar navbar-expand-sm bg-success navbar-absolute ">
    <span>Email:</span>
  
      <div class="container-fluid">
       
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
          <top-navbar-languages />
        </ul>
      </div>
      </div>
      
  </nav>
     </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    }
  }
}
</script>
