<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">首頁</a></li>
                <li class="breadcrumb-item"><a href="#/Unintended-2">我意外懷孕了</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">親密關係</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">辨識情人需求</a></li>
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
              <h2 class="step-title" data-aos="fade-up">選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜辨識情人需求｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>在交往過程當中，如何辨視你的情人也想要？要拒絕可以嗎？</p>
                      </li>
                      <li data-aos="fade-up">
                        <p>
                        你想過人生第一次性愛的模樣嗎？<br>
                        會不會擔心不知道該怎麼做呢？<br>

                        🙋‍♂️「她是不是覺得我太小...」<br>
                        🙋‍♀️「他會弄痛我嗎🥺」<br>
                        🙋‍♂️「我在不知不覺中，強暴了她？」<br>
                        🙋‍♀️「如果表現出不舒服，對方下次還願意跟我嗎？」<br>

                        許多人對性的想像是來自於 A 片<br>
                        學校、家裡對性教育又選擇不多談<br>
                        到底第一次，該怎麼辦？<br>
                        <br>

                        #郭雅真性平講師 以一個真實故事<br>
                        跟現場同學聊聊男生、女生分別在第一次遇到的問題、苦惱<br>
                        <br>

                        ★溫馨提醒：未滿16歲，愛愛是違法的喔！<br>
                        ★美好的性愛需要從互相尊重出發！
                        </p>
                      </li>
                      <li data-aos="fade-up">
                      <p>觀看影片說明：
                        <a class="fs-5 text-danger" href="https://www.youtube.com/watch?v=1n4yeJwyCCs" target="_blank">專家大揭密！你想過愛愛初體驗長怎樣嗎？【最新專題｜青春發言人】</a></p>
                      </li>
                      <li>
                        <iframe src="https://www.youtube.com/embed/1n4yeJwyCCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
