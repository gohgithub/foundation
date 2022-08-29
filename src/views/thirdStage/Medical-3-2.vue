<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-3-1">我想要生下來</router-link></li>
            <li class="breadcrumb-item active" aria-current="page"><router-link to="">醫療議題</router-link></li>
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
          <p class="step-text" data-aos="fade-up">STEP 04</p>
          <h2 class="step-title" data-aos="fade-up">責任・承擔</h2>
          <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
          <p class="step-sologan" data-aos="fade-up">迎接新生命的到來，媽媽和寶寶的健康都很重要，<br>
          讓我們來看看可以怎麼預備？
          </p>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜醫療議題｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="medical-4-2">寶寶發育週期及產檢？</router-link>
                  <p>一定要有家長幫我簽同意書嗎？<br> 我男友成年了可以幫我簽嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="medical-4-3">意外流產？</router-link>
                  <p>一定要有家長幫我簽同意書嗎？<br> 我男友成年了可以幫我簽嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="medical-4-4">分娩計畫</router-link>
                  <p>一定要有家長幫我簽同意書嗎？<br> 我男友成年了可以幫我簽嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="medical-4-5">產檢計畫</router-link>
                  <p class="d-block">產檢做些什麼呢？會需要花多少錢</p>
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
