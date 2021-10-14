<template>
    <div>
      <!-- 麵包屑 -->
      <section class="container" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item"><a href="#">中止生下</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
          </ol>
        </nav>
      </section>

      <!-- 文章內容 -->
      <section class="container">
        <div class="select">
          <!-- 裝飾用圖片 -->
          <img class="select-circle" src="../../assets/image/front/image_circleword.svg">
          <img class="image1" src="../../assets/image/front/page02_image1.svg">
          <img class="image2" src="../../assets/image/front/page02_image2.svg">
          <img class="image3" src="../../assets/image/front/page02_image3.svg">
          <!-- 結束 -->
          <p class="select-text" data-aos="fade-up" data-aos-duration="1500">ANSEWR</p>
          <h2 class="select-title" data-aos="fade-up" data-aos-duration="1500">選擇・答案</h2>
          <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" data-aos-duration="1500">
          <p class="select-sologan" data-aos="fade-up" data-aos-duration="1500">為自己所想，為自己所選。</p>
          <div class="container select-box">
            <div class="select-box-inner">
              <div class="box-title" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="600">
                <h2>｜我想要生下來了｜</h2>
              </div>
              <div class="select-menu">
                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="400">
                  <img src='../../assets/image/front/page02_pic1.jpg'>
                  <p>承擔起一個重要的責任。<br>
                  或許辛苦，但是人們總說這是一個甜蜜的負擔。<br>
                  我們一起看看，能夠從哪裡做起吧!</p>
                  <hr>
                    <ul class="step-menu">
                      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic1.jpg'>
                        <a href="#">我需要有人一起討論</a>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="600" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic2.jpg'>
                        <router-link to="/">我不想要生下來</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="900" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic3.jpg'>
                        <router-link to="select">我想要生下來</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Circle></Circle>
    </div>
</template>
<script>
import Circle from '../../components/PointCircle.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {

  },
  components: {
    Circle
  }
}
</script>
