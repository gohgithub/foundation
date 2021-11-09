<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/family-2">我親友懷孕了</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
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
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up">為家人所想，為關係所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜因為有你們，蝴蝶不孤單｜</h2>
                </div>
                <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                    <p data-aos="fade-up">可以想像在得知您女友遭遇到這樣狀況時，或許也會有些自責與愧咎！<br>
                       這想法、感受都是真實也很自然的，只是在決定做什麼前，<br>
                       或許也鼓勵您多參照在選擇各種方式前，先想想這樣方式對雙方的影響及會面臨的處境與感受。<br>
                       以下是屬於您可行使的相關權利，供您作參考與了解：
                    </p>
                  <hr data-aos="fade-up">
                </div>
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>
                         當青少年情侶得知懷孕的消息，兩人的心情瞬間盪到了谷底，忐忑不安，擔心父母的責備、他人的異樣眼光、學業、未來...等。
                        </p>
                        <p>在這樣的狀態下，他們與這個世界漸行漸遠，築起了一到高牆，將自己孤立了起來，甚至造成了令人難過的社會事件。這樣的情況並不陌生，可能就發生在你與我的親友之間，也許是一個不經意的問候，一個刻意的關心，多做一個小小的舉動，也許都能改變他們故事結局。</p>
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
