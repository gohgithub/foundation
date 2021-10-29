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
            <ul>
              <li>
                <p @click="select('生下小孩自己顧')">{{ firstData.textA }}</p>
              </li>
              <li>
                <p @click="select('生下小孩出養')">{{ firstData.textB }}</p>
              </li>
              <li>
                <p @click="select('終止懷孕')">{{ firstData.textC }}</p>
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
      <div class="user" v-if="firstData.stage === 2">
        <img src="../../assets/image/backed/member_image_user.svg">
        <div class="user-box">
          <h3>
            {{ firstData.user.select }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// 載入 moment.js + 設置語系
import * as moment from 'moment/moment'
moment.locale('zh-tw')

export default {
  data () {
    return {
      // 第一階段資料
      firstData: {
        textA: '生下小孩自己顧',
        textB: '生下小孩出養',
        textC: '終止懷孕',
        textD: '如何安排與男方關係',
        textE: '如何得到社會協助',
        textF: '我未滿16歲',
        textG: '疑似懷孕',
        // 使用者選擇
        user: {
          select: ''
        },
        time: moment().format('YYYY/MM/DD HH:mm:ss'),
        // 停留階段
        stage: 0,
        isClose: false
      }
    }
  },
  methods: {
    select (text) {
      const vm = this
      const data = vm.firstData
      if (data.isClose === false) {
        data.user.select = text
        data.stage = 2
        data.isClose = true
      }
    }
  }
}
</script>
