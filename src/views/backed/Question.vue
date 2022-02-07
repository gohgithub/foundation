<template>
  <section class="chatOnline">
    <h2>線上聊聊</h2>
    <!-- 對話框 -->
    <div class="chatOnline-box">
      <div v-for="(item, index) in messages" :key="index">
        <div class="user pb-30 pt-40" v-if="item.user_id == 54">
          <img src="../../assets/image/backed/member_image_user.svg">
            <ul class="d-flex align-items-end flex-column">
              <li>
                <div class="user-box">
                  <p>
                    {{ item.body }}
                    {{ item.length}}
                  </p>
                </div>
              </li>
              <div class="time-item">
                <i class="far fa-clock"></i>
                <small>{{ item.created_at }}</small>
              </div>
          </ul>
        </div>
        <div class="admin-chat" v-if="item.user_id == 55">
          <img src="../../assets/image/backed/member_image_administrator.svg">
          <ul class="d-flex align-items-end flex-column">
            <li>
              <div class="admin-chat-box">
                <p>
                  {{ item.body }}
                  {{ item.length}}
                </p>
              </div>
              <div class="time-item">
                  <i class="far fa-clock"></i>
                  <small>{{ item.created_at }}</small>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="admin-chat" v-for="(item, index) in newData" :key="index">
        <img src="../../assets/image/backed/member_image_administrator.svg">
        <ul class="d-flex align-items-end flex-column">
          <li>
            <div class="admin-chat-box">
              <p>
                {{ item.body }}
                {{ item.length}}
              </p>
            </div>
            <div class="time-item">
                <i class="far fa-clock"></i>
                <small>{{ item.created_at }}</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="send-input">
      <input type="text" placeholder="回覆問題" v-model="newMessage">
      <button class="btn btn-black" type="button" @click="addMessage">送出</button>
    </div>
  </section>
</template>
<script>
// 載入 moment.js + 設置語系
import * as moment from 'moment/moment'
import { mapGetters } from 'vuex'
moment.locale('zh-tw')

export default {
  computed: {
    ...mapGetters([
      'user',
      'userData'
    ])
  },
  data () {
    return {
      // 儲存訊息資料用
      newMessage: '',
      userMessages: [],
      messages: [],
      newData: []
    }
  },
  methods: {
    addMessage () {
      const vm = this
      if (vm.newMessage === '') {
        return false
      }
      vm.axios.post('https://iecosystem-api.tomyue.cc/api/users/' + 54 + '/messages', { body: vm.newMessage })
        .then((response) => {
          vm.isAddMessage = true
          vm.newData.push({ body: vm.newMessage, created_at: moment(new Date()).format('YYYY/MM/DD HH:mm:ss') })
          vm.newMessage = ''
        })
    },
    getMessage () {
      const vm = this
      vm.axios.get('https://iecosystem-api.tomyue.cc/api/messages?page=1&perPage=100')
        .then((res) => {
          vm.messages = res.data.data
        })
    },
    getUserMessage () {
      const vm = this
      vm.axios.get('https://iecosystem-api.tomyue.cc/api/users/' + 54 + '/messages?page=1&perPage=100')
        .then((res) => {
          console.log(res)
          vm.messages = res.data.data
        })
    }
  },
  created () {
    this.getUserMessage()
    this.getMessage()
  }
}
</script>
