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
              <p class="step-sologan" data-aos="fade-up">為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜家庭狀態｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>家庭是否合適撫養</h3>
                        <p>現今的社會有許多種家庭型態：雙親家庭、隔代教養、單親家庭等等，雖然妳目前仍未成年、妳仍有權利決定是否要留下寶寶親自撫育。但是在選擇自己撫養寶寶是必須面對不同的挑戰，不管是自己的學業可否繼續、經濟可否負擔以及教養等等都是重要課題</p>
                      </li>
                    </ul>
                    <!-- 選項結束 -->
                    <hr data-aos="fade-up">
                    <div data-aos="fade-up">
                      <a class="goBack" href="#">返回首頁</a>
                    </div>
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
      data: [

      ]
    }
  }
}
</script>
