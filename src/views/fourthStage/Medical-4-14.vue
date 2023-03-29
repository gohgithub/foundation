<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down"  data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="talking-3">我不知道該怎麼做</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="medical-3-1">醫療議題</router-link></li>
            <li class="breadcrumb-item active" aria-current="page"><router-link to="">正確使用口服避孕藥</router-link></li>
          </ol>
        </nav>
      </section>

      <!-- 主要區塊 -->
      <section class="container step-rwd">
        <div class="step">
          <!-- 裝飾用圖片 -->
          <img class="step-circle" src="../../assets/image/front/image_circleword.svg">
          <img class="image1" src="../../assets/image/front/page02_image1.svg">
          <img class="image2" src="../../assets/image/front/page02_image2.svg">
          <img class="image3" src="../../assets/image/front/page02_image3.svg">
          <!-- 結束 -->
          <div class="title-box">
            <p class="step-text" data-aos="fade-up" >ANSEWR</p>
            <h2 class="step-title" data-aos="fade-up">選擇・答案</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
            <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
          </div>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>正確使用口服避孕藥的優點？</h2>
              </div>
              <div class="select-menu">
                <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                <hr data-aos="fade-up">
                  <!-- 選項開始 -->
                  <ul class="select-item container-inner mt-60">
                    <li data-aos="fade-up">
                      <p>新型常規避孕藥24+4劑型，成功率高達99%<br>
                        優點：女性可自主決定並使用的避孕措施。<br>
                        使用期間會有規則月經及改善經痛，並可降低經血過多所導致之缺鐵性貧血。<br>
                        可降低卵巢癌、子宮內膜癌、子宮癌、大腸直腸癌發生風險。<br>
                        可降低骨盆腔發炎及子宮外孕的風險。</p>
                    </li>
                  </ul>
                  <!-- 選項結束 -->
                  <hr data-aos="fade-up">
                  <div data-aos="fade-up">
                    <a class="goBack" onclick="history.back()" value="回到上一頁">回到上一頁</a>
                    <a class="goBack" href="#">返回首頁</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <Consult></Consult>
      <Circle></Circle>
    </main>
  </div>
</template>
<script>
import Consult from '../../components/Consult.vue'

export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  components: {
    Consult
  }
}
</script>
