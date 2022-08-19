<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">首頁</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">我意外懷孕了</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">我想要生下來</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">身心照顧</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">身心狀況量測</a></li>
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
            <div class="text-box">
              <p class="step-text" data-aos="fade-up">ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up">選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up">為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜身心狀況量測｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>簡式健康表(Brief Symptom Rating Scale， BSRS-5)</h3>
                      </li>
                      <li>
                        <p>說明：<br>
                          本量表所列舉的問題是為協助您瞭解您的身心適應狀況，請您仔細回想在最近一星期中(包括今天)，這些問題使您感到困擾或苦惱的程度，然後圈選一個您認為最能代表您感覺的答案。
                        <br><br>
                        <a class="fs-5 text-success" href="https://health99.hpa.gov.tw/onlineQuiz/bsrs5" target="_blank">>>前往測驗</a>
                        </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>壓力指數測量表</h3>
                      </li>
                      <li>
                        <p>說明：<br>
                          預防勝於治療，職場心理健康促進計劃的第一步就是了解現況。因此，可利用本表進行壓力評估，評估每位員工的壓力狀況，作為擬訂壓力管理計畫之參考依據。
                        <br><br>
                        <a class="fs-5 text-success" href="https://health99.hpa.gov.tw/onlineQuiz/pressure" target="_blank">>>前往測驗</a>
                        </p>

                      </li>

                      <li data-aos="fade-up">
                        <p>資料來源：<a class="fs-5 text-danger" href="https://health99.hpa.gov.tw/" target="_blank">衛生福利部國民健康署《健康九九》</a></p>
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
