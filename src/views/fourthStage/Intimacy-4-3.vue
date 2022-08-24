<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">首頁</a></li>
                <li class="breadcrumb-item"><a href="#/Unintended-2">我意外懷孕了</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">親密關係</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">15 歲可以買避孕藥嗎</a></li>
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
                  <h2>｜15歲可以買避孕藥嗎｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>不論事前、事後避孕藥應由醫師看診後開立處方箋，才可由藥局取得藥品；如果自己在藥局購買，可能會買到假藥(非法進口的藥物)喔！</p>
                        <p>基於兒少保護，未滿16歲是不適合發生性行為的，因此，能否購買事前避孕藥存在爭議。</p>
                        <p>但若你已年滿16歲、未滿20歲，子宮內避孕器或是事前避孕藥的醫療處置，可自行前往相關醫療院所諮詢。</p>
                      </li>
                      <li data-aos="fade-up">
                      <p><a class="fs-5 text-danger" href="https://reurl.cc/V14eyy" target="_blank">>> 點我了解更多「避孕藥」相關議題</a></p>
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
