<template>
  <div>
    <Header></Header>
    <main class="container">
      <div class="backed-box">
        <!-- 側邊 sidebar -->
        <section class="sidebar">
          <div class="sidebar-inner">
            <img src="../../assets/image/backed/member_image_user.svg">
            <h3>小美</h3>
          </div>
          <div class="sidebar-menu">
            <!-- 我的帳戶 -->
            <h4 class="d-flex align-items-center">
                <img src="../../assets/image/backed/member_icon_1.svg">我的帳戶
            </h4>
            <ul>
                <li>
                    <router-link to="#">個人檔案</router-link>
                </li>
                <li>
                    <router-link to="#">更改密碼</router-link>
                </li>
            </ul>

            <!-- 我的歷程 -->
            <h4 class="d-flex align-items-center pt-15">
                <img src="../../assets/image/backed/member_icon_2.svg">我的歷程
            </h4>
            <ul>
                <li>
                    <router-link to="course">歷程總覽</router-link>
                </li>
                <li>
                    <router-link to="chatonline">申請進度查詢</router-link>
                </li>
            </ul>

            <!-- 我想聊聊 -->
            <h4 class="d-flex align-items-center pt-15">
                <img src="../../assets/image/backed/member_icon_3.svg">我想聊聊
            </h4>
            <ul>
                <li>
                    <router-link to="/chatonline">線上聊聊</router-link>
                </li>
            </ul>
          </div>
        </section>
      <router-view></router-view>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
// 載入 Header 跟 Footer 元件
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

export default {
  data () {
    return {

    }
  },
  methods: {
    test (data) {
      console.log(data)
      console.log('攝氏')
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    // 取得 token 保持登入狀態用
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
  }
}
</script>
