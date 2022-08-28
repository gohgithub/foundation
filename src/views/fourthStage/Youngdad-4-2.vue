<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">我女友懷孕了</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">不知道女友有沒有懷孕</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">法律議題</a></li>
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
          <p class="step-sologan" data-aos="fade-up">或許你可能在網路上搜尋到一些觸法的危機，先別擔心，<br>
          讓我們來為你說明這些法律跟你的關係。<br>你願意點到這裡，已經很不容易，代表你是有責任與擔當的！<br>法律的目的是在保障彼此的權益，只要你也能好好面對與處理，也能有轉機喔！</p>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜法律議題｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="act-4-3">我未滿16歲</router-link>
                  <p class="d-block">我才14歲，和女友發生性行為後，<br>好像懷孕了怎麼辦…</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="act-4-1">我未滿20歲</router-link>
                  <p class="d-block">女友已經19歲了，可以自己決定要不要生嗎？<br>
                  (112年修正成未滿18)</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="act-4-5">我已經成年</router-link>
                  <p class="d-block">我已經成年，還會遇到什麼問題呢？</p>
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
