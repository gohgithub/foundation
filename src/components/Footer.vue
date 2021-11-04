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
            <img src="../assets/image/front/footer_logo_PC.svg">
          </a>
          <h2 class="pc-none">守護勇敢 | 翩然起舞</h2>
          <hr class="footer-line">
          <h2 class="phone-none">守護勇敢 | 翩然起舞</h2>
        </div>
        <div class="w-50 footer-menu">
          <ul class="footer-list">
            <li><a class="mb-36" href="#">關於我們</a></li>
            <li><a class="mb-36" href="#">最新消息</a></li>
            <li><a class="mb-36" href="#">服務流程</a></li>
            <li><a class="mb-36" href="#">我要求助</a></li>
            <li><a href="#">留言社群</a></li>
            <li><a href="#">個案分享</a></li>
            <li><a href="#">相關單位</a></li>
            <li><a href="#">聯絡我們</a></li>
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
