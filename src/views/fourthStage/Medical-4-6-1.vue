<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-2">我意外懷孕了</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-3-1">我還沒準備好生下來</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">醫療議題</a></li>
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
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜醫療議題｜</h2>
                </div>
                <div>
                    <!-- 選項開始 -->
                    <ul class="step-menu">
                      <!-- <li data-aos="fade-up"  data-aos-delay="300">
                        <img src='../../assets/image/front/page02_pic1.jpg'>
                        <router-link to="medical-5-1">拿掉小孩</router-link>
                        <p class="d-block">哪裡可以不用告訴家長就拿掉小孩呢?</p>
                      </li> -->
                      <li data-aos="fade-up"  data-aos-delay="500">
                        <img src='../../assets/image/front/page02_pic2.jpg'>
                        <router-link to="unintended-4-2">懷孕超過時間</router-link>
                        <p class="d-block">女兒懷孕的週數已經超過24週了，<br>該怎麼辦？</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="700">
                        <img src='../../assets/image/front/page02_pic3.jpg'>
                        <router-link to="medical-5-3">人工流產</router-link>
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
