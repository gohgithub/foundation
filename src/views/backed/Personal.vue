<template>
  <!-- 個人檔案-->
  <section class="personal">
    <h2>個人檔案</h2>
    <div class="personal-box">

    <!-- email -->
    <div class="d-flex py-20 align-items-center">
      <h3 class="fw-bold">E-mail</h3>
      <span>{{ userData.email }}</span>
    </div>

    <!-- 帳號 -->
    <div class="d-flex py-20">
      <h3 class="fw-bold">帳號</h3>
      <span v-if="userData.account">{{ userData.account}}</span>
      <span v-else>暫時無資料</span>
    </div>

    <!-- 暱稱 -->
    <div class="d-flex py-20">
      <h3 class="fw-bold">暱稱</h3>
      <span>{{ userData.name }}</span>
    </div>

    <!-- 性別 -->
    <div class="d-flex py-20 align-items-center">
      <h3 class="fw-bold">性別</h3>
      <div class="form-check pr-25">
        <input class="form-check-input" v-model="tempUserData.gender" type="radio" name="flexRadioDefault" :checked="userData.gender === 'male'" id="male" value="male">
        <label class="form-check-label" for="male">
            男性
        </label>
      </div>
      <div class="form-check pr-25">
        <input class="form-check-input" v-model="tempUserData.gender" type="radio" name="flexRadioDefault" :checked="userData.gender === 'female'" id="female" value="female">
        <label class="form-check-label" for="female">
            女性
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" v-model="tempUserData.gender" type="radio" name="flexRadioDefault" :checked="userData.gender === 'other'" id="other" value="other">
        <label class="form-check-label" for="other">
            其他
        </label>
      </div>
    </div>

    <!-- 生日 -->
    <div class="d-flex py-20 align-items-center">
    <h3 class="fw-bold">生日</h3>
    <span>{{ userData.birthday }}</span>
    </div>
    <!-- 所在縣市 -->
    <div class="d-flex py-20 align-items-center">
      <h3 class="fw-bold">所在縣市</h3>
      <div class="select-item">
        <i class="fas fa-caret-down select-down fa-2x"></i>
        <select v-model="userData.city">
          <option :selected="userData.city === '基隆市'" value="基隆市">基隆市</option>
          <option :selected="userData.city === '台北市'" value="台北市">台北市</option>
          <option :selected="userData.city === '新北市'" value="新北市">新北市</option>
          <option :selected="userData.city === '桃園縣'" value="桃園縣">桃園縣</option>
          <option :selected="userData.city === '新竹市'" value="新竹市">新竹市</option>
          <option :selected="userData.city === '新竹縣'" value="新竹縣">新竹縣</option>
          <option :selected="userData.city === '苗栗縣'" value="苗栗縣">苗栗縣</option>
          <option :selected="userData.city === '台中市'" value="台中市">台中市</option>
          <option :selected="userData.city === '彰化縣'" value="彰化縣">彰化縣</option>
          <option :selected="userData.city === '南投縣'" value="南投縣">南投縣</option>
          <option :selected="userData.city === '雲林縣'" value="雲林縣">雲林縣</option>
          <option :selected="userData.city === '嘉義市'" value="嘉義市">嘉義市</option>
          <option :selected="userData.city === '嘉義縣'" value="嘉義縣">嘉義縣</option>
          <option :selected="userData.city === '台南市'" value="台南市">台南市</option>
          <option :selected="userData.city === '高雄市'" value="高雄市">高雄市</option>
          <option :selected="userData.city === '屏東市'" value="屏東縣">屏東縣</option>
          <option :selected="userData.city === '台東縣'" value="台東縣">台東縣</option>
          <option :selected="userData.city === '花蓮縣'" value="花蓮縣">花蓮縣</option>
          <option :selected="userData.city === '宜蘭縣'" value="宜蘭縣">宜蘭縣</option>
          <option :selected="userData.city === '澎湖縣'" value="澎湖縣">澎湖縣</option>
          <option :selected="userData.city === '金門縣'" value="金門縣">金門縣</option>
          <option :selected="userData.city === '連江縣'" value="連江縣">連江縣</option>
        </select>
      </div>
    </div>

    <!-- 儲存資料 -->
    <button @click="saveData">儲存</button>
    </div>
    <hr>
  </section>
</template>
<script>
export default {
  data () {
    return {
      tempUserData: {
        gender: '',
        city: ''
      }
    }
  },
  methods: {
    getUserData () {
      this.$store.dispatch('getUserData')
    },
    saveData () {
      this.tempUserData = this.userData
      this.$store.dispatch('saveData', this.tempUserData)
    }
  },
  computed: {
    userData () {
      return this.$store.state.userData
    }
  },
  created () {
    this.getUserData()
  }
}
</script>
