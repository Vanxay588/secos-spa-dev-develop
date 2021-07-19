<template>
   
   <!--  <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
             <TopHeader></TopHeader>
        </div>
     </div>
    </div> -->
    
  <!--   <div>
      
             <Navbar></Navbar>
       
    </div> -->
      <!-- <div>
      
             <TopFooter></TopFooter>
       
    </div> -->
    <!-- <annoucements></annoucements>
   </div> -->
   <div>
     <download-categories></download-categories>
   </div>
   
</template>

<script>

import TopHeader from './TopHeader.vue'
import Navbar from './Navbar.vue'
import TopFooter from './TopFooter.vue'
import Annoucements from './Annoucements.vue'
import DownloadCategories from './DownloadCategories.vue'

export default {
  components: {
    TopHeader,
      TopFooter,
      Navbar,
      Annoucements,
      DownloadCategories
  }
}
</script>
<style scoped>

</style>
