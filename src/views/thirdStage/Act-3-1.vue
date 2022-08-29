<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="talking-3">我不知道該怎麼做</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="medical-3-1">醫療議題</router-link></li>
            <li class="breadcrumb-item active" aria-current="page"><router-link to="">未成年拿避孕藥會被通報</router-link></li>
          </ol>
        </nav>
      </section>

      <!-- 步驟選項 -->
      <section class="container step-rwd">
        <div class="step">
          <!-- 裝飾用圖片 -->
          <img class="step-circle" src="../../assets/image/front/image_circleword.svg">
          <img class="image1" src="../../assets/image/front/page02_image1.svg">
          <img class="image2" src="../../assets/image/front/page02_image2.svg">
          <img class="image3" src="../../assets/image/front/page02_image3.svg">
          <!-- 結束 -->
          <p class="step-text" data-aos="fade-up">STEP 03</p>
          <h2 class="step-title" data-aos="fade-up">責任・承擔</h2>
          <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
          <p class="step-sologan" data-aos="fade-up">面對可能懷孕的情況，你有足夠了解法律上能夠保護你的資源嗎？
            <br>(有哪些可以保護你的法律資源？)
          </p>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜未成年拿避孕藥會被通報？｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="act-4-3">我未滿16歲</router-link>
                  <p class="d-block">我才14歲，發生性行為後，<br>好像懷孕了怎麼辦…</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="act-4-1">我未滿20歲</router-link>
                  <p class="d-block">我已經19歲了，可以自己決定要不要生嗎？<br>（112年修正成未滿18歲）</p>
                </li>
              </ul>
              <hr data-aos="fade-up">
              <div data-aos="fade-up">
                <a class="goBack" onclick="history.back()" value="回到上一頁">回到上一頁</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Circle></Circle>
    </main>
  </div>
</template>
