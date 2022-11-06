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
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-5-8">出養</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">什麼是出養</router-link></li>
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
                  <h2>｜什麼是出養｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <!-- <li data-aos="fade-up">
                        <h3>什麼是寄養</h3>
                        <p>寄養是當原生家庭發生重大事故或親生父母親不適宜教養子女，而短期內無法照顧孩子的狀況下，藉由社工專業提供孩子一個短期的替代性家庭照顧服務，將孩子安置在其他較適合的家庭中，待原生家庭解決問題後，孩子就能重回自己的家。
                        </p>
                      </li> -->
                      <li data-aos="fade-up">
                        <h3>什麼是出養</h3>
                        <p>出養是在生下孩子後，確實無法親自撫育下的最後一項選擇。這個選擇能協助你的寶寶將有更適合照顧他的父母來陪伴、養育他。而此選擇是需透過向領有收出養媒合服務許可證之單位提出出養申請，經由單位內的社工確認寶寶有出養必要性後，協助媒合適合的收養父母，並協助陪同完成法院的認可程序，將收養人成為寶寶的法定父母，承擔寶寶後續所有責任與義務。雖然必須放棄寶寶的親權與監護權，卻是給寶寶一個翻轉未來的機會，讓他能在愛中健康地成長。然而為寶寶找一個合適的家並不容易，領有收出養媒合服務證可證之單位，需協助收養家庭在媒合孩子前，須完成親職相關的準備課程、社工訪視評估，經由審查會取得準收養父母之身分後，才能進入共同生活期，乃至於最終的法院判決；而這些都需經過審慎、合法的過程，為寶寶做出做好的選擇。 </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>勵馨基金會 收出養服務專線</h3>
                        <p>台北 02-23626995
                          <br>
                          台中 04-22239595
                          <br>
                          高雄 07-2237995</p>
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
