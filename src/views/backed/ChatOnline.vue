/* eslint-disable no-dupe-keys */
<template>
  <section class="chatOnline">
    <h2>線上聊聊</h2>
    <!-- 對話框 -->
    <div class="chatOnline-box">
      <!-- 自動回覆第一層 -->
      <div class="admin">
        <img src="../../assets/image/backed/member_image_administrator.svg">
        <div>
          <div class="admin-box">
            <h3>哈囉！歡迎使用線上聊聊系統：）<br>
                請問有什麽可以幫助你的嗎？
            </h3>
            <ul v-for="item in firstData.message" :key="item">
              <li>
                <p @click="firstSelect(item)">{{ item }}</p>
              </li>
            </ul>
          </div>
          <div class="time-item">
            <i class="far fa-clock"></i>
            <small>{{ firstData.time }}</small>
          </div>
        </div>
      </div>
      <!-- 使用者第一層 -->
      <div class="user" v-if="firstData.stage === 1 || firstData.isClose === true">
        <img src="../../assets/image/backed/member_image_user.svg">
        <div class="user-box">
          <h3>
            {{ firstData.user.select }}
          </h3>
        </div>
      </div>

      <!-- 自動回覆第二層 -->
      <div class="admin" v-if="firstData.user.select === '我想要生下來'">
        <img src="../../assets/image/backed/member_image_administrator.svg">
        <div>
          <div class="admin-box">
            <h3>您選擇了「{{firstData.user.select}}」</h3>
            <ul v-for="item in secondData.message" :key="item">
              <li>
                <p @click="secondSelect(item)">{{ item }}</p>
              </li>
            </ul>
          </div>
          <div class="time-item">
            <i class="far fa-clock"></i>
            <small>{{ secondData.time }}</small>
          </div>
        </div>
      </div>

      <!-- 使用者第二層 -->
      <div class="user" v-if="secondData.stage === 2 || secondData.isClose === true">
        <img src="../../assets/image/backed/member_image_user.svg">
        <div class="user-box">
          <h3>
            {{ secondData.user.select }}
          </h3>
        </div>
      </div>

      <!-- 自動回覆第三層 -->
      <div class="admin" v-if="secondData.user.select === '自行撫養'">
        <img src="../../assets/image/backed/member_image_administrator.svg">
        <div>
          <div class="admin-box">
            <h3>您選擇了「{{secondData.user.select}}」</h3>
            <ul v-for="item in thirdData.message" :key="item">
              <li>
                <p @click="thirdSelect(item)">{{ item }}</p>
              </li>
            </ul>
          </div>
          <div class="time-item">
            <i class="far fa-clock"></i>
            <small>{{ thirdData.time }}</small>
          </div>
        </div>
      </div>

      <!-- 轉接專人服務 -->
      <h3 v-if="thirdData.user.select === '轉接專人服務'" class="text-center dedicated-person">--- 正在轉接專人服務 ---</h3>

      <!-- 留言板 -->
      <!-- 管理者 -->
      <div v-if="thirdData.user.select === '轉接專人服務'" class="admin">
        <img src="../../assets/image/backed/member_image_administrator.svg">
        <div class="chat-box mb-60">
          <p>哈囉 請問有什麼問題呢？:D </p>
            <!-- <ul v-for="message in messages" :key="message">
              <li>
                {{ message.user_id }}
                {{ message.user_id === user.user.id ? 'user:' : 'admin' }}
                {{ message.body }}
              </li>
            </ul> -->
        </div>
      </div>

      <!-- 使用者 -->
      <div class="user pb-60" v-if="isAddMessage">
        <img src="../../assets/image/backed/member_image_user.svg">
        <div class="user-box">
          <p>
            {{ newMessage }}
          </p>
        </div>
      </div>

      <div v-if="thirdData.user.select === '轉接專人服務'" class="input-group input-item mt-5">
        <input type="text" class="form-control" placeholder="輸入問題" v-model="newMessage">
        <button class="btn btn-primary" type="button" @click="addMessage">送出</button>
      </div>
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
      'user'
    ])
  },
  data () {
    return {
      // 儲存訊息資料用
      isAddMessage: false,
      messages: [],
      newMessage: '',
      userId: 17,
      // *** 第一階段資料 ***
      firstData: {
        message: {
          textA: '我需要有人一起討論',
          textB: '我不想要生下來',
          textC: '我想要生下來',
          textD: '如何安排與男方關係',
          textE: '如何得到社會協助',
          textF: '我未滿16歲',
          textG: '疑似懷孕'
        },
        user: {
          select: ''
        },
        time: moment().format('YYYY/MM/DD HH:mm:ss'),
        isClose: false,
        stage: 0
      },

      // *** 第二階資料 ***
      secondData: {
        message: {
          textA: '自行撫養',
          textB: '其他因素無法自行撫養'
        },
        user: {
          select: ''
        },
        time: '',
        isClose: false,
        stage: 0
      },

      // *** 第三階資料 ***
      thirdData: {
        message: {
          textA: '結束諮詢',
          textB: '轉接專人服務'
        },
        user: {
          select: ''
        },
        time: '',
        isClose: false,
        stage: 0
      }
    }
  },
  methods: {
    // Q&A 自動回覆第一階
    firstSelect (text) {
      const vm = this
      const data = vm.firstData
      if (data.isClose === false) {
        data.user.select = text
        data.stage = 1
        data.isClose = true
        vm.secondData.time = moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
      }
    },
    // 自動回覆第二階
    secondSelect (text) {
      const vm = this
      const data = vm.secondData
      if (data.isClose === false) {
        data.user.select = text
        data.stage = 1
        data.isClose = true
        vm.thirdData.time = moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
      }
    },
    // 自動回覆第三階
    thirdSelect (text) {
      const vm = this
      const data = vm.thirdData
      if (data.isClose === false) {
        data.user.select = text
        data.stage = 1
        data.isClose = true
      }
    },
    addMessage () {
      const vm = this
      if (vm.newMessage === '') {
        return false
      }
      vm.axios.post('https://iecosystem-api.tomyue.cc/api/messages', { body: vm.newMessage })
        .then((response) => {
          vm.messages.push({ body: vm.newMessage, user_id: vm.user.user.id })
          vm.isAddMessage = true
        })
    }
  },
  created () {
    const vm = this
    vm.axios.get('https://iecosystem-api.tomyue.cc/api/users/' + this.userId + '/messages?page=1&perPage=100')
      .then((res) => {
        vm.messages = res.data.data
      })
  }
}
</script>
