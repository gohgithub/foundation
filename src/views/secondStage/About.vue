<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">關於我們</a></li>
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
              <p class="step-text" data-aos="fade-up">About</p>
              <h2 class="step-title" data-aos="fade-up" >關於小蝴蝶</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up"></p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜小蝴蝶資源整合平台｜</h2>
                </div>
                <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/paela_about.png'>
                    <p data-aos="fade-up">
                    </p>
                  <hr data-aos="fade-up">
                </div>
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>小蝴蝶寓意</h3>
                        <p class="mb-20">
                          美麗的台灣是蝴蝶王國，漫天飛舞的迷人身影，是台灣生命力的奇蹟。<br>
                          只要有愛，都是能讓彼此強壯的地方。
                        </p>
                        <p>
                          同時，就如同繪本《蝴蝶朵朵》裡所說的：<br>
                          「每個人都有翅膀，每對翅膀都會面對大大小小的風暴，有時被雨淋濕，有時受點擦傷。<br>
                          但是只要我們懂得愛護它，它們就能恢復晶瑩透亮，再次展翅飛翔。」<br>
                          —《幸佳慧 著、陳潔皓、徐思寧 繪》
                        </p>
                      </li>
                      <li>
                         <ul class="list mb-60">
                           <li>
                            <h3>核心主題</h3><br>
                            守護勇敢•翩然起舞
                           </li>
                           <li>
                            平台優勢隱私～匿名自主登錄安心諮詢，保障個人自主隱私
                           </li>
                            <li>
                            便捷～整合公、私社福資源，以一站式窗口服務銜接所需
                           </li>
                            <li>
                            多元～多元方式，應用於多種載具
                           </li>
                           <li>
                             預警～透過智能判讀，早期發現警示個案，強化介入成效
                           </li>
                           <li>
                             教育～系統化公共衛生知能、生活化口語編成知識庫
                           </li>
                            <li>
                              公益～跨界協作平台，攜手企業共同參與永續發展目標
                            </li>
                         </ul>
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
        <Article></Article>
        <Circle></Circle>
      </main>
    </div>
</template>
<script>
import Consult from '../../components/Consult.vue'
import Article from '../../components/Article.vue'

export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  components: {
    Consult,
    Article
  }
}
</script>
