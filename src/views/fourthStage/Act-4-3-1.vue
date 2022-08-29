<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="daughter-2">我女兒懷孕了</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="talking-3-1-1">不知道有沒有懷孕</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="act-3-1-1">法律議題</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">未滿16歲 或 20歲</router-link></li>
            </ol>
          </nav>
        </section>

        <section class="container step-rwd">
          <div class="step">
            <!-- 裝飾用圖片 -->
            <img class="step-circle" src="../../assets/image/front/image_circleword.svg">
            <img class="image1" src="../../assets/image/front/page02_image1.svg">
            <img class="image2" src="../../assets/image/front/page02_image2.svg">
            <img class="image3" src="../../assets/image/front/page02_image3.svg">
            <!-- 結束 -->
            <div class="text-box">
              <p class="step-text" data-aos="fade-up" >ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >註：112年修正未滿18歲</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜未滿16歲 或 20歲｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>想必你現在一定很擔心女兒的狀況，但是第一步還是要先確認是否有懷孕喔。<br><br>
                            如果要進行人工流產，必須先確認懷孕週數，在現行優生保健法的規定內，超過24週是無法進行手術的。
                            <br><br>
                            另外，即便女兒現在未成年，但有關於生育的決定，監護人和當事人的意見都同等重要，不論要繼續懷孕或是人工流產，都必須取得共同決定。
                            法律上為了保護未滿16歲的青少年們身心健康，規範這個年齡層不適合發生性行為，因此當診所、醫院知道這個狀況，就保護青少年的立場，還是會通知社會局社工人員關懷喔。
                            <br><br>
                            如果是年滿16歲但未滿20歲的當事人(法定成年)，有關醫療和監護權民法等相關決定，都必須有監護人共同面對。
                            如果監護人和當事人還無法取得共識，也可以透過社工的服務，陪伴您們面對這個家庭協商的過程。
                            <br> <br>
                            未成年懷孕求助網站：<a class="text-success" href="https://257085.sfaa.gov.tw" target="_blank" title="未成年懷孕求助網站">257085.sfaa.gov.tw</a>
                            <br>
                            免付費諮詢專線：
                            <a href="tel:0800257085" class="text-success">0800-25-7085</a>（服務時間為週一到週五09:00～18:00）
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
