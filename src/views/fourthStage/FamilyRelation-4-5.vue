<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
             <li class="breadcrumb-item"><a href="/">首頁</a></li>
             <li class="breadcrumb-item" aria-current="page"><a href="#/daughter-2">我女兒懷孕了</a></li>
             <li class="breadcrumb-item" aria-current="page"><a href="#/talking-3-1-1">我不知道該怎麼做</a></li>
             <li class="breadcrumb-item" aria-current="page"><a href="#">家庭關係</a></li>
             <li class="breadcrumb-item active" aria-current="page"><a href="#">我該如何跟孩子討論？</a></li>
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
              <h2 class="step-title" data-aos="fade-up" >責任・承擔</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >成為孩子的後盾</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜我該如何跟孩子討論？｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>性教育在台灣是一個保守、隱晦的議題，在日常的對話間並不常見，這也會導致孩子不知是否能主動向家長提起這個話題。連帶的孩子可能也會以過往未曾談論的經驗，連結此事為不被認可的事，因為擔心家長生氣或對其失望，而選擇避而不說。</p>
                      </li>
                      <li data-aos="fade-up">
                        <p>當事件發生時，你的心情也等於是孩子在知道事件時的心情。當我們遇到無法掌握的狀況時，通常壓力指數、情緒狀態都不會太好，請您相信，您孩子出如此。所以此時過度的指責、批評都可能讓您與您孩子的距離更遠。</p>
                      </li>
                      <li data-aos="fade-up">
                        <p>建議您在要與孩子討論前，先安頓自己的心情與狀態，我知道這並不容易，如果需要也很歡迎您可以與我們聯絡，讓我們陪您整理心情及討論因應策略。</p>
                      </li>
                      <li data-aos="fade-up">
                        <p>先調整好心情後，再陪著孩子們一起面對這不容易的狀況，相信雖然這件突發事件，看似搞雜了孩子的人生，但只要我們好好陪著孩子面對與處理，這件事會成為孩子人生中很重要的寶藏，得以讓他更有勇氣來面對未來的人生。</p>
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
