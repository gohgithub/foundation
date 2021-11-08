<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/daughter-2">我女兒懷孕了</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">還能完成學業嗎</a></li>
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
                  <h2>｜還能完成學業嗎｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>懷孕還能完成學業？</h3>
                        <p>完成學業是你的女兒能為她自己跟她的寶寶做的最重要的事情之一，完成學業不僅有助於日後找工作獲得收入來支持家庭，同時維持與朋友，師長的關係也會讓更多的人可以來支持她。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>性別平等教育法怎麼規定</h3>
                        <p>教育部公布的「性別平等教育法」第14條與「學生懷孕事件輔導與處理要點」說明教育單位需積極維護懷孕學生受教權，並提供必要之協助。故若學生願意在懷孕期間持續就學完成學業，校方有義務全力給予協助。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>學生懷孕受教權維護及輔導協助要點條文</h3>
                        <p>校方不得以學生懷孕或育有子女為由，做出不當之處分、或以任何方式要求其轉學休學，故學校應在考試、請假、課程安排採取彈性措施，並成立專案小組，提供友善安全的學習環境，以協助懷孕或育有子女學生完成學業。<br>
                        參考連結：<a href="https://edu.law.moe.gov.tw/LawContent.aspx?id=FL036539">https://edu.law.moe.gov.tw/LawContent.aspx?id=FL036539</a>
                        </p>
                      </li>
                      <li data-aos="fade-up">
                        <p>如果您擔心如何與學校討論讓您女兒在懷孕期繼續學業，歡迎利用下列諮詢服務瞭解更多資訊。</p>
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
