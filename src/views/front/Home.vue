<template>
  <div>
    <!-- banner 區塊 -->
      <section class="banner">
        <hr class="line">
        <div class="banner-container banner-pic">
          <img class="banner-circle" src="../../assets/image/front/image_circleword.svg">
          <div class="banner-inner container-inner">
            <img src="../../assets/image/front/banner_logo.svg">
            <h2>讓我們用愛點燃燈火<br>使溫暖照亮你我</h2>
            <hr>
            <p>懷孕在人生過程中原本是一件值得開心期待的事情。<br>
              然而對於還未有心理準備的妳來說這是最令人慌張與不知所措的問題。在妳最慌亂無<br>
              助找不到方向時，這個網站能夠陪伴妳一起面對妳正面臨的問題。</p>
            <div class="d-flex justify-content-center">
              <span>了解</span>
              <i class="fas fa-arrow-down icon"></i>
              <span>更多</span>
            </div>
          </div>
        </div>
      </section>

    <!-- service 區塊 -->
      <section class="service container-inner">
        <img class="service-image1" src="../../assets/image/front/service_image1.svg">
        <img class="service-image2" src="../../assets/image/front/service_image2.svg">
        <img class="service-image3" src="../../assets/image/front/service_image3.svg">
        <div>
          <div class="service-bubble d-flex align-items-center justify-content-center">
            <h2>｜我們提供專屬的<span>匿名</span>個人化智慧服務｜</h2>
          </div>
          <div class="service-pointer"></div>
        </div>
      </section>

    <!-- choose 區塊 -->
      <section class="choose container">
        <img class="pic2" src="../../assets/image/front/choose_image2.svg">
        <p class="sub-title">STEP 01</p>
        <h2>問・題·選·擇</h2>
        <img class="title-line" src="../../assets/image/front/choose_title_line.svg">
        <p class="content">生命的重量不應該只有自己來承擔，有時候簡單的一些行動也能為自己帶來不一樣未來。<br>
        不必覺得自己會成為負擔或是問題，讓我們一起幫妳撐起那生命的重量。</p>
        <div class="swiper chooseSwiper">
          <div class="swiper-wrapper">
          <!-- 第一層輪播 -->
            <div class="swiper-slide">
              <!-- 上層 -->
                <div class="swiper-outside-top">
                  <div class="swiper-card">
                    <div class="swiper-box">
                      <h2>我懷孕了</h2>
                      <hr class="line">
                      <img src="../../assets/image/front/choose_pic1.jpg">
                      <p>在這條道路上，<br>你從來不是獨自一人。</p>
                      <a href="#">了解更多</a>
                    </div>
                  </div>
                  <div class="swiper-card">
                    <div class="swiper-box bg-banana">
                      <h2>女友懷孕了</h2>
                      <hr class="line">
                      <img src="../../assets/image/front/choose_pic2.jpg">
                      <p>支持與陪伴，<br>勝過千言萬語。</p>
                      <a href="#">了解更多</a>
                    </div>
                  </div>
                </div>

              <!-- 下層 -->
                <div class="d-flex justify-content-center">
                  <div class="swiper-card">
                    <div class="swiper-box bg-banana">
                      <h2>女兒懷孕了</h2>
                      <hr class="line">
                      <img src="../../assets/image/front/choose_pic3.jpg">
                      <p>其實很多所謂的大人，<br>在面對這種狀況時，顯得更無助。</p>
                      <a href="#">了解更多</a>
                    </div>
                  </div>
                  <div class="swiper-card">
                    <div class="swiper-box">
                      <h2>我是親友</h2>
                      <hr class="line">
                      <img src="../../assets/image/front/choose_pic4.jpg">
                      <p>人生中的每場際遇，從來不會太快<br>或太慢，生命中的一切都準時到來。</p>
                      <a href="#">了解更多</a>
                    </div>
                  </div>
                  <div class="swiper-card">
                    <div class="swiper-box bg-banana">
                      <h2>我想支持</h2>
                      <hr class="line">
                      <img src="../../assets/image/front/choose_pic5.jpg">
                      <p>邀請您把手借給我，<br>讓暖光持續照亮。</p>
                      <a href="#">了解更多</a>
                    </div>
                  </div>
                </div>
            </div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
        </div>
        <div>
          <div class="choose-swiper-pagination swiper-pagination container"></div>
        </div>
      </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    var swiper = new Swiper('.chooseSwiper', {
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    console.log(swiper)
  }
}
</script>
