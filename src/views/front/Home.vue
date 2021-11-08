<template>
  <div>
    <main>
      <!-- <VideoModal></VideoModal> -->
      <!-- banner 區塊 -->
      <section class="banner">
        <hr class="line">
        <div>
          <div class="banner-container banner-pic" data-aos="fade-up">
            <img class="banner-circle" src="../../assets/image/front/image_circleword.svg">
            <div class="banner-inner container-inner">
              <div class="banner-head">
                <img src="../../assets/image/front/new_header_logo.svg">
                <h2>守護勇敢 | 翩然起舞</h2>
              </div>
              <h2>用愛點燃燈火 <br>
              溫暖照亮你我
              </h2>
              <h2>讓我們用愛點燃燈火 <br>
              使溫暖照亮你我
              </h2>
              <hr>
              <p class="phone-none">懷孕在人生過程中原本是一件值得開心期待的事情。<br>
                然而對於還未有心理準備的妳來說，這是最令人慌張與不知所措的問題。<br>
                在妳最慌亂無助找不到方向時，這個網站能夠陪伴妳一起面對妳正面臨的問題。</p>
              <p class="pc-none">懷孕在人生過程中原本是一件值得開心期待的事情。
                然而對於還未有心理準備的妳來說，這是最令人慌張與不知所措的問題。
                在妳最慌亂無助找不到方向時，這個網站能夠陪伴妳一起面對妳正面臨的問題。</p>
              <a href="#" v-scroll-to="'#section'" class="d-flex justify-content-center mt-48 learn">
                <span>了解</span>
                <i class="fas fa-arrow-down icon animate__animated animate__bounce animate__infinite"></i>
                <span>更多</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    <!-- service 區塊 -->
      <section class="service container-inner">
        <img class="service-image1" data-aos="fade-up" data-aos-delay="500" src="../../assets/image/front/service_image1.svg">
        <img class="service-image2" data-aos="fade-up" data-aos-delay="500" src="../../assets/image/front/service_image2.svg">
        <img class="service-image3" data-aos="fade-up" data-aos-delay="500" src="../../assets/image/front/service_image3.svg">
        <div data-aos="fade-up">
          <div class="service-bubble d-flex align-items-center justify-content-center">
            <h2>｜我們提供專屬的<span>匿名</span>個人化智慧服務｜</h2>
          </div>
          <div class="service-pointer"></div>
        </div>
      </section>

    <!-- choose 區塊 -->
      <section class="choose container phone-container">
        <img class="scroll-word phone-none" src="../../assets/image/front/scroll_word.svg">
        <img class="pic1 phone-none" data-aos="fade-up" src="../../assets/image/front/choose_image3.svg">
        <img class="pic2 phone-none" data-aos="fade-up" src="../../assets/image/front/choose_image2.svg">
        <img class="pic3 phone-none" data-aos="fade-up" src="../../assets/image/front/choose_image4.svg">
        <img class="pic4 phone-none" data-aos="fade-up" src="../../assets/image/front/choose_image5.svg">
        <img class="pic5 phone-none" data-aos="fade-up" src="../../assets/image/front/choose_image6.svg">
        <img class="pic6 phone-none" data-aos="fade-up" src="../../assets/image/front/choose_image7.svg">
        <div class="text-box">
          <p class="step-text" data-aos="fade-up">STEP 01</p>
          <h2 class="sub-title" data-aos="fade-up">問・題·選·擇</h2>
          <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up">
          <p class="content" data-aos="fade-up" id="section">生命的重量不應該只有自己來承擔，有時候簡單的一些行動也能為自己帶來不一樣未來。<br>
          不必覺得自己會成為負擔或是問題，讓我們一起幫妳撐起那生命的重量。</p>
        </div>
        <div class="choose-inner">
          <h2 data-aos="fade-up">- 我們提供專屬的<span>匿名</span>個人化智慧服務 -</h2>
          <div class="choose-outside-top">
            <div class="choose-card" data-aos="fade-up" data-aos-delay="300">
              <div class="choose-box">
                <h3>我意外懷孕了</h3>
                <hr class="line">
                <img src="../../assets/image/front/choose_pic1.jpg">
                <p>在這條道路上，<br>你從來不是獨自一人。</p>
                <router-link to="unintended-2">了解更多</router-link>
              </div>

            </div>
            <div class="choose-card" data-aos="fade-up" data-aos-delay="500">
              <div class="choose-box bg-banana">
                <h3>女友懷孕了</h3>
                <hr class="line">
                <img src="../../assets/image/front/choose_pic2.jpg">
                <p>支持與陪伴，<br>勝過千言萬語。</p>
                <router-link to="Youngdad-2">了解更多</router-link>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center pb-64 flex-wrap">
            <div class="choose-card" data-aos="fade-up" data-aos-delay="300">
              <div class="choose-box">
                <h3>女兒懷孕了</h3>
                <hr class="line">
                <img src="../../assets/image/front/choose_pic3.jpg">
                <p>其實很多所謂的大人，<br>在面對這種狀況時，顯得更無助。</p>
                <router-link to="daughter-2">了解更多</router-link>
              </div>
            </div>
            <div class="choose-card" data-aos="fade-up" data-aos-delay="500">
              <div class="choose-box bg-banana">
                <h3>我是親友</h3>
                <hr class="line">
                <img src="../../assets/image/front/choose_pic4.jpg">
                <p>人生中的每場際遇，從來不會太快<br>或太慢，生命中的一切都準時到來。</p>
                <router-link to="family-2">了解更多</router-link>
              </div>
            </div>
            <div class="choose-card" data-aos="fade-up" data-aos-delay="700">
              <div class="choose-box">
                <h3>我想支持</h3>
                <hr class="line">
                <img src="../../assets/image/front/choose_pic5.jpg">
                <p>邀請您把手借給我，<br>讓暖光持續照亮。</p>
                <router-link to="support-2">了解更多</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
// import $ from 'jquery'

// 載入影片 modal
// import VideoModal from '../../components/VideoModal.vue'

// 載入 gsap 套件
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// 載入 animate 套件
import 'animate.css'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    // 文字動畫
    gsap.to('.scroll-word', {
      scrollTrigger: {
        trigger: '.scroll-word',
        scrub: true
      },
      x: -800,
      duration: 10
    })
  },
  methods: {

  },
  components: {
    // VideoModal
  },
  created () {

  }
}
</script>
