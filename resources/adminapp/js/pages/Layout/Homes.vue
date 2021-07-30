<template>
   <div>
      <!-- <TopHeader></TopHeader> -->
      <Navigation></Navigation>
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
import TopFooter from './TopFooter.vue'
import AboutUs from './AboutUs.vue'
import Contact from './Contact.vue'
import Annoucements from './Annoucements.vue'
import Download from './Download.vue'
import ButtomFooter from './ButtomFooter.vue'
import HomesPhoto from './HomesPhoto.vue'
import Policies   from  './Policies.vue'
import Navigation from   './Navigation.vue'
export default {
  components: {
    TopHeader,
      TopFooter,
      Annoucements,
      Policies,
      Download,
      ButtomFooter,
      HomesPhoto,
      AboutUs,
      Contact,
      Navigation
  }
}
</script>