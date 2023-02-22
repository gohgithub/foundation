<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">關於我們</a></li>
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
              <p class="step-text" data-aos="fade-up">About</p>
              <h2 class="step-title" data-aos="fade-up" >關於我們</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up"></p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜YOUNG父母諮詢服務平台｜</h2>
                </div>
                <!-- <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/paela_about.png'>
                    <p data-aos="fade-up">
                    </p>
                  <hr data-aos="fade-up">
                </div> -->
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>妳/你的需求，我們看見。</h3>
                        <p class="mb-20">
                          孕育一個生命，是驚喜還是驚嚇？ <br />
                          新生命的到來，或許令人期待與開心，<br />
                          但有時候也會對於身心來不及準備好的當事人帶來徬徨與無助，<br />
                          不知道可以向誰尋求協助？或是擔心在尋求協助的過程中受到有色眼光或歧視言論的對待，<br />
                          而沒辦法坦然分享自己的遭遇，錯過接受援助的最佳時機。<br /><br />

                          正因看見許多青少女懷孕時所面臨的抉擇與困境，<br />
                          財團法人勵馨社會福利事業基金會（以下簡稱勵馨）從2000年開始關注青少女懷孕議題，<br />
                          在長年陪伴懷孕女性並與其伴侶、家長、師長們互動的豐富實務經驗中，<br />
                          理解青少年面對懷孕處境時在生理、心理、社會面的種種困境與需求，<br />
                          勵馨依造其個別需求提供相關服務，被重視其自我價值的提升。<br />
                          勵馨也相信當青少年透過充分的資訊給予及討論，<br />
                          他們有能力可以思考、有權利可以表達意見、並在與重要他人的討論中做出適合自己的生育/養育抉擇。<br /><br />

                          勵馨與中國醫藥大學附設醫院攜手打造「YOUNG父母諮詢服務平台」，<br />
                          站在服務使用者的角色立場，結合來自各界對於議題的資訊提供，<br />
                          創造出對青少年懷孕議題友善的資訊平台，<br />
                          引導使用者在隱私受到保障的前提下安心的跨過抉擇的迷惘，<br />
                          在友善的情境下獲得多元的資訊，<br />
                          在專業服務的鏈接下找到一個安頓身與心的空間。<br />
                        </p>
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
