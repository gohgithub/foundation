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
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">法律規定</router-link></li>
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
                  <h2>｜法律規定｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>我能夠自己決定出養嗎?</h3>
                        <p>若你未滿18歲，在決定辦理出養時需經過父母或監護人的同意；此外，與你共育此生命的生父亦有行使親權的權力，所以如果生母與生父已經結婚，或生父已經認領小孩時，則程序中必須和生父一起決定；但若未結婚或未認領，就寶寶成長需求的立場，仍期盼能找到生父，一同為寶寶的未來好好討論。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>出養後小孩還是我的小孩嗎?</h3>
                        <p>在經過法院的裁定後，小孩的親權將轉交給收養家庭，你將不再具有照顧這個小孩的義務以及權力。也就是說從那刻起，將會由收養家庭接手所有的養育責任，擔任起父母的角色，而你不得以任何名義擅自介入收養家庭的生活；而未來的日子裡，如果小孩有任何個人重大決定時，也不需向原生父母報備。如果你有任何特殊需求都應與領有收出養媒合服務許可之機構事先提出，經機構之協助連結與了解評估收養家庭、小孩等預備狀況後，視其狀況安排之。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>出養後我還能把小孩要回來嗎?</h3>
                        <p>若是經由法院裁定後的出養，是無法任意解除的。除非今天你和收養家庭雙方同意並經過法院認可（民法第1080條第1項、第2項參照），才能解除收養家庭的收養關係，恢復生父生母的親權。除此之外，若小孩尚未成年，並在收養家庭受到虐待、棄養，或因犯罪及其他重大事由導致收養家庭無法持續維繫收養關係時，你得以向法院提出，終止收養家庭的收養關係。</p>
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
