<template>
  <div>
    <Header></Header>
    <main class="login">
      <section class="login-top">
        <img src="../../assets/image/front/banner_logo.svg">
        <h2>| 我們提供個人專屬的匿名個人化專屬服務 |</h2>
      </section>

      <section class="login-inner">
        <div class="container d-flex justify-content-center">
          <!-- 左側登入欄位-->
          <div class="login-left">
            <h3>會員登入</h3>
            <p>-Log In-</p>
            <div class="form-box">
              <Form v-slot="{ errors }" @submit="onSubmit">
                <!-- ID/手機/Email -->
                <label for="email" class="login-account-label">
                    <span class="login-account-span">ID/手機/Email</span>
                    <Field class="login-account-input mb-15" rules="email|required" :class="{ 'border-danger': errors['email'] }" name="email" type="email" placeholder="請輸入 ID 或手機或 Email" />
                    <error-message name="email" class="account-error"></error-message>
                </label>

                <!-- 密碼 -->
                <label for="password" class="login-password-label">
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
              <!-- 快速登入 -->
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
                <!-- 手機/Eamil -->
                <label class="signUp-label">
                  <span class="signUp-span"><span class="text-danger">*</span>手機/Email</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="請輸入手機或Email (僅忘記密碼使用，請正確填寫)" />
                </label>

                <!-- 再次輸入手機/Email -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入手機/Email</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="請再次輸入手機或Email" />
                </label>

                <!-- 帳號 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item">帳號</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="(選填)除了手機/Email，亦可以使用帳號登入" />
                </label>

                <!-- 密碼 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>密碼</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="請輸入八位數(含)以上密碼" />
                </label>

                <!-- 再次輸入密碼 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入密碼</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="請再次輸入密碼" />
                </label>

                <!-- 暱稱 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item">暱稱</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="(選填)請輸入暱稱" />
                </label>

                <!-- 性別 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>性別</span>
                  <i class="fas fa-caret-down select-down fa-2x"></i>
                  <select class="select-gender">
                    <option selected>請選擇性別</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="其他">其他</option>
                  </select>
                </label>

                <!-- 生日 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>生日</span>
                  <Field class="signUp-input mb-15" name="email" type="email" placeholder="YYYY/MM/DD(無法修改，請正確填寫)" />
                </label>

                <!-- 所在縣市 -->
                <label class="signUp-label py-0 pb-25">
                  <span class="signUp-span-item"><span class="text-danger">*</span>所在縣市</span>
                  <i class="fas fa-caret-down select-down fa-2x"></i>
                  <select class="select-gender">
                    <option selected>請選擇所在縣市</option>
                    <option value="1">男性</option>
                    <option value="2">女性</option>
                    <option value="3">其他</option>
                  </select>
                </label>

                <!-- 註冊按鈕 -->
                <div class="singUp-box">
                  <h4 class="pb-25">完成註冊後直接免驗證登入</h4>
                  <button class="signUp-btn">註冊</button>
                  <p class="agree-text">註冊即表示你同意並接受我們的 <router-link to="#">資料安全説明</router-link> 及
                  <router-link to="#">個資保護法</router-link>
                  </p>
                </div>
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
