<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item"><a href="#/daughter-2">我女兒懷孕了</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">我想要生下來</a></li>
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
            <p class="step-sologan" data-aos="fade-up">如果我要生下寶寶，接下來會面對什麼狀況？</p>
          </div>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜我想要(只能選擇)生下來｜</h2>
              </div>
              <ul class="step-menu">
                <li class="d-none" data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="unintended-4-1">自行撫養</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li class="d-none" data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="unintended-4-2">其他因素無法自行撫養</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="medical-3-2">醫療議題</router-link>
                  <p class="d-block">迎接新生命的到來，<br>女兒和寶寶的健康都很重要，<br>讓我們來看看可以怎麼準備？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="act-4-2-1">法律議題</router-link>
                  <p class="d-block">相信你現在有種種擔憂，<br>這些都是很正常的，<br>讓我們來看看相關法律規範吧！</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="familyRelation-4-2-1">家庭關係</router-link>
                  <p class="d-block">和家人討論過，<br>和懷孕的女兒討論過了嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="study-4-1">就學問題</router-link>
                  <p class="d-block">如果女兒還在讀書，<br>能得到什麼協助？</p>
                </li>
                <li class="d-none" data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="heartTohearts-4-1">三人世界的親密關係</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="mentalCare-4-1">身心照顧</router-link>
                  <p class="d-block">懷孕的歷程，<br>除了生理的變化，<br>心理也可能承擔極大的壓力和負擔，<br>讓我們陪你聊聊吧！</p>
                </li>
                <li class="d-none" data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="parenting-4-1">育兒預備</router-link>
                  <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="economy-4-1-1">經濟需求</router-link>
                  <p class="d-block">柴米油鹽醬醋茶？<br>以前怎麼沒有想到要花這麼多錢？</p>
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
