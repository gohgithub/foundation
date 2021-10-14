<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#">中止生下</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
            </ol>
          </nav>
        </section>

        <!-- 主要區塊 -->
        <section class="container">
          <div class="select">
            <!-- 裝飾用圖片 -->
            <img class="select-circle" src="../../assets/image/front/image_circleword.svg">
            <img class="image1" src="../../assets/image/front/page02_image1.svg">
            <img class="image2" src="../../assets/image/front/page02_image2.svg">
            <img class="image3" src="../../assets/image/front/page02_image3.svg">
            <!-- 結束 -->
            <p class="select-text" data-aos="fade-up" >ANSEWR</p>
            <h2 class="select-title" data-aos="fade-up" >選擇・答案</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
            <p class="select-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            <div class="container select-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up" data-aos-offset="400">
                  <h2>｜我想要生下來了｜</h2>
                </div>
                <div class="select-menu">
                  <img data-aos="fade-up" data-aos-offset="400" src='../../assets/image/front/page02_pic3.jpg'>
                  <p data-aos="fade-up" data-aos-offset="400">承擔起一個重要的責任。<br>
                  或許辛苦，但是人們總說這是一個甜蜜的負擔。<br>
                  我們一起看看，能夠從哪裡做起吧!</p>
                  <hr data-aos="fade-up" data-aos-offset="400">
                    <!-- 選項開始 -->
                    <ul class="select-list">
                      <li data-aos="fade-up"  data-aos-delay="300" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic1.jpg'>
                        <a href="#">家庭狀態</a>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up"  data-aos-delay="600" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic2.jpg'>
                        <router-link to="/">相關法規</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic3.jpg'>
                        <router-link to="select">心理狀態</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="300" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic1.jpg'>
                        <a href="#">校園支持</a>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="600" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic2.jpg'>
                        <router-link to="/">經濟狀態</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="900" data-aos-offset="400">
                        <img src='../../assets/image/front/page02_pic3.jpg'>
                        <router-link to="select">社福資源</router-link>
                        <p>這裡可以打簡短文案，<br>整體比較一致。</p>
                      </li>
                    </ul>
                    <!-- 選項結束 -->
                    <hr data-aos="fade-up" data-aos-offset="500">
                    <div data-aos="fade-up" data-aos-offset="500">>
                      <a class="goBack" href="#">返回首頁</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Consult></Consult>
        <Circle></Circle>
      </main>
    </div>
</template>
<script>
import Circle from '../../components/PointCircle.vue'
import Consult from '../../components/Consult.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {

  },
  components: {
    Circle,
    Consult
  }
}
</script>
