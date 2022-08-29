<template>
  <div>
    <main>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="youngdad-2">我女友懷孕了</router-link></li>
            <li class="breadcrumb-item" aria-current="page"><router-link to="youngdad-3-4">不知道女友有沒有懷孕</router-link></li>
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
          <p class="step-text" data-aos="fade-up">STEP 03</p>
          <h2 class="step-title" data-aos="fade-up">責任・承擔</h2>
          <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
          <p class="step-sologan" data-aos="fade-up">我想你可能在網路上搜尋很多就醫或如何吃藥的資訊？<br>
          讓我們來給你安全的醫療建議？</p>
          <div class="container step-box">
            <div class="step-box-inner">
              <div class="box-title" data-aos="fade-up">
                <h2>｜醫療議題｜</h2>
              </div>
              <ul class="step-menu">
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="medical-4-1">我女友可以中止懷孕嗎？</router-link>
                  <p class="d-block">一定要有家長簽同意書嗎？<br> 男方成年了可以幫忙簽嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="intimacy-4-2">可以買事後避孕藥嗎？</router-link>
                  <p class="d-block">我們可以去藥局買事後避孕藥嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="act-3-1">未成年拿避孕藥會被通報？</router-link>
                  <p class="d-block">未成年去婦產科診所就醫 <br> 或是拿事後避孕藥會被通報嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="medical-4-8">如何驗孕 / 就醫</router-link>
                  <p class="d-block">怎麼樣確定有沒有懷孕？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="medical-4-8">保險套戴反了</router-link>
                  <p class="d-block">保險套戴反了、立刻翻過來， <br> 這樣還會懷孕嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="medical-4-8">懷孕前的徵兆？</router-link>
                  <p class="d-block">女友最近有胸部腫脹、頭痛、<br>反胃、吃很多等狀況，<br>跟懷孕的徵兆很像，這樣是懷孕嗎？<br>還是只是月經快來呢？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="medical-4-8">保險套破了</router-link>
                  <p class="d-block">性行為結束後發現保險套破掉，<br>立刻吃了事後避孕藥，還會懷孕嗎？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="600">
                  <img src='../../assets/image/front/page02_pic2.jpg'>
                  <router-link to="medical-4-9">吃避孕藥，月經沒來？</router-link>
                  <p class="d-block">吃了事後避孕藥、但是月經還沒有來？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="900">
                  <img src='../../assets/image/front/page02_pic3.jpg'>
                  <router-link to="medical-4-10">懷孕週數怎麼算？</router-link>
                  <p class="d-block">懷孕週數怎麼算？</p>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <router-link to="medical-4-11">假性月經是什麼？</router-link>
                  <p class="d-block">女友月經都有來？這樣還會懷孕嗎？</p>
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
