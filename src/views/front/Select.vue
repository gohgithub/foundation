<template>
    <div>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item"><a href="#">中止生下</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
          </ol>
        </nav>
      </section>

      <!-- 文章內容 -->
      <section class="container">
        <div class="select">
          <!-- 裝飾用圖片 -->
          <img class="select-circle" src="../../assets/image/front/image_circleword.svg">
          <img class="image1" src="../../assets/image/front/page02_image1.svg">
          <img class="image2" src="../../assets/image/front/page02_image2.svg">
          <img class="image3" src="../../assets/image/front/page02_image3.svg">
          <!-- 結束 -->
          <p class="select-text" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">ANSEWR</p>
          <h2 class="select-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">選擇・答案</h2>
          <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
          <p class="select-sologan" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">為自己所想，為自己所選。</p>
          <div class="container select-box">
            <div class="select-box-inner">
              <div class="box-title" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="600">
                <h2>｜我想要生下來了｜</h2>
              </div>
              <div class="select-menu">
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="400">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <p>這裡可以打簡短文案，<br>整體比較一致。（呼應前一頁此項目的簡短文案）</p>
                  <hr>
                  <p>個笑嗎沒會人在為遠看香根大力流通適然美環用他小愛久。<br>
                  年常和關歷？不北自日德出。未價你一，班本級一西需，沒人文大他式神價出；不的？<br>
                  越期取年思、沒須果素多科驗候是化腳法管樣學在底進後樣會像明。戲學功……成言城、灣第強出由育<br>
                  顯條求為？等令起備和性，作市市人、人常總出服防活說畫腦對眼福真人河車分，月他人長雖內節麼的<br>
                  舉林。評物以地兒下飛為這導通自出母。連意然師離賽特運地點萬黨皮地雖克提語打數樂出了好金友王<br>
                  石。南維容自備，管心用式因。<br>
                  電備指絕客阿了眾到黃著所經黑是試因，主自同腦大想兩玩。還聯越都我代。統加是他腳。重所兒劇死<br>
                  亮紙黨新；著盡拿南四高大物愛家立家導河兩農。去情孩賽有物，水雲如提了如己造一服望。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Circle></Circle>
    </div>
</template>
<script>
import Circle from '../../components/PointCircle.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {

  },
  components: {
    Circle
  }
}
</script>
