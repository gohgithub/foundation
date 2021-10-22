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
              <Form v-slot="{ errors }" @submit="onSubmit" autocomplete="off">
                <!-- ID/手機/Email -->
                <label for="登入信箱" class="login-account-label">
                    <span class="login-account-span">ID/手機/Email</span>
                    <Field class="login-account-input mb-15" rules="email|required" :class="{ 'outline-danger': errors['登入信箱'] }" name="登入信箱" type="email" placeholder="請輸入 ID 或手機或 Email" />
                    <error-message name="登入信箱" class="error-text "></error-message>
                </label>

                <!-- 密碼 -->
                <label for="登入密碼" class="login-password-label">
                    <span class="login-password-span">密碼</span>
                    <Field class="login-password-input" maxlength="13" rules="required|min:8" :class="{ 'outline-danger': errors['登入密碼'] }" id="login-password" name="登入密碼" type="password" placeholder="請輸入密碼"/>
                </label>

                <!-- 顯示密碼 -->
                <div class="form-check show-password">
                  <div>
                    <error-message name="登入密碼" class="error-text"></error-message>
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
              <Form v-slot="{ errors }" @submit="onSubmit" autocomplete="off">
                <!-- 手機/Eamil -->
                <label for="信箱" class="signUp-label">
                  <span class="signUp-span"><span class="text-danger">*</span>手機/Email</span>
                  <Field v-model="signUpData.email" class="signUp-input mb-15" :class="{ 'outline-danger': errors['信箱'] }" name="信箱" type="email" rules="email|required" placeholder="請輸入手機或Email (僅忘記密碼使用，請正確填寫)" />
                  <error-message name="信箱" class="error-text "></error-message>
                </label>

                <!-- 再次輸入手機/Email -->
                <label for="再次輸入信箱" class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入手機/Email</span>
                  <Field v-model="signUpData.confirmEmail" class="signUp-input mb-15" rules="required|emailConfirmed:@信箱" :class="{ 'outline-danger': errors['再次輸入信箱'] }" name="再次輸入信箱" type="email" placeholder="請再次輸入手機或Email" />
                  <error-message name="再次輸入信箱" class="error-text"></error-message>
                </label>

                <!-- 帳號 -->
                <label for="帳號" class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item">帳號</span>
                  <Field v-model="signUpData.account" class="signUp-input mb-15" name="帳號" type="email" placeholder="(選填)除了手機/Email，亦可以使用帳號登入" />
                </label>

                <!-- 密碼 -->
                <label for="密碼" class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>密碼</span>
                    <Field v-model="signUpData.password" class="login-password-input" :class="{ 'outline-danger': errors['密碼'] }" maxlength="13" rules="required|min:8" name="密碼" type="password" placeholder="請輸入密碼"/>
                    <error-message name="密碼" class="error-text"></error-message>
                </label>

                <!-- 再次輸入密碼 -->
                <label class="signUp-label py-0 pb-50" for="再次輸入密碼">
                  <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入密碼</span>
                  <Field v-model="signUpData.confirmPassword" maxlength="13" rules="required|passwordConfirmed:@密碼" :class="{ 'outline-danger': errors['再次輸入密碼'] }" class="signUp-input mb-15" name="再次輸入密碼" type="password" placeholder="請再次輸入密碼" />
                  <error-message name="再次輸入密碼" class="error-text"></error-message>
                </label>

                <!-- 暱稱 -->
                <label for="暱稱" class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item">暱稱</span>
                  <Field v-model="signUpData.id" class="signUp-input mb-15" name="暱稱" type="text" placeholder="(選填)請輸入暱稱" />
                </label>

                <!-- 性別 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>性別</span>
                  <i class="fas fa-caret-down select-down fa-2x"></i>
                  <select v-model="signUpData.gender" class="select-gender">
                    <option value="" disabled>請選擇性別</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="其他">其他</option>
                  </select>
                </label>

                <!-- 出生 -->
                <label class="signUp-label py-0 pb-50">
                  <span class="signUp-span-item"><span class="text-danger">*</span>出生</span>
                  <flat-pickr v-model="signUpData.born" class="signUp-input mb-15" placeholder="YYYY/MM/DD(無法修改，請正確填寫)"></flat-pickr>
                </label>

                <!-- 所在縣市 -->
                <label class="signUp-label py-0 pb-25">
                  <span class="signUp-span-item"><span class="text-danger">*</span>所在縣市</span>
                  <i class="fas fa-caret-down select-down fa-2x"></i>
                  <select v-model="signUpData.city" class="select-gender" :class="[isActive ? activeClass : '']">
                    <option selected disabled value="" >請選擇所在地區</option>
                    <option value="基隆市">基隆市</option>
                    <option value="台北市">台北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園縣">桃園縣</option>
                    <option value="新竹市">新竹市</option>
                    <option value="新竹縣">新竹縣</option>
                    <option value="苗栗縣">苗栗縣</option>
                    <option value="台中市">台中市</option>
                    <option value="彰化縣">彰化縣</option>
                    <option value="南投縣">南投縣</option>
                    <option value="雲林縣">雲林縣</option>
                    <option value="嘉義市">嘉義市</option>
                    <option value="嘉義縣">嘉義縣</option>
                    <option value="台南市">台南市</option>
                    <option value="高雄市">高雄市</option>
                    <option value="屏東縣">屏東縣</option>
                    <option value="台東縣">台東縣</option>
                    <option value="花蓮縣">花蓮縣</option>
                    <option value="宜蘭縣">宜蘭縣</option>
                    <option value="澎湖縣">澎湖縣</option>
                    <option value="金門縣">金門縣</option>
                    <option value="連江縣">連江縣</option>
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
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
// 載入元件
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

// 載入 flatPciker
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

// 載入驗證規則
import { defineRule } from 'vee-validate'

// 初始化規則
defineRule('passwordConfirmed', (value, [target]) => {
  if (value === target) {
    return true
  }
  return '與密碼不相符'
})

defineRule('emailConfirmed', (value, [target]) => {
  if (value === target) {
    return true
  }
  return '與信箱不相符'
})

defineRule('selectLocal', (value, [target]) => {
  if (value === target) {
    return true
  }
  return '與信箱不相符'
})

export default {
  data () {
    return {
      isActive: true,
      activeClass: 'activeClass',
      signUpData: {
        email: '',
        confirmEmail: '',
        account: '',
        password: '',
        confirmPassword: '',
        id: '',
        gender: '',
        born: '',
        city: ''
      }
    }
  },
  components: {
    Header,
    Footer,
    flatPickr
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
      const vm = this
      const data = vm.signUpData
      if (data.city === '') {
        console.log('沒有選取城市')
        return
      }
      console.log(vm.signUpData)
    }
  },
  created () {
  }
}
</script>
