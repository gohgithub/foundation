<template>
  <div>
    <Header></Header>
    <main class="login">
      <section class="login-top">
        <img src="../../assets/image/front/banner_logo.svg">
        <h2>| 我們提供個人專屬的匿名個人化專屬服務 |</h2>
      </section>

      <section class="login-inner">
        <div class="login-container">
          <div class="login-left">
            <h3>會員登入</h3>
            <p>-Log In-</p>
            <div class="form-box">
            <form>
                <label>
                    <!-- <span>ID/手機/Email</span> -->
                    <input placeholder="請輸入 ID 或手機或 Email">
                </label>
            </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

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
