<template>
  <div>
    <section class="login-inner">
      <div class="container login-container d-flex justify-content-center">
        <!-- 左側登入欄位-->
        <div class="login-left">
          <h3 data-aos="fade-up">會員登入</h3>
          <p data-aos="fade-up">-Log In-</p>
          <div class="form-box">
            <Form v-slot="{ errors }" @submit="login" autocomplete="off">
              <!-- ID/手機/Email -->
              <label data-aos="fade-up" for="登入信箱" class="login-account-label">
                  <span class="login-account-span">Email</span>
                  <Field v-model="loginData.email" class="login-account-input mb-15" rules="email|required" :class="{ 'border-danger': errors['登入信箱'] }" name="登入信箱" type="email" placeholder="請輸入 Email" />
                  <error-message name="登入信箱" class="error-text "></error-message>
              </label>

              <!-- 密碼 -->
              <label data-aos="fade-up" for="登入密碼" class="login-password-label">
                  <span class="login-password-span">密碼</span>
                  <Field v-model="loginData.password" class="login-password-input" maxlength="13" rules="required|min:8" :class="{ 'border-danger': errors['登入密碼'] }" id="login-password" name="登入密碼" type="password" placeholder="請輸入密碼"/>
              </label>

              <!-- 顯示密碼 -->
              <div class="form-check show-password">
                <div>
                  <error-message name="登入密碼" class="error-text error-text-rwd"></error-message>
                </div>
                <div data-aos="fade-up" class="d-flex align-items-center">
                  <input class="form-check-input" type="checkbox" @click="showPassword('login-password')" id="showPassword">
                  <label class="form-check-label" @click="showPassword('login-password')">
                    顯示密碼
                  </label>
                  <router-link to="/forget">我忘記密碼了</router-link>
                </div>
              </div>
              <button data-aos="fade-up" class="login-btn">登入</button>
            </Form>
            <button data-aos="fade-up" v-if="window.width <= 575" class="login-btn mt-20" @click="changeSignUp()">註冊</button>
            <!-- 快速登入 -->
            <div class="fastLogin">
              <div data-aos="fade-up" class="fastLogin-header">
                <hr class="fastLogin-leftLine">
                <h3>｜快速登入｜</h3>
                <hr class="fastLogin-rightLine">
              </div>
              <ul>
                <li data-aos="fade-up">
                  <a class="fb-item" href="#">
                    <i class="fab fa-facebook-f fa-2x fb-icon"></i>
                    <p class="pb-0 fb-text">使用Facebook登入</p>
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a class="google-item" href="#">
                    <img src="../../assets/image/front/icon_google.svg">
                    <p class="pb-0">使用Google登入</p>
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a class="line-item" href="#">
                    <img src="../../assets/image/front/icon_line.svg">
                    <p class="pb-0 line-text">使用Line登入</p>
                  </a>
                </li>
                <li data-aos="fade-up" class="list">
                  <a class="apple-item" href="#">
                    <i class="fab fa-apple fa-2x apple-icon"></i>
                    <p class="pb-0 apple-text">使用Apple登入</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 右側註冊欄 -->
        <div class="login-right">
          <h3 data-aos="fade-up">會員註冊</h3>
          <p data-aos="fade-up">-Sign up-</p>
          <div class="form-box">
            <Form v-slot="{ errors }" @submit="onSubmit" autocomplete="off">
              <!-- 手機/Eamil -->
              <label data-aos="fade-up" for="信箱" class="signUp-label rwd-signUp-label">
                <span class="signUp-span"><span class="text-danger">*</span>Email</span>
                <Field v-model="signUpData.email" class="signUp-input mb-15" :class="{ 'border-danger': errors['信箱'] }" name="信箱" type="email" rules="email|required" placeholder="請輸入 Email" />
                <error-message name="信箱" class="error-text"></error-message>
              </label>

              <!-- 再次輸入手機/Email -->
              <label data-aos="fade-up" for="再次輸入信箱" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入 Email</span>
                <Field v-model="signUpData.email_confirmation" class="signUp-input mb-15" rules="required|emailConfirmed:@信箱" :class="{ 'border-danger': errors['再次輸入信箱'] }" name="再次輸入信箱" type="email" placeholder="請再次輸入 Email" />
                <error-message name="再次輸入信箱" class="error-text"></error-message>
              </label>

              <!-- 帳號 -->
              <label data-aos="fade-up" for="帳號" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item">帳號</span>
                <Field v-model="signUpData.account" class="signUp-input mb-15" name="帳號" type="email" placeholder="(選填)除了Email，亦可以使用帳號登入" />
              </label>

              <!-- 密碼 -->
              <label data-aos="fade-up" for="密碼" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item"><span class="text-danger">*</span>密碼</span>
                  <Field v-model="signUpData.password" class="login-password-input signUp-Password mb-15" :class="{ 'border-danger': errors['密碼'] }" maxlength="13" rules="required|min:8" name="密碼" type="password" placeholder="請輸入密碼"/>
                  <error-message name="密碼" class="error-text"></error-message>
              </label>

              <!-- 再次輸入密碼 -->
              <label data-aos="fade-up" class="signUp-label py-0" for="再次輸入密碼">
                <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入密碼</span>
                <Field v-model="signUpData.password_confirmation" maxlength="13" rules="required|passwordConfirmed:@密碼" :class="{ 'border-danger': errors['再次輸入密碼'] }" class="signUp-input signUp-ConPassword" name="再次輸入密碼" type="password" placeholder="請再次輸入密碼" />
              </label>

              <!-- 顯示密碼 -->
              <div class="form-check show-password rwd-show-password">
                <div>
                <error-message name="再次輸入密碼" class="error-text error-text-rwd"></error-message>
                </div>
                <div class="d-flex align-items-center" >
                  <input data-aos="fade-up" class="form-check-input" type="checkbox" @click="showPassword('signUp-Password')">
                  <label data-aos="fade-up" class="form-check-label" @click="showPassword('signUp-Password')">
                    顯示密碼
                  </label>
                </div>
              </div>

              <!-- 暱稱 -->
              <label data-aos="fade-up" for="暱稱" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item">暱稱</span>
                <Field v-model="signUpData.name" class="signUp-input mb-15" name="暱稱" type="text" placeholder="(選填)請輸入暱稱" />
              </label>

              <!-- 性別 -->
              <label data-aos="fade-up" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item"><span class="text-danger">*</span>性別</span>
                <i class="fas fa-caret-down select-down fa-2x"></i>
                <Field as="select" name="請選擇性別" v-model="signUpData.gender" rules="required" :class="{ 'border-danger': errors['請選擇性別'] }" class="select-gender mb-15">
                  <option value="" disabled>請選擇性別</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="其他">其他</option>
                </Field>
                <error-message name="請選擇性別" class="error-text"></error-message>
              </label>

              <!-- 出生 -->
              <label data-aos="fade-up" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item"><span class="text-danger">*</span>出生</span>
                <Field name="出生日期" v-model="signUpData.birthday" class="signUp-input mb-15" rules="required" :class="{ 'border-danger': errors['請選擇性別'] }" />
                  <!-- <flat-pickr :config="config" id="myPicker" name="出生日期" v-model="signUpData.birthday" class="signUp-input mb-15 picker-input" placeholder="YYYY/MM/DD(無法修改，請正確填寫)"></flat-pickr> -->
                <!-- </Field> -->
                <error-message name="出生日期" class="error-text"></error-message>
              </label>

              <!-- 所在縣市 -->
              <label data-aos="fade-up" class="signUp-label py-0 pb-25">
                <span class="signUp-span-item"><span class="text-danger">*</span>所在縣市</span>
                <i class="fas fa-caret-down select-down fa-2x"></i>
                <Field data-aos="fade-up" name="選擇地區" as="select" v-model="signUpData.city" :class="{ 'border-danger': errors['選擇地區'] }" class="select-gender mb-15" rules="required">
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
                </Field>
              <error-message name="選擇地區" class="error-text"></error-message>
              </label>
              <!-- 註冊按鈕 -->
              <div data-aos="fade-up" class="singUp-box">
                <h4 class="pb-25">完成註冊後直接免驗證登入</h4>
                <button class="signUp-btn">註冊</button>
                <p class="agree-text">註冊即表示你同意並接受我們的
                  <a @click="hideHeader" data-bs-toggle="modal" data-bs-target="#personalModal">個資保護法</a>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>

    <!-- 個資法 modal -->
    <div class="modal fade personalModal" data-bs-backdrop="static" id="personalModal" tabindex="-1" aria-labelledby="personalModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-body">
            <p>個人資料蒐集告知聲明暨同意書</p><br>
            <p>因應個人資料保護法及本平台個人資料保護管理政策規定，本平台在向您蒐集個人資料之前，依法向您告知下列事項，當您勾選「我同意」，表示您已閱讀、瞭解並同意接受本同意書之所有內容：</p><br>
            <p>一、蒐集目的及資料類別</p><br>
            <p>為提供聊天服務或健康促進相關活動訊息及本平台內部管理使用之蒐集目的，而須獲取您下列個人資料類別：姓名、電話、E-mail或其他得以直接或間接識別您個人之資料。</p><br>
            <p>二、個人資料利用之期間、地區、對象及方式</p><br>
            <p>您的個人資料，除涉及國際業務或活動外，僅供本平台於上述蒐集目的之必要合理範圍內加以利用至前述蒐集目的消失時為止。</p><br>
            <p>三、當事人權利行使</p><br>
            <p>依據個人資料保護法第3條規定，您可向本平台請求查詢或閱覽、製給複製本、補充或更正、停止蒐集/處理/利用或刪除您的個人資料。</p><br>
            <p>四、不提供個人資料之權益影響</p><br>
            <p>如您不提供或未提供正確之個人資料，或要求停止蒐集/處理/利用/刪除個人資料、服務訊息的取消訂閱，本平台將無法為您提供蒐集目的之相關服務。</p><br>
            <p>五、各項通知服務、相關訊息之停止寄送，可透過訊息內容提供之取消訂閱連結通知。您可於上班時間聯繫本平台（電話(04)2206-2121，分機2261）。<br>
            就違反本個資聲明之行為，請 Email 至社工室信箱 swr@mail.cmuh.org.tw 反映。</p>
            <div class="mt-60">
              <p>個人資料同意提供：</p>
              <p>「我同意」授權貴平台於所列目的之必要合理範圍內，蒐集、處理及利用本人之個人資料。</p>
              <p>法規之要求，並提供予貴平台留存及日後查證使用。</p>
            </div>
          </div>
          <div class="modal-footer">
            <span @click="hideHeader('close')" data-bs-toggle="modal" class="close-modal">OK</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

// 載入 flatPciker
// import flatPickr from 'vue-flatpickr-component'
// import 'flatpickr/dist/flatpickr.css'

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
      isActive: false,
      errorClass: 'errorClass',
      loginData: {
        email: '',
        password: ''
      },
      ajaxData: '',
      signUpData: {
        email: '',
        email_confirmation: '',
        account: '',
        password: '',
        password_confirmation: '',
        name: '',
        gender: '',
        birthday: '',
        city: ''
      },
      window: {
        width: 375
      },
      config: {
        weekNumbers: true
      }
    }
  },
  components: {
    // flatPickr
  },
  methods: {
    showPassword (e) {
      const loginPasswordValue = document.getElementById('login-password')
      const signUpPasswordValue = document.querySelector('.signUp-Password')
      const signUpConPassword = document.querySelector('.signUp-ConPassword')
      if (e === 'login-password' && loginPasswordValue.type === 'password') {
        loginPasswordValue.type = 'text'
      } else {
        loginPasswordValue.type = 'password'
      }

      if (e === 'signUp-Password' && signUpPasswordValue.type === 'password') {
        signUpPasswordValue.type = 'text'
        signUpConPassword.type = 'text'
      } else {
        signUpPasswordValue.type = 'password'
        signUpConPassword.type = 'password'
      }
    },
    onSubmit () {
      const vm = this
      vm.$http.post('https://iecosystem-api.tomyue.cc/api/register', vm.signUpData).then((res) => {
        if (res.data.success === 'false') {
          this.$swal.fire('帳號註冊失敗')
        }
        console.log(res)
      })
    },
    login () {
      const vm = this
      vm.$store.dispatch('login', {
        email: vm.loginData.email,
        password: vm.loginData.password
      })
      vm.$router.push('/backed')
    },
    hideHeader (e) {
      $('.header').hide()
      if (e === 'close') {
        $('.header').show()
      }
    },
    myEventHandler (e) {
      this.window.width = window.innerWidth
    },
    changeSignUp () {
      $('.login-left').toggleClass('d-none')
      $('.login-right').toggleClass('d-block')
    }
  },
  watch: {
    'signUpData.city' (value) {
      if (value === '') {
        this.isActive = false
      }
    }
  },
  mounted () {
    this.window.width = window.innerWidth
  },
  created () {
    window.addEventListener('resize', this.myEventHandler)
  }
}
</script>
