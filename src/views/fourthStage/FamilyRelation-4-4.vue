<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#/Unintended-2">我意外懷孕了</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#/Unintended-3-1">我想要生下來</a></li>
           <li class="breadcrumb-item active" aria-current="page"><a href="#">家庭關係</a></li>
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
          <p class="step-sologan" data-aos="fade-up">你可能會覺得很囧！自己造成的卻無法收尾~ <br>
          確實，新生命的出現，不是一件小事，他是家裡的大事，<br>
          先不管是否要生下來，即使無法讓他出生，我們都需要完善的討論與處理。<br>
          讓我們陪你一起來討論該如何面對這樣的狀況吧！
          </p>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜家庭關係｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="familyRelation-4-1">會通報家長嗎？</router-link>
                  <p class="d-block">我還沒20歲/16歲會不會通報家長？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="familyRelation-4-3">如何跟爸媽說懷孕了</router-link>
                  <p class="d-block">不知道怎麼跟我爸媽說，可能懷孕了…<br>如何向親人告知及求助…</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="familyRelation-5-4">雙方家長溝通</router-link>
                  <p class="d-block">是否要/如何讓雙方家長溝通？</p>
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
