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
                  <h2>｜校園支持｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>懷孕通報</h3>
                        <p>根據〈學生懷孕受教權維護及輔導協助要點〉第七點學校知悉學生有懷孕之情事時，其懷孕原因屬依兒童及少年福利與權益保障法、兒童及少年性剝削防制條例、性侵害犯罪防治法及家庭暴力防治法或其他相關法規規定應辦理通報，學校應依其規定辦理。然通報之定義與原因在於考量你在此年紀相對資源、知識、資訊尚未周全的狀況下，透過通報的動作，可連結相關資源網絡介入協助，以保障你在此階段能獲得較完善的協助，而非要對你懷孕一事進行懲處。 </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>就學權益 </h3>
                        <p>根據〈學生懷孕受教權維護及輔導協助要點〉，今天無論妳是否決定生產，學校在接獲通報後有義務維持學生的受教權和保密，因此當今天並不是有學生主動提出的情況下(看不懂？)，校方皆無法要求學生因為懷孕的情況而要其休學、退學、請長假或轉學。除此之外，學校也有義務在接獲通知後主動進行輔導及處理，並要成立以校長為首的處理小組作為學生的聯絡窗口，並依照案件編列相關補助來避免學生在經濟情況上影響到學校受教權益。 </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>繼續完成學業</h3>
                        <p>為保障學生受教權，校方必須主動依學籍和成績評量等相關規定來做輔導，讓學生能夠在非預期懷孕後，回歸學校時再次適應學習環境，並依照他們的情況來調整彈性措施，讓面臨非預期懷孕的學生能夠順利完成學業。</p>
                      </li>
                    </ul>
                    <!-- 選項結束 -->
                    <hr data-aos="fade-up">
                    <div data-aos="fade-up">
                      <a class="goBack" href="#">返回首頁</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Circle></Circle>
      </main>
    </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
  mounted () {

  }
}
</script>
