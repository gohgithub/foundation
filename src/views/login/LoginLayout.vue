<template>
  <div>
    <Header></Header>
    <main class="login">
      <section class="login-top">
        <img data-aos="fade-up" src="../../assets/image/front/new_header_logo.svg">
        <h2 data-aos="fade-up" data-aos-delay="300">| 我們提供專屬的匿名個人化服務 |</h2>
      </section>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// 載入元件
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
  },
  created () {
  }
}
</script>
