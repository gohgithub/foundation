<template>
  <div>
    <input type="text" v-model="tempUserData.password">
    <input type="text" v-model="tempUserData.password_confirmation">
    <button @click.prevent="chagnePassword">更改密碼</button>
  </div>
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
          alert(res.data.message)
        }).catch(() => {
          console.log('123')
        })
    }
  }
}
</script>
