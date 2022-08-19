<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item" aria-current="page"><a href="#/Unintended-2">我意外懷孕了</a></li>
              <li class="breadcrumb-item" aria-current="page"><a href="#/Unintended-3-1">我想要生下來</a></li>
              <li class="breadcrumb-item" aria-current="page"><a href="#">家庭關係</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">雙方家長溝通</a></li>
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
                  <h2>｜雙方家長溝通｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>是否要/如何讓雙方家長溝通？</h3>
                        <p>或許在第一時間要和家長有共識並不容易，但是多數家長在最後都很願意幫助自己的孩子。<br><br>
                          當要促成雙方家長溝通前，有一個原則很重要，不論如何、家長都不希望自己的孩子受委屈，女方或是男方都可能有各自的立場，但如果能透過溝通、理解彼此期待和難處、或許就能找到較好的因應方式。
                          <br><br>
                          若你在與對方家長溝通上有困難，歡迎與社工人員聯繫。
                        </p>
                        <p>免付費諮詢專線：<a href="tel:0800257085" class="text-success">0800-25-7085
                          </a><br>
                          服務時間為週一到週五09:00～18:00
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