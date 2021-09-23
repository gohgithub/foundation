<template>
  <div>
      <main class="login container">
        <section class="login-box">
          <h1>登入介面</h1>
            <form>
                <label for="userEmail">常用信箱</label>
                <input class="mb-20" type="email" v-model="user.email" id="userEmail" name="email" placeholder="請輸入信箱" required>
                <br>
                <label for="userPassword">密碼</label>
                <input class="mb-36" type="password" v-model="user.password" id="userPassword" name="password" placeholder="請輸入密碼" required>
                <div class="d-flex justify-content-end">
                    <a href="#" @click.prevent="unknownSignIn">匿名登入</a>
                    <a href="#" @click.prevent="signIn">會員登入</a>
                </div>
            </form>
        </section>

        <section class="signUp-box">
          <h2>註冊會員</h2>
            <form>
                <label for="email">常用信箱</label>
                <input class="mb-20" type="email" v-model="account.email" id="email" name="email" placeholder="請輸入信箱" required>
                <br>
                <label for="password">密碼</label>
                <input class="mb-36" type="password" v-model="account.password" id="password" name="password" placeholder="請輸入密碼" required>
                <div class="d-flex justify-content-end">
                    <a href="#" @click.prevent="tokenTest">測試 token</a>
                    <a href="#" @click.prevent="signUp">註冊會員</a>
                </div>
            </form>
        </section>
      </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: {
        email: '',
        password: ''
      },
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    unknownSignIn () {
      alert('你已經成功匿名登入')
    },
    signIn () {
      if (this.user.email === '' || this.user.password === '') {
        alert('帳密都沒打就想登入呀 ?!!!')
        return
      }
      const api = 'https://hexschool-tutorial.herokuapp.com/api/signin'
      this.$http.post(api, this.user).then((res) => {
        alert(res.data.message)
      })
    },
    signUp () {
      const api = 'https://hexschool-tutorial.herokuapp.com/api/signup'
      this.$http.post(api, this.account).then((res) => {
        alert(res.data.message)
      })
    },
    tokenTest () {
      console.log('test')
    }
  },
  created () {

  }
}
</script>
