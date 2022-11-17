<template>
  <div>
    <Circle></Circle>
    <section class="footer">
      <a class="goTop" href="#" v-scroll-to="'#header'">
        TOP
      </a>
      <div class="container footer-item">
        <div class="w-50 footer-title">
          <a href="#">
            <img src="../assets/image/front/footer_logo.svg">
          </a>
          <p>贊助單位：社團法人臺灣臨床藥學會</p>
          <h2 class="pc-none">守護勇敢 | 翩然起舞</h2>
          <hr class="footer-line">
          <h2 class="phone-none">守護勇敢 | 翩然起舞</h2>
        </div>
        <div class="w-50 footer-menu">
          <ul class="footer-list">
               <li><a class="mb-36" href="#/about">關於我們</a></li>
                <li><a class="mb-36" href="#">經驗分享</a></li>
                <li><a class="mb-36" href="#/unintended-2">我意外懷孕了</a></li>
                <li><a class="mb-36" href="#/youngdad-2">我女友懷孕了</a></li>
                <li><a class="mb-36" href="#/daughter-2">我女兒懷孕了</a></li>
                <li><a class="mb-36" href="#/family-2">親友懷孕了</a></li>
                <li><a class="mb-36" href="#/support-2">我想支持</a></li>
                <li><a class="mb-36" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=637rlwfd" target="_blank">聯絡我們</a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Circle from './PointCircle.vue'

export default {
  data () {
    return {
      isLoading: false,
      iscomplate: true
    }
  },
  components: {
    Circle
  },
  created () {

  }
}
</script>
