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
              <li class="breadcrumb-item"><a href="#/unintended-4-1">自行撫養</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
            </ol>
          </nav>
        </section>

        <!-- 主要區塊 -->
        <section class="container">
          <div class="select">
            <!-- 裝飾用圖片 -->
            <img class="select-circle" src="../../assets/image/front/image_circleword.svg">
            <img class="image1" src="../../assets/image/front/page02_image1.svg">
            <img class="image2" src="../../assets/image/front/page02_image2.svg">
            <img class="image3" src="../../assets/image/front/page02_image3.svg">
            <!-- 結束 -->
            <p class="select-text" data-aos="fade-up" >ANSEWR</p>
            <h2 class="select-title" data-aos="fade-up" >選擇・答案</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
            <p class="select-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            <div class="container select-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜出養｜</h2>
                </div>
                <div class="select-menu">
                  <!-- 選項開始 -->
                  <ul class="select-list justify-content-center">
                    <li data-aos="fade-up"  data-aos-delay="300">
                      <img src='../../assets/image/front/page02_pic1.jpg'>
                      <router-link to="unintended-6-1" class="selectBtn">什麼是出養</router-link>
                      <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                    </li>
                    <li data-aos="fade-up"  data-aos-delay="500">
                      <img src='../../assets/image/front/page02_pic2.jpg'>
                      <router-link to="unintended-6-2" class="selectBtn">法律規定</router-link>
                      <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                    </li>
                    <li data-aos="fade-up"  data-aos-delay="500">
                      <img src='../../assets/image/front/page02_pic2.jpg'>
                      <router-link to="unintended-6-3" class="selectBtn">社福資源</router-link>
                      <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                    </li>
                  </ul>
                  <!-- 選項結束 -->
                </div>
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
