<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="talking-3">我不知道該怎麼做</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="medical-3-1">醫療議題</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">可以買事後避孕藥嗎</router-link></li>
            </ol>
          </nav>
        </section>

        <!-- 主要區塊 -->
        <section class="container step-rwd">
          <div class="step">
            <!-- 裝飾用圖片 -->
            <img class="step-circle" src="../../assets/image/front/image_circleword.svg">
            <img class="image1" src="../../assets/image/front/page02_image1.svg">
            <img class="image2" src="../../assets/image/front/page02_image2.svg">
            <img class="image3" src="../../assets/image/front/page02_image3.svg">
            <!-- 結束 -->
            <div class="title-box">
              <p class="step-text" data-aos="fade-up" >ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up">選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜可以買事後避孕藥嗎？｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li>
                        <ul class="list">
                          <h3>可以買事後緊急避孕藥嗎？</h3>
                          <p>事後緊急避孕藥需要醫師處方籤才能取得，如果在藥局購買，可能會買到假藥(非法進口的藥物)喔！<br>事後避孕藥僅供緊急使用，不屬於常規避孕方式，服用有時效性，且避孕效果較差。
                            <ol>
                              <li>1. 性行為發生後24小時內服用，成功率95%</li>
                              <li>2. 性行為發生後24~48小時服用，成功率85%</li>
                              <li>3. 性行為發生後48~72小時服用，成功率58%</li>
                            </ol>
                          </p>
                        </ul>
                      </li>
                      <li>
                        <ul class="list">
                          <h3>有哪些避孕方法呢？</h3>
                          <p>避孕方法有很多種，請洽詢您的專業醫藥人員討論適合你的方法。<br>包括常規避孕藥、避孕貼片、陰道環、子宮帽、長效注射藥物、子宮內避器、性交後緊急避孕法。</p>
                        </ul>
                      </li>
                      <li>
                        <ul class="list">
                          <h3>正確使用口服避孕藥的優點？</h3>
                          <p>新型常規避孕藥24+4劑型，成功率高達99%<br>
                            <ol>優點：
                              <li>1. 女性可自主決定並使用的避孕措施</li>
                              <li>2. 使用期間會有規則月經及改善經痛，並可降低經血過多所導致之缺鐵性貧血。</li>
                              <li>3. 可降低卵巢癌、子宮內膜癌、子宮癌、大腸和直腸癌發生風險。</li>
                              <li>4. 可降低骨盆腔發炎及子宮外孕的風險。</li>
                            </ol>
                          </p>
                        </ul>
                      </li>
                      <li data-aos="fade-up">
                      <p><a class="fs-5 text-danger" href="https://www.beok.org.tw/oral-contraceptives" target="_blank">>> 常規避孕藥和事後緊急避孕藥的差別？</a></p>
                      </li>
                    </ul>
                    <!-- 選項結束 -->
                    <hr data-aos="fade-up">
                    <div data-aos="fade-up">
                      <a class="goBack" onclick="history.back()" value="回到上一頁">回到上一頁</a>
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
import Consult from '../../components/Consult.vue'

export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  components: {
    Consult
  }
}
</script>
