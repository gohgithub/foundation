<template>
  <div>
    <section class="login-inner">
      <div class="container d-flex justify-content-center">
        <!-- 左側登入欄位-->
        <div class="login-left">
          <h3 data-aos="fade-up">會員登入</h3>
          <p data-aos="fade-up">-Log In-</p>
          <div class="form-box">
            <Form v-slot="{ errors }" @submit="onSubmit" autocomplete="off">
              <!-- ID/手機/Email -->
              <label data-aos="fade-up" for="登入信箱" class="login-account-label">
                  <span class="login-account-span">ID/手機/Email</span>
                  <Field class="login-account-input mb-15" rules="email|required" :class="{ 'outline-danger': errors['登入信箱'] }" name="登入信箱" type="email" placeholder="請輸入 ID 或手機或 Email" />
                  <error-message name="登入信箱" class="error-text "></error-message>
              </label>

              <!-- 密碼 -->
              <label data-aos="fade-up" for="登入密碼" class="login-password-label">
                  <span class="login-password-span">密碼</span>
                  <Field class="login-password-input" maxlength="13" rules="required|min:8" :class="{ 'outline-danger': errors['登入密碼'] }" id="login-password" name="登入密碼" type="password" placeholder="請輸入密碼"/>
              </label>

              <!-- 顯示密碼 -->
              <div class="form-check show-password">
                <div>
                  <error-message name="登入密碼" class="error-text"></error-message>
                </div>
                <div data-aos="fade-up" class="d-flex align-items-center">
                  <input class="form-check-input" type="checkbox"  @click="showPassword('login-password')" name="showPassword" id="showPassword">
                  <label class="form-check-label" for="showPassword" @click="showPassword('login-password')">
                    顯示密碼
                  </label>
                  <router-link to="/forget">我忘記密碼了</router-link>
                </div>
              </div>
              <button data-aos="fade-up" class="login-btn">登入</button>
            </Form>
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
                <li data-aos="fade-up" class="pb-90">
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
              <label data-aos="fade-up" for="信箱" class="signUp-label">
                <span class="signUp-span"><span class="text-danger">*</span>手機/Email</span>
                <Field v-model="signUpData.email" class="signUp-input mb-15" :class="{ 'outline-danger': errors['信箱'] }" name="信箱" type="email" rules="email|required" placeholder="請輸入手機或Email (僅忘記密碼使用，請正確填寫)" />
                <error-message name="信箱" class="error-text "></error-message>
              </label>

              <!-- 再次輸入手機/Email -->
              <label data-aos="fade-up" for="再次輸入信箱" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入手機/Email</span>
                <Field v-model="signUpData.email_confirmation" class="signUp-input mb-15" rules="required|emailConfirmed:@信箱" :class="{ 'outline-danger': errors['再次輸入信箱'] }" name="再次輸入信箱" type="email" placeholder="請再次輸入手機或Email" />
                <error-message name="再次輸入信箱" class="error-text"></error-message>
              </label>

              <!-- 帳號 -->
              <label data-aos="fade-up" for="帳號" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item">帳號</span>
                <Field v-model="signUpData.account" class="signUp-input mb-15" name="帳號" type="email" placeholder="(選填)除了手機/Email，亦可以使用帳號登入" />
              </label>

              <!-- 密碼 -->
              <label data-aos="fade-up" for="密碼" class="signUp-label py-0 pb-50">
                <span class="signUp-span-item"><span class="text-danger">*</span>密碼</span>
                  <Field v-model="signUpData.password" class="login-password-input signUp-Password mb-15" :class="{ 'outline-danger': errors['密碼'] }" maxlength="13" rules="required|min:8" name="密碼" type="password" placeholder="請輸入密碼"/>
                  <error-message name="密碼" class="error-text"></error-message>
              </label>

              <!-- 再次輸入密碼 -->
              <label data-aos="fade-up" class="signUp-label py-0" for="再次輸入密碼">
                <span class="signUp-span-item"><span class="text-danger">*</span>再次輸入密碼</span>
                <Field v-model="signUpData.password_confirmation" maxlength="13" rules="required|passwordConfirmed:@密碼" :class="{ 'outline-danger': errors['再次輸入密碼'] }" class="signUp-input signUp-ConPassword" name="再次輸入密碼" type="password" placeholder="請再次輸入密碼" />
              </label>

              <!-- 顯示密碼 -->
              <div class="form-check show-password">
                <div>
                <error-message name="再次輸入密碼" class="error-text"></error-message>
                </div>
                <div class="d-flex align-items-center" >
                  <input data-aos="fade-up" class="form-check-input" type="checkbox" @click="showPassword('signUp-Password')" name="showPassword">
                  <label data-aos="fade-up" class="form-check-label" for="showPassword" @click="showPassword('signUp-Password')">
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
                <Field as="select" name="請選擇性別" v-model="signUpData.gender" rules="required" :class="{ 'outline-danger': errors['請選擇性別'] }" class="select-gender mb-15">
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
                <Field name="出生日期">
                  <flat-pickr name="出生日期" v-model="signUpData.birthday" class="signUp-input mb-15" placeholder="YYYY/MM/DD(無法修改，請正確填寫)"></flat-pickr>
                </Field>
                <error-message name="出生日期" class="error-text"></error-message>
              </label>

              <!-- 所在縣市 -->
              <label data-aos="fade-up" class="signUp-label py-0 pb-25">
                <span class="signUp-span-item"><span class="text-danger">*</span>所在縣市</span>
                <i class="fas fa-caret-down select-down fa-2x"></i>
                <!-- <select v-model="signUpData.city" class="select-gender" :class="[isActive ? errorClass : '']"> -->
                <Field data-aos="fade-up" name="選擇地區" as="select" v-model="signUpData.city" :class="{ 'outline-danger': errors['選擇地區'] }" class="select-gender mb-15" rules="required">
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
                <p class="agree-text">註冊即表示你同意並接受我們的 <router-link to="#">資料安全説明</router-link> 及
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
            <p>
            第 一 章 總則 <br>
              第 1 條 為規範個人資料之蒐集、處理及利用，以避免人格權受侵害，並促進個人資料之合理利用，特制定本法。 <br>
              第 2 條 本法用詞，定義如下： 一、個人資料：指自然人之姓名、出生年月日、國民身分證統一編號、護照號碼、特徵、指紋、婚姻、家庭、教育、職業、病歷、醫療、基因、性生活、健康檢查、犯罪前科、聯絡方式、財務情況、社會活動及其他得以直接或間接方式識別該個人之資料。 二、個人資料檔案：指依系統建立而得以自動化機器或其他非自動化方式檢索、整理之個人資料之集合。 三、蒐集：指以任何方式取得個人資料。 四、處理：指為建立或利用個人資料檔案所為資料之記錄、輸入、儲存、編輯、更正、複製、檢索、刪除、輸出、連結或內部傳送。 五、利用：指將蒐集之個人資料為處理以外之使用。 六、國際傳輸：指將個人資料作跨國（境）之處理或利用。 七、公務機關：指依法行使公權力之中央或地方機關或行政法人。 八、非公務機關：指前款以外之自然人、法人或其他團體。 九、當事人：指個人資料之本人。 第 3 條 當事人就其個人資料依本法規定行使之下列權利，不得預先拋棄或以特約限制之： 一、查詢或請求閱覽。 二、請求製給複製本。 三、請求補充或更正。 四、請求停止蒐集、處理或利用。 五、請求刪除。 第 4 條 受公務機關或非公務機關委託蒐集、處理或利用個人資料者，於本法適用範圍內，視同委託機關。 第 5 條 個人資料之蒐集、處理或利用，應尊重當事人之權益，依誠實及信用方法為之，不得逾越特定目的之必要範圍，並應與蒐集之目的具有正當合理之關聯。 第 6 條 有關病歷、醫療、基因、性生活、健康檢查及犯罪前科之個人資料，不得蒐集、處理或利用。但有下列情形之一者，不在此限： 一、法律明文規定。 二、公務機關執行法定職務或非公務機關履行法定義務必要範圍內，且事前或事後有適當安全維護措施。<br>
              三、當事人自行公開或其他已合法公開之個人資料。<br>
              四、公務機關或學術研究機構基於醫療、衛生或犯罪預防之目的，為統計或學術研究而有必要，且資料經過提
            </p>
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
      isActive: false,
      errorClass: 'errorClass',
      token: ' lQqcl4DTYsjCRBGWSM2WX35HvR7Br8AKp46Uln8g',
      loginData: {
        email: '',
        password: ''
      },
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
      }
    }
  },
  components: {
    flatPickr
  },
  methods: {
    showPassword (e) {
      const loginPasswordValue = document.getElementById('login-password')
      const signUpPasswordValue = document.querySelector('.signUp-Password')
      const signUpConPassword = document.querySelector('.signUp-ConPassword')
      console.log(e)
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
    onSubmit (values) {
      const vm = this
      vm.$http.post('https://iecosystem-api.tomyue.cc/api/register', vm.signUpData).then((res) => {
        alert('註冊成功')
        vm.token = res.token
        console.log(res)
        console.log('這是取的的 token 值')
      })
      console.log(vm.signUpData)
    },
    hideHeader (e) {
      $('.header').hide()
      if (e === 'close') {
        $('.header').show()
      }
    }

  },
  watch: {
    'signUpData.city' (value) {
      if (value === '') {
        this.isActive = false
      }
    }
  },
  created () {
    this.$http.defaults.headers.common.Authorization = `Bearer${this.token}`
    this.$http.get('https://iecosystem-api.tomyue.cc/api/user').then((response) => {
      console.log(response)
    })
  }
}
</script>
