<template>
  <section class="chatOnline">
    <h2>線上聊聊</h2>
    <!-- 對話框 -->
    <div class="chatOnline-box">
      <!-- 管理者第一層 -->
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
      <div class="user" v-if="firstData.stage === 2 || firstData.isClose === true">
        <img src="../../assets/image/backed/member_image_user.svg">
        <div class="user-box">
          <h3>
            {{ firstData.user.select }}
          </h3>
        </div>
      </div>

      <!-- 管理者第二層 -->
      <div class="admin" v-if="firstData.user.select === '我想要生下來'">
        <img src="../../assets/image/backed/member_image_administrator.svg">
        <div>
          <div class="admin-box">
            <h3>您選擇了「{{firstData.user.select}}」</h3>
            <ul>
              <!-- <li>
                <p @click="select('我需要有人一起討論')">{{ firstData.textA }}</p>
              </li>
              <li>
                <p @click="select('我不想要生下來')">{{ firstData.textB }}</p>
              </li>
              <li>
                <p @click="select('我想要生下來')">{{ firstData.textC }}</p>
              </li>
              <li>
                <p @click="select('如何安排與男方關係')">{{ firstData.textD }}</p>
              </li>
              <li>
                <p @click="select('如何得到社會協助')">{{ firstData.textE }}</p>
              </li>
              <li>
                <p @click="select('我未滿16歲')">{{ firstData.textF }}</p>
              </li>
              <li>
                <p @click="select('疑似懷孕')">{{ firstData.textG }}</p>
              </li> -->
            </ul>
          </div>
          <div class="time-item">
            <i class="far fa-clock"></i>
            <small>{{ firstData.time }}</small>
          </div>
        </div>
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
      messages: [],
      newMessage: '',
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
      // 選擇「我想要生下來」
      secondData: {
        textA: ''
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
        data.stage = 2
        data.isClose = true
        setTimeout(() => {
          data.stage = 3
        }, 1000)
      }
    }
  },
  created () {
    const vm = this
    this.axios.get('https://iecosystem-api.tomyue.cc/api/messages?page=1&perPage=100')
      .then((res) => {
        vm.messages = (res.data.data)
        console.log(vm.messages)
      })
  }
}
</script>
