<template>
  <div>
    <div class="topOutline"></div>
    <div class="rightOutline"></div>
    <div class="bottomOutline"></div>
    <div class="leftOutline"></div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
