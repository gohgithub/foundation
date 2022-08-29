<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
            <li class="breadcrumb-item active" aria-current="page"><router-link to="">我還沒準備好生下來</router-link></li>
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
          <div class="text-box">
            <p class="step-text" data-aos="fade-up">STEP 03</p>
            <h2 class="step-title" data-aos="fade-up">中止・生下</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
            <p class="step-sologan" data-aos="fade-up">我還沒準備好要迎接寶寶，還能怎麼做？</p>
          </div>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜我還沒準備好生下來｜</h2>
              </div>
              <ul class="step-menu">
                <li class="d-none" data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="unintended-4-3">終止懷孕</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="medical-4-6">醫療議題</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="act-3-1">法律議題</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="MentalCare-4-3">身心照顧</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="FamilyRelation-3-2">家庭關係</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="1200">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="chat">我需要幫助</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
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
