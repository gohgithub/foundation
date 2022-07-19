<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">首頁</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">我意外懷孕了</a></li>
                <li class="breadcrumb-item" aria-current="page"><a href="#">法律議題</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="#">未滿20歲的議題</a></li>
            </ol>
          </nav>
        </section>

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
                  <h2>｜相關法規｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>(一)生父認領的責任權益與監護議題</h3>
                        <p>依據民法第1065條生父具有認領非婚生子女的權力，一旦認領視同婚生子女，父母共同擁有監護權，法律上生父必須負擔孩子在成年以前的扶養責任，孩子也具有財產繼承的權力。若是不願意共同擁有監護，就必須要再進行「監護權的訴訟」，舉證一方不適合擁有監護權的理由與證據，由法院以孩子最大利益作裁判。 </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>(二)強制生父認領</h3>
                        <p>依據民法1067條，若生父不願意認領負起責任，可以透過法律扶助尋求律師諮詢，蒐集資料作舉證，請求強制認領。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>未滿20歲</h3>
                        <ul class="list mb-60">
                          <li>1.當你未滿20歲(法定成年)前，有關醫療的相關決定，都必須有監護人共同面對。如果你尚未和父母、監護人坦承懷孕，也可以透過社工的服務，陪伴你面對這個家庭協商的過程。</li>
                          <li>2.若未滿20歲時，父母是有義務負擔子女的行為責任，因為在民法上20歲以前的青少男女都是限制行為能力人，因此他們除了有義務維繫子女的經濟狀況外，也有義務照顧子女在非預期懷孕下所生的小孩。</li>
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
