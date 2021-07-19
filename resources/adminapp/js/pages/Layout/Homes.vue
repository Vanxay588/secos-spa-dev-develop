<template>
   <div>
   <!--  <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
             <TopHeader></TopHeader>
        </div>
     </div>
    </div> -->
    
 <!--    <div>
      
             <Navbar></Navbar>
       
    </div> -->
      <div>
      
             <TopFooter></TopFooter>
       
    </div>
   </div>
   
</template>

<script>

import TopHeader from './TopHeader.vue'
import Navbar from './Navbar.vue'
import TopFooter from './TopFooter.vue'


export default {
  components: {
    TopHeader,
      TopFooter,
      Navbar
  }
}
</script>
<style scoped>

</style>
