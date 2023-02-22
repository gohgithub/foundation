<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/daughter-2">我女兒懷孕了</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">如何面對外人眼光</a></li>
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
            <p class="step-text" data-aos="fade-up">ANSEWR</p>
            <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
            <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
            <p class="step-sologan" data-aos="fade-up" >為女兒所想，為家庭所選。</p>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜如何面對外人眼光 ｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p>當面臨人生岔路中做出選擇，家人的包容與支持小媽媽最大的動力，面對此刻的人生考題，家人所給予的也是他們經歷路程的一部分，小媽媽指向正確的道路，家庭的關係不再疏遠。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>跟您的孩子站在一起，打破刻板印象</h3>
                        <p>小媽媽們"最常在親人面前聽到的話語「年紀這麼小就懷孕，哪有能力養！」、「既然懷孕了，就叫男生負責阿！」、「沒有結婚怎麼可以懷孕」，而相信大多數的人對這樣的話語不大會有異議。</p>
                        <p>因為這些話語在傳統的觀念裡「懷孕了必須結婚」或是「結婚了才能懷孕」這樣的價值觀，在這個社會是多麼根深蒂固的存在著，異樣的眼光、負面的評語，社會對未婚懷孕女性的不友善，讓其背負著巨大的壓力。</p>
                        <p>面對未預期懷孕的孩子，往往承受最大壓力的是孩子，為了不讓父母失望，私下自行尋找密醫、求神或找到不對的管道，造成身心靈的傷害，最後知情的還是父母。</p>
                        <p>為了避免孩子走錯誤的管道，身邊最親的家人在支持與包容下小媽媽最需要的寄託， 尋求正確管道，讓孩子在這條路上自己並不孤單。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>您可能擔憂怎麼跟其他親友說</h3>
                        <p>許多人在聽到他們的青少年孩子將要成為父母時, 會有很多感覺湧現。你可能感覺到震驚、怒氣、失望、憂慮他們的未來。也可能自責沒有及早避免這事發生，當然您也可能擔心其他家人親戚的看法。</p>
                        <p>如果您的青少年兒女期待有一個小孩, 其他親友可以跟您一起一同扮演一個重要的角色支持她(他)健康地走過懷孕到生產。 另外因為青少年身心都還在發育， 青少年懷孕者在懷孕期間及擔任父母期間都需要特別地看顧。許多共同走過危機的家庭，因此家庭關係更緊密，而這值得努力。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>建議您尋求社工諮詢及與其他有照顧親少年懷孕者討論</h3>
                        <p>建議您尋求社工諮詢或試著去尋求有照顧青少年懷孕經驗者的幫助聽聽他們的建議，從其他的觀點中，可以幫助您理清與其他親友溝通的方向。</p>
                        <p>歡迎利用下列諮詢服務瞭解更多資訊，這裡有專業的社工可以與您共同討論，如果您需要家庭共同協商社工也會跟您討論如何安排。</p>
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
        <Article></Article>
        <Circle></Circle>
      </main>
    </div>
</template>
<script>
import Consult from '../../components/Consult.vue'
import Article from '../../components/Article.vue'

export default {
  data () {
    return {
    }
  },
  mounted () {

  },
  components: {
    Consult,
    Article
  }
}
</script>
