<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-3-2">我還沒準備好生下來</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="FamilyRelation-3-2">家庭關係</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">如何跟爸媽說懷孕了</router-link></li>
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
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜如何跟爸媽說懷孕了｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>父母在第一時間聽到這個消息，一定跟你一樣擔心害怕，有時候甚至會很生氣。但是這些情緒的背後，都是因為擔憂你們在這個年紀要面對這麼困難的抉擇。
                          <br><br>
                        或許在第一時間要和父母有共識並不容易，但是多數父母在最後都很願意幫助自己的孩子，若你在和父母溝通上有困難，歡迎與社工人員聯繫。<br><br>
                        未成年懷孕求助網站：<a class="text-success" href="https://257085.sfaa.gov.tw" target="_blank" title="未成年懷孕求助網站">257085.sfaa.gov.tw</a>
                        <br>
                        免付費諮詢專線：<a href="tel:0800257085" class="text-success">0800-25-7085
                          </a>（服務時間為週一到週五09:00～18:00）
                        </p>
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
