<template>
   <div>
      <TopHeader></TopHeader>
     <!--  <Navbar></Navbar> -->
      <homes-photo></homes-photo>
      <div class="container">
        <Annoucements></Annoucements>
        <hr>
        <Policies></Policies>
        <hr>
        <download></download>
        <hr>
        <about-us></about-us>
        <hr>
        <contact></contact>
      </div>
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
import Download from './Download.vue'
import ButtomFooter from './ButtomFooter.vue'
import HomesPhoto from './HomesPhoto.vue'
import Policies   from  './Policies.vue'
export default {
  components: {
    TopHeader,
      TopFooter,
      Navbar,
      Annoucements,
      Policies,
      Download,
      ButtomFooter,
      HomesPhoto,
      AboutUs,
      Contact
  }
}
</script>