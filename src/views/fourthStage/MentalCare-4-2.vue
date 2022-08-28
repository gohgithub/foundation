<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#/youngdad-2">我女友懷孕了</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#/unintended-3-3">我們想要生下來</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">身心照顧</a></li>
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
            <p class="step-text" data-aos="fade-up">STEP 04</p>
            <h2 class="step-title" data-aos="fade-up">中止・生下</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
            <p class="step-sologan" data-aos="fade-up">突如其來的懷孕狀況，想必你一定嚇壞了，<br>面對不如何因應的心情，及害怕搞雜一切的擔心，我們都知道唷！讓我們陪你聊聊</p>
          </div>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜身心照顧｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="mentalCare-5-1">女友孕程的身心變化</router-link>
                  <p class="d-block">面對第一次懷孕，<br>你可能有很多未知的恐懼及擔心，無論是哪一種情緒，都是陪伴你迎接新生命的過程喔！</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="mentalCare-5-2">心理狀況</router-link>
                  <p class="d-block">不論孕期或是產後，<br>媽媽的心理狀況都不容忽視，<br>需要家人和朋友給予關心與支持</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="mentalCare-5-4">身心狀況量測</router-link>
                  <p class="d-block">
                    面對懷孕的訊息及接種而來要處理及面對的事情，
                    你可能有很多未知的恐懼及擔心，<br>這是很正常的！<br>
                    讓我們來掌握一下你目前的身心狀況吧！</p>
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
