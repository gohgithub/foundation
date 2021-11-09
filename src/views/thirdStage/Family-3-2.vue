<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/family-2">親友懷孕了</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">選擇答案</a></li>
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
              <p class="step-text" data-aos="fade-up">ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up">為家人所想，為關係所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜如何協助?｜</h2>
                </div>
                <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                    <p data-aos="fade-up">未成年懷孕處境會面臨一連串的選擇題，<br>
                      這當中可能牽涉到醫療(終止懷孕、妊娠生產)、法律(性侵害、生父認領、出養等)、經濟、未來生涯規劃、生養育抉擇等。<br>
                      只要尋求社工專業的協助，不但可以獲得清楚的資訊，<br>也可以幫助懷孕當事人更加釐清自身的想法和家庭的連結。</p>
                  <hr data-aos="fade-up">
                </div>
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>發現周圍的朋友懷孕時，不再是「指指點點，閒言閒語」的樣貌，願意陪伴著一起面對及尋求協助專業諮詢。</h3><br><br>
                      </li>
                      <li>
                        <ul class="list">
                          <li>
                            <h3>全國未成年懷孕諮詢專線0800-257085</h3>
                            <p>愛我，請你幫我(免付費、手機可直撥)<br>服務時間：每週一至週五 09:00-18:00(國定假日例外) </p>
                           </li>
                          <li>
                            <h3>未成年懷孕求助網站</h3>
                            <p><a href="http://www.257085.org.tw" target="_blank">http://www.257085.org.tw</a><br>
                              提供免費線上客服，諮詢服務時間：每週一至週五 13:30-18:00(國定假日例外)</p>
                          </li>
                          <li>
                            <h3>勵馨基金會各服務處</h3>
                            <p><a href="https://www.goh.org.tw/tc/p1-about_3.asp" target="_blank">https://www.goh.org.tw/tc/p1-about_3.asp</a><br>
                              提供的服務項目包含:家族協商、 醫療協助、經濟協助、心理輔導、法律諮詢、就學輔導、就業輔導、待產服務(台中春菊馨家園) 、出養服務(台北、台中、高雄)等，若有需要，可尋求專業機構的社工陪伴與輔導，一起討論生養育抉擇的影響分析、協助家庭達成抉擇的共識、以及不同養育抉擇所需的資源運用。</p>
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
