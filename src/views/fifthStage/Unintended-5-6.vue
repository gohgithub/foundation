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
                  <h2>｜社會資源｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>社工服務</h3>
                        <p>當你決定生下寶寶，將會面臨經濟、就業、照顧與托育等問題，你可以向地方社會局尋求協助，因為每個縣市會有不同的福利或補助，社會局可根據你的情況，幫你找尋最好的方案。政府有統一規定育兒津貼與補助方案，而各個縣市也會根據情況提出不同的方案，你可以透過未成年懷孕求助站的福利百寶箱()，這個網站統整許多資源，例如經濟、育兒、就學、就業、醫療等資源，定期更新完整的資訊，方便你事先了解可以申請哪些資源與補助。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>中途之家</h3>
                        <p>若因為一些因素無法在家安心待產，可以聯絡 未婚媽媽中途之家，專業人員會協助你度過待產安置的需求，提供陪同產檢、心理諮商、尋找社福資源等服務，讓你安心地將寶寶生下來。</p>
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
