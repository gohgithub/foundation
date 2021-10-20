<template>
  <div>
    <Header></Header>
    <main class="login">
      <section class="login-top">
        <img src="../../assets/image/front/banner_logo.svg">
        <h2>| 我們提供個人專屬的匿名個人化專屬服務 |</h2>
      </section>

      <section class="login-inner">
        <div class="container d-flex justify-content-around">
          <!-- 左側登入欄位-->
          <div class="login-left">
            <h3>會員登入</h3>
            <p>-Log In-</p>
            <div class="form-box">
              <Form v-slot="{ errors }" @submit="onSubmit">
                <label class="login-account-label">
                    <span class="login-account-span">ID/手機/Email</span>
                    <Field class="login-account-input mb-15" rules="email|required" :class="{ 'border-danger': errors['email'] }" name="email" type="email" placeholder="請輸入 ID 或手機或 Email" />
                    <error-message name="email" class="account-error"></error-message>
                </label>
                <label class="login-password-label">
                    <span class="login-password-span">密碼</span>
                    <Field class="login-password-input" maxlength="13" rules="required|min:8" :class="{ 'border-danger': errors['password'] }" id="login-password" name="password" type="password" placeholder="請輸入密碼"/>
                </label>
                <!-- 顯示密碼 -->
                <div class="form-check show-password">
                  <div>
                    <error-message name="password" class="password-error"></error-message>
                  </div>
                  <div class="d-flex align-items-center">
                    <input class="form-check-input" type="checkbox" name="showPassword" id="showPassword">
                    <label class="form-check-label" for="showPassword" @click="showPassword()">
                      顯示密碼
                    </label>
                  <router-link to="#">我忘記密碼了</router-link>
                  </div>
                </div>
                <button class="login-btn">登入</button>
              </Form>
              <div class="fastLogin">
                <hr class="fastLogin-leftLine">
                <h3>｜快速登入｜</h3>
                <hr class="fastLogin-rightLine">
              </div>
            </div>
          </div>

          <!-- 右側註冊欄 -->
          <div class="login-right">
            <h3>會員註冊</h3>
            <p>-Sign up-</p>
            <div class="form-box">
              <From>
                <label class="signUp-account-label">
                    <span class="signUp-account-span"><span class="text-danger">*</span>手機/Email</span>
                    <Field class="signUp-account-input mb-15" name="email" type="email" placeholder="請輸入 ID 或手機或 Email" />
                </label>
              </From>
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

    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    showPassword () {
      const x = document.getElementById('login-password')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    onSubmit (values) {
      console.log()
    }
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
