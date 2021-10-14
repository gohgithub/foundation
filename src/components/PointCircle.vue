<template>
  <div>
    <section class="circle-box">
      <div class="circle-1"></div>
      <div class="circle-2"></div>
      <div class="circle-3"></div>
      <div class="invisible">no element</div>
    </section>
  </div>
</template>
<script>
import $ from 'jquery'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  data () {
    return {
    }
  },
  mounted () {
    const vm = this
    // eslint-disable-next-line no-undef
    gsap.registerPlugin(ScrollTrigger)
    // 圓點滾動動畫
    gsap.to('.circle-1', {
      scrollTrigger: {
        trigger: '.circle-1',
        start: 'top center',
        onEnter: function () {
          vm.circleAnimate()
        }
      }
    })
  },
  methods: {
    // 圓圈動畫
    circleAnimate () {
      $('.circle-2').addClass('circle-2-an')
      $('.circle-3').addClass('circle-3-an')
    }
  }
}
</script>
