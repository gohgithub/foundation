<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="daughter-2">我女兒懷孕了</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="talking-3-1-1">不知道有沒有懷孕</router-link></li>
            <li class="breadcrumb-item active" aria-current="page"><router-link to="">家庭關係</router-link></li>
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
          <p class="step-sologan" data-aos="fade-up">我知道身為父母的你有多麼寶貝你的孩子，也沒有預期到這樣的事情會發生，<br>
          所以有許多的焦慮與擔心，甚至有生氣的情緒，面對孩子無法自己面對，需要你陪著一同處理，也有許多無奈，
          <br>我們也來看看孩子有哪些擔心與反應…
          </p>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜家庭關係｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="familyRelation-4-5">我該如何跟孩子討論？</router-link>
                  <p class="d-block">為什麼孩子不願意說？<br>或是不早點告訴我們(家長)呢？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="familyRelation-4-6">我該負的相關責任</router-link>
                  <p class="d-block">孩子懷孕，我要怎麼做？</p>
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
