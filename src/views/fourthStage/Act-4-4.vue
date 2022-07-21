<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">我意外懷孕了</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">我想要生下來</a></li>
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
          <div class="text-box">
            <p class="step-text" data-aos="fade-up">STEP 04</p>
            <h2 class="step-title" data-aos="fade-up">中止・生下</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
            <p class="step-sologan" data-aos="fade-up">相信你現在有種種的擔憂，這些都是很常見的疑問，<br>
            讓我們冷靜下來看看相關的法律規範吧!
            </p>
          </div>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜法律議題｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="act-5-1">共同撫養，父母不同意</router-link>
                  <p class="d-block">我和女朋友想要共同撫養小孩，<br> 但父母不同意，我可以怎麼做呢？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="act-5-2">已分手，獨自撫養</router-link>
                  <p class="d-block">我已經跟女朋友分手了，<br>可以自己養小孩嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="act-5-3">被通報上法院</router-link>
                  <p class="d-block">被通報會要上法院嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="unintended-4-2">無法人工流產，也無法撫養</router-link>
                  <p class="d-block">我女友已經沒辦法人工流產了，<br> 但是我真的沒辦法養小孩，到底該怎麼辦</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="familyRelation-4-3">滿18歲想生，父母不同意</router-link>
                  <p class="d-block">我女友18歲，我們想要生下孩子，<br> 但我/他的父母強迫我拿掉，我可以怎麼辦？</p>
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
