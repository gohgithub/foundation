<template>
  <div>
    <div class="loader-icon">
      <vue-loaders v-if="isLoading" name="ball-scale-multiple" color="#FBB5B5" scale="2.5"></vue-loaders>
    </div>
    <div v-if="iscomplate">
      <div class="topOutline"></div>
      <div class="rightOutline"></div>
      <div class="bottomOutline"></div>
      <div class="leftOutline"></div>
      <div class="leftText d-flex" data-aos="fade-right" data-aos-duration="1500">
        <div class="line"></div>
        <p>Copyright ©2021 馨援結醫. All rights reserved.</p>
      </div>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// 載入 Header 跟 Footer 元件
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

// 載入 vue-loaders
import 'vue-loaders/dist/vue-loaders.css'

// 載入 aos 特效
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
})

export default {
  data () {
    return {
      isLoading: false,
      iscomplate: true
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    // const vm = this
    // vm.isLoading = true
    // setTimeout(() => {
    //   vm.isLoading = false
    //   vm.iscomplate = true
    // }, 2000)
  }
}
</script>
