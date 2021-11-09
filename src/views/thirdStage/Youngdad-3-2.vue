<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/youngdad-2">我女友懷孕了</a></li>
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
              <p class="step-sologan" data-aos="fade-up">為兩人所想，為兩人所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜要迎接新生命嗎｜</h2>
                </div>
                <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                    <p data-aos="fade-up">可以想像在得知您女友遭遇到這樣狀況時，或許也會有些自責與愧咎！<br>
                       這想法、感受都是真實也很自然的，只是在決定做什麼前，<br>
                       或許也鼓勵您多參照在選擇各種方式前，先想想這樣方式對雙方的影響及會面臨的處境與感受。<br>
                       以下是屬於您可行使的相關權利，供您作參考與了解。
                    </p>
                  <hr data-aos="fade-up">
                </div>
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>傳統性別角色的束縛 </h3>
                        <p>
                          身為小爸爸，其實更常覺得自己有責任把家庭照顧好，想要向世界證明，自己可以做的和一般爸爸一樣。所以他們背負著更大自我期待，更大的壓力，也有更大的束縛，想要努力賺錢，想要撐起一家的經濟支柱，當傳統觀念裡的「好爸爸」。許多人認為孩子必須要在建全的家庭中長大，但所謂「健全」是什麼，其實並沒有標準答案，男女的分工與角色也沒有一定的優勢與劣勢，盡自己最大的努力扶養、陪伴，並給予重要的依附感及安全感，這就是「家」。
                        </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>支持與陪伴</h3>
                        <p>家庭之外，伴侶是小媽媽最主要的支持系統。在異性戀的親密關係中，男性往往不太能表達感受，工作中承擔的壓力、育兒中的不知所措，伴侶難以啟齒，小媽媽也無法觸及。</p>
                        <p>縱使社會如此不友善，建構出所謂的「落跑小爸爸」，然而，仍有許多小爸爸願意以自己能力所及的方式為這段關係付出，承擔他們負的起的責任，不一定是結婚，也不盡然要共同生活，有人是利用課餘打工賺錢，支付部分育兒花費；有人與小媽媽協議分工，白天與夜晚輪流照顧孩子；有人選擇同居不結婚，共同生活一起撫養孩子；當然，也有些人選擇結婚，共組家庭。上述選擇，沒有誰優誰劣，更沒有哪一種選擇比較負責，也不是只是一個決定，而是一連串生活決定的過程。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>資料來源</h3>
                        <ul class="list mb-60">
                          <li>想想：
                            <a href="https://www.thinkingtaiwan.com/content/6845" target="_blank">【女人想想】青少女懷孕下的父親角色／性別迷思</a>
                          </li>
                          <li>勵馨基金會：
                            <a href="https://youngmother.goh.org.tw/relationship/)" target="_blank">借我您的光</a>
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
