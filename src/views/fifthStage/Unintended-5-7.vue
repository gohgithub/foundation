<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#">中止生下</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
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
              <p class="step-text" data-aos="fade-up">STEP 02</p>
              <h2 class="step-title" data-aos="fade-up">中止・生下</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
              <p class="step-sologan" data-aos="fade-up">為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜出養｜</h2>
                </div>
                <ul class="step-menu">
                  <li data-aos="fade-up" data-aos-delay="300">
                    <img src='../../assets/image/front/page02_pic1.jpg'>
                    <router-link to="unintended-6-1">什麼是出養</router-link>
                    <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="600">
                    <img src='../../assets/image/front/page02_pic2.jpg'>
                    <router-link to="unintended-6-2">法律規定</router-link>
                    <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="600">
                    <img src='../../assets/image/front/page02_pic3.jpg'>
                    <router-link to="unintended-6-3">社福資源</router-link>
                    <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Circle></Circle>
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
