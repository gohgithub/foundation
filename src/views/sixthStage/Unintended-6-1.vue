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
                  <h2>｜什麼是出養｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>什麼是出養</h3>
                        <p>出養是在生下孩子後，確實無法親自撫育下的最後一項選擇。這個選擇能協助你的寶寶將有更適合照顧他的父母來陪伴、養育他；但這方式也代表你與寶寶的生活不再有交集。而此選擇是需透過向領有收出養媒合服務許可證之單位提出出養申請，經由單位內的社工確認寶寶有出養必要性後，協助媒合適合的收養父母，並協助陪同完成法院的認可程序，將收養人成為寶寶的法定父母，承擔寶寶後續所有責任與義務。雖然必須放棄寶寶的親權與監護權，卻是給寶寶一個翻轉未來的機會，讓他能在愛中健康地成長。然而為寶寶找一個合適的家並不容易，領有收出養媒合服務證可證之單位，需協助收養家庭在媒合孩子前，須完成親職相關的準備課程、社工訪視評估，經由審查會取得準收養父母之身分後，才能進入共同生活期，乃至於最終的法院判決；而這些都需經過審慎、合法的過程，為寶寶做出做好的選擇。 </p>
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
  }
}
</script>
