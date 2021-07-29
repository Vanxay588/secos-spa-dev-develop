<template>
   <div>
      <!-- <TopHeader></TopHeader> -->
      <Navbar></Navbar>
      <homes-photo></homes-photo>
      <Annoucements></Annoucements>
      <about-us></about-us>
      <hr>
      <contact></contact>
      <TopFooter></TopFooter>
      <ButtomFooter></ButtomFooter>
   </div>
</template>
<script>
import TopHeader from './TopHeader.vue'
import Navbar from './Navbar.vue'
import TopFooter from './TopFooter.vue'
import AboutUs from './AboutUs.vue'
import Contact from './Contact.vue'
import Annoucements from './Annoucements.vue'
import DownloadCategories from './DownloadCategories.vue'
import ButtomFooter from './ButtomFooter.vue'
import HomesPhoto from './HomesPhoto.vue'
export default {
  components: {
    TopHeader,
      TopFooter,
      Navbar,
      Annoucements,
      DownloadCategories,
      ButtomFooter,
      HomesPhoto,
      AboutUs,
      Contact
  }
}
</script>