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
                <div class="box-title" data-aos="fade-up">
                  <h2>｜家庭狀態｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="daughter3-1 container-inner mt-60">
                      <li data-aos="fade-up" data-aos-offset="400">
                        <h3>家庭是否合適撫養</h3>
                        <p>現今的社會有許多種家庭型態：雙親家庭、隔代教養、單親家庭等等，雖然妳目前仍未成年、妳仍有權利決定是否要留下寶寶親自撫育。但是在選擇自己撫養寶寶是必須面對不同的挑戰，不管是自己的學業可否繼續、經濟可否負擔以及教養等等都是重要課題</p>
                      </li>
                      <li data-aos="fade-up" data-aos-offset="400">
                        <h3>小孩的爸爸不想負責</h3>
                        <ul class="list">
                          <li>（一）生父認領的責任權益與監護議題依據民法第1065條生父具有認領非婚生子女的權力，一旦認領視同婚生子女，父母共同擁有監護權，法律上生父必須負擔孩子在成年以前的扶養責任，孩子也具有財產繼承的權力。若是不願意共同擁有監護，就必須要再進行「監護權的訴訟」，舉證一方不適合擁有監護權的理由與證據，由法院以孩子最大利益作裁判。</li>
                          <li>（二）強制生父認領依據民法1067條，若生父不願意認領負起責任，可以透過法律扶助尋求律師諮詢，蒐集資料作舉證，請求強制認領。</li>
                        </ul>
                        <p></p>
                      </li>
                      <li data-aos="fade-up" data-aos-offset="400">
                        <h3>未滿20歲</h3>
                        <ul class="list">
                          <li>1.當你未滿20歲(法定成年)前，有關醫療的相關決定，都必須有監護人共同面對。如果你尚未和父母、監護人坦承懷孕，也可以透過社工的服務，陪伴你面對這個家庭協商的過程。</li>
                          <li>2.若未滿20歲時，父母是有義務負擔子女的行為責任，因為在民法上20歲以前的青少男女都是限制行為能力人，因此他們除了有義務維繫子女的經濟狀況外，也有義務照顧子女在非預期懷孕下所生的小孩。</li>
                        </ul>
                        <p></p>
                      </li>
                    </ul>
                    <!-- 選項結束 -->
                    <hr data-aos="fade-up" data-aos-offset="400">
                    <div data-aos="fade-up" data-aos-offset="400">
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
      data: [
        {
          Q: '家庭是否合適撫養?',
          A: '現今的社會有許多種家庭型態：雙親家庭、隔代教養、單親家庭等等，雖然妳目前仍未成年、妳仍有權利決定是否要留下寶寶親自撫育。但是在選擇自己撫養寶寶是必須面對不同的挑戰，不管是自己的學業可否繼續、經濟可否負擔以及教養等等都是重要課題'
        },
        {
          Q: '小孩的爸爸不想負責',
          U1: '（一）生父認領的責任權益與監護議題依據民法第1065條生父具有認領非婚生子女的權力，一旦認領視同婚生子女，父母共同擁有監護權，法律上生父必須負擔孩子在成年以前的扶養責任，孩子也具有財產繼承的權力。若是不願意共同擁有監護，就必須要再進行「監護權的訴訟」，舉證一方不適合擁有監護權的理由與證據，由法院以孩子最大利益作裁判。',
          U2: '（二）強制生父認領依據民法1067條，若生父不願意認領負起責任，可以透過法律扶助尋求律師諮詢，蒐集資料作舉證，請求強制認領。'
        },
        {
          Q: '未滿20歲',
          U1: '1.當你未滿20歲(法定成年)前，有關醫療的相關決定，都必須有監護人共同面對。如果你尚未和父母、監護人坦承懷孕，也可以透過社工的服務，陪伴你面對這個家庭協商的過程。',
          U2: '2.若未滿20歲時，父母是有義務負擔子女的行為責任，因為在民法上20歲以前的青少男女都是限制行為能力人，因此他們除了有義務維繫子女的經濟狀況外，也有義務照顧子女在非預期懷孕下所生的小孩。',
          T1: ''
        }
      ]
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
