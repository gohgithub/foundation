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
                  <h2>｜我該負的相關責任｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>依據兒童及少年福利與權益保障法中第2條明定兒童及少年係指未滿18歲之人；第3條指出父母或監護人指出父母或監護人對兒少應負保護、教養之責。 </p>
                        <p>所以當未成年子女的行為不當，，觸及法律時，父母父母會有連帶之責任。</p>
                        <p>但相信這些法律規範重點在於提醒我們為人父母應盡之責，而非強調如有不當之處罰。所以只要我們陪著孩子找到適當的因應方法或藉由事件促進孩子的成長，這就是我們為人父母最大的責任了。</p>
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
