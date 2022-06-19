<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">首頁</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">我意外懷孕了</a></li>
            <li class="breadcrumb-item" aria-current="page"><a href="#">家庭關係</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="#">通知父母</a></li>
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
            <div class="title-box">
              <p class="step-text" data-aos="fade-up" >ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up" >為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="step-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜終止懷孕｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>如果自己到醫院或診所單純就診檢查會通知父母嗎？</h3>
                        <p>如果是未滿20歲的未成年人士，只是單純就診，並不會通知父母或主管機關；但如果確定要執行終止懷孕的相關手術及療程就會需要法定代理人或配偶的同意。但是，如果你是未滿16歲的未成年人士，由於在法律中你的身分仍屬於無行為能力者，所以有關重要的事(就學、就醫等等)，皆需法定監護人協助與陪同。所以當你獨自就診時，醫院就有需要通知你的監護權人或主管機關來幫忙。主管機關的角色是來協同你將此事處理得更完整，或確保你的權益不會因為年紀、身分而受損。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>我不敢讓爸媽知道怎麼辦？</h3>
                        <p>若你選擇終止懷孕，不管是以吃藥還是手術的方式，只要你未滿20歲都需要法定代理人的同意，
                          任何人都不可以代簽。但若你擔心父母知道後的反應是你無法因應的，
                          你可以向校方、社會局或社福機構（如勵馨基金會：<a href="https://257085.sfaa.gov.tw" target="_blank" title="未成年懷孕求助站">未成年懷孕求助網站| 257085.sfaa.gov.tw</a>）尋求協助，向他們訴說你的狀況，讓他們了解家裡的情況以及與家人的關係，社工可以協助你與父母溝通，安撫父母一時之間無法接受的情緒，陪伴你一起面對懷孕的事件。</p>
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
