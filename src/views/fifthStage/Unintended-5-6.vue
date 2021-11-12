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
                  <h2>｜社福資源｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>社工服務</h3>
                        <p>當你決定生下寶寶，將會面臨經濟、就業、照顧與托育等問題，你可以向地方社會局尋求協助，因為每個縣市會有不同的福利或補助，社會局可根據你的情況，幫你找尋最好的方案。政府有統一規定育兒津貼與補助方案，而各個縣市也會根據情況提出不同的方案，
                          你可以透過<a href="https://257085.sfaa.gov.tw" target="_blank" title="未成年懷孕求助站">「未成年懷孕求助網站 | 257085.sfaa.gov.tw」</a>的福利百寶箱，這個網站統整許多資源，例如經濟、育兒、就學、就業、醫療等資源，定期更新完整的資訊，方便你事先了解可以申請哪些資源與補助。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>中途之家</h3>
                        <p>若因為一些因素無法在家安心待產，可以聯絡下列中途之家，專業人員會協助你度過待產安置的需求，提供陪同產檢、心理諮商、尋找社福資源等服務，讓你安心地將寶寶生下來。<br>
                        <br>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1myDBI2I7HGUWxm2HfFb-iW6n6Q-8vKgk&hl=zh-TW" width="640" height="480"></iframe><br>
                        <img class="rounded-0 w-70" src='../../assets/image/page/shelter.png' alt=""><br>

                        <!--善牧基金會附設的寧心園－ 未婚媽媽中途之家<br>
                        電話：(06)3124626<br>
                        信箱：stlucy@goodshepherd.org.tw<br>
                        諮詢時間：週一至週五<br>
                        上午 9 點至下午 5 點半 -->
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

export default {
  data () {
    return {
    }
  }
}
</script>
