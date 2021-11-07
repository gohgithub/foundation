<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-2">我女兒懷孕了</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-3-1">我想要生下來</a></li>
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
              <p class="step-text" data-aos="fade-up" >ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜自行撫養｜</h2>
                </div>
                <div>
                  <div class="step-header">
                    <img data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                    <p data-aos="fade-up">承擔起一個重要的責任。<br>
                    或許辛苦，但是人們總說這是一個甜蜜的負擔。<br>
                    我們一起看看，能夠從哪裡做起吧!</p>
                    <hr data-aos="fade-up">
                  </div>
                    <!-- 選項開始 -->
                    <ul class="step-menu">
                      <li data-aos="fade-up"  data-aos-delay="300">
                        <img src='../../assets/image/front/page02_pic1.jpg'>
                        <router-link to="unintended-5-1">家庭狀態</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up"  data-aos-delay="500">
                        <img src='../../assets/image/front/page02_pic2.jpg'>
                        <router-link to="unintended-5-3">相關法規</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="700">
                        <img src='../../assets/image/front/page02_pic3.jpg'>
                        <router-link to="unintended-5-2">心理狀態</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="300">
                        <img src='../../assets/image/front/page02_pic1.jpg'>
                        <router-link to="unintended-5-4">校園支持</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="500">
                        <img src='../../assets/image/front/page02_pic2.jpg'>
                        <router-link to="unintended-5-5">經濟狀態</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="700">
                        <img src='../../assets/image/front/page02_pic3.jpg'>
                        <router-link to="unintended-5-6">社福資源</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
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
      </main>
    </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  mounted () {

  },
  components: {
  }
}
</script>
