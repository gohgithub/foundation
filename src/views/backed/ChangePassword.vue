<template>
  <section class="chagnePassword">
    <h2>變更密碼</h2>
    <Form @submit="onSubmit" autocomplete="off">
      <div class="mb-3 mt-20 row">
        <label for="password" class="col-sm-2 col-form-label">請輸入密碼</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" maxlength="13" v-model="tempUserData.password" />
          <!-- <error-message name="密碼" class="error-text"></error-message> -->
        </div>
      </div>
      <div class="mb-3 row">
        <label for="confirmationPassword" class="col-sm-2 col-form-label">再次輸入密碼</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="confirmationPassword" maxlength="13" v-model="tempUserData.password_confirmation">
        </div>
      </div>
    </Form>
    <button class="btn btn-purple text-white mt-20" @click.prevent="chagnePassword">更改密碼</button>
  </section>
</template>

<script>
export default {
  data () {
    return {
      tempUserData: {
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    chagnePassword () {
      this.$http.post('https://iecosystem-api.tomyue.cc/api/user/reset-password', this.tempUserData)
        .then((res) => {
          if (res.data.message) {
            alert(res.data.message)
          } else {
            alert(res.data.password)
          }
        }).catch(() => {
        })
    }
  }
}
</script>
