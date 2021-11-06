<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-2">我女兒懷孕了</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-3-1">我想要生下來</a></li>
              <li class="breadcrumb-item"><a href="#/unintended-4-1">自行撫養</a></li>
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
                  <h2>｜經濟狀態｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>生活層面</h3>
                        <p>孩子一出生接踵而來的就是奶粉錢、尿布錢、褓母費及各樣嬰兒用品的開 銷，若小孩抵抗力較弱，需要三天兩頭就醫，醫療費用也是很可觀的，而如果家人並不支持單親留養，你需要在外租屋，房租也會是固定大筆的支出，以上還不包含你個人的生活費用喔！所以你需要好好精算，目前的收入和存款是否足夠支付接連每個月所需的開銷，學習開源節流，調整自己的消費習慣，做好家庭金錢規劃。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>就業問題</h3>
                        <p>你可以申請勞動部所規劃的「職前訓練」，幫助你培養一技之長。在訓練期間也不用擔心生活費，只要你是獨自撫養小孩，或是符合低收入戶的標準，都可以申請職訓生活津貼補助，補助金額為每月基本工資百分之六十。補助條件為：需參加「全日制職業訓練」，並符合四個條件:(一)、訓練期間1個月以上(二)、每星期訓練4日以上(三)、每日訓練日間4小時以上(四)、每月總訓練時數達100小時以上，即可申請。建議你可以至 台灣就業通 獲得更多完整資訊。 </p>
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
