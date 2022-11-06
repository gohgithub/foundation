<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="daughter-2">我女兒懷孕了</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-3-1-2">想把孩子生下來</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="act-5-4">無法人工流產，也無法撫養</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">寄養</router-link></li>
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
            <div class="text-box">
              <p class="step-text" data-aos="fade-up" >ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜寄養｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>留養．寄養．出養，選擇最適當照顧方式</h3>
                        <p class="mb-20">您的女兒需得到父母、監護人或伴侶的支持，一起生養孩子，而且還要能繼續學業或工作，才能夠做個好父母。若伴侶、先生或家人有不同意見，你們需協商找出共識，但也不需違背心意做出被迫的決定，你們仍有寄養、出養的管道可選擇。<br>
                        懷孕過程中若需要協助或安置於中途之家，也可透過社會福利管道或諮詢服務尋求協助。
                        </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3> 寄養：</h3>
                        <p>
                        若選擇寄養，將來可於合宜時機帶回自己養。可以請社福提供相關資訊，尋找寄養家庭。<br>
                        寄養是當兒童的原生家庭暫時無法提供適當照顧，必須安排一個替代性的家庭來對此兒童提供計畫性的照顧。
                     </p>
                     </li>
                      <li data-aos="fade-up">
                        <h3>收養/出養：</h3>
                        <p>
                        若考慮給人收養(出養，可請社福提供相關資訊，尋找出養機構及相關資源管道。<br>
                        收養（出養）當兒童的原生父母或家庭發生困難，使他無法和父母共同生活，因此需透過社會福利機構安排，替孩子另找一個家庭，提供使他生活更有保障的養育方式。
                      </p>
                      </li>

                      <li data-aos="fade-up">
                        <h3>我可以找哪些機構協助?</h3>
                        <ul class="list mb-60">
                          <li>• 財團法人一粒麥子社會福利慈善事業基金會(臺東) <br>
                          089-960168 </li>
                          <li>• 財團法人中華民國兒童福利聯盟文教基金會(臺北/臺中/高雄)<br>
                          02-25585806#8<br>
                          04-23780095<br>
                          07-3501959
                          </li>
                          <li>• 財團法人忠義社會福利事業基金會(臺北)<br>
                          02-22301100
                          </li>
                          <li>• 財團法人勵馨社會福利慈善事業基金會(臺北/臺中/高雄)<br>
                          02-23690885<br>
                          04-22239595<br>
                          07-2237995
                          </li>
                          <li>• 財團法人天主善牧社會福利基金會(臺南)<br>
                          06-2344009<br>
                          06-2344009*16
                          </li>
                          <li>• 財團法人台北市基督徒救世會社會福利事業基金會(臺北)<br>
                          02-27290265
                          </li>
                          <li>• 財團法人高雄私立小天使家園(高雄)<br>
                          07-6960777
                          </li>
                          <li>• 財團法人天主教福利會(新北)<br>
                          02-26625184
                          </li>
                          <li>• 神愛兒童之家(宜蘭) <br>
                          03-9514652
                          </li>
                        </ul>
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
