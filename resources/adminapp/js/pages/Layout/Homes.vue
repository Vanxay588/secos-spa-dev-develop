<template>
   <div>
    <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
             <TopHeader></TopHeader>
        </div>
     </div>
    </div>
    
    <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
             <Navbar></Navbar>
        </div>
     </div>
    </div>
   </div>
   
</template>

<script>

import TopHeader from './TopHeader.vue'
import Navbar from './Navbar.vue'


export default {
  components: {
    TopHeader,
      Navbar
  }
}
</script>
<style scoped>

</style>
