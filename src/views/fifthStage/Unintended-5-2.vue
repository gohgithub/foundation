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
                  <h2>｜心理狀態｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>心情、情緒</h3>
                        <p>有了寶寶，生活中不再只有自己，是甜蜜也是沈重的負荷，你的理想、你的生涯規劃也都因此需要調整，也許轉個彎，也許延長路程，甚至必須改道，必須思考清楚，該如何抉擇才能兼顧你與孩子的未來。 </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>準備好成為父母</h3>
                        <p>當你選擇自己撫養，你就是一個爸爸或媽媽的角色，面對親友鄰居不同的眼光，你需要接受自己就是一個父母的事實，能夠坦然面對自己，也才能坦然面對孩子和身邊的人。 </p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>進入婚姻？</h3>
                        <p>婚姻總令人充滿想像，尤其在與心愛的人有了愛的結晶時，結婚好像成了理所當然的事！但戀愛是二個人的世界，結婚就成了多人生活；戀愛中只需要盡情享受彼此的愛的流動，而結婚多了承諾也多了責任，日常中也多了許多要煩惱的事，像是：二人如何為家分工，誰育兒、誰工作；彼此也要開始適應彼此家庭中的其他人等等；童話故事中的結婚後過著幸福美滿日子那只是一頁的圖案與一句文字，幻化成日常，它有著幾十年的光景。二人是否都準備好要進入這關係，其實是很複雜的，建議有這樣打算的你，不只要好好跟另一伴溝通，也能找到信任的家人、朋友跟你好好討論；當然如果需要，也可以找尋專業人員陪你討論喔！ </p>
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

  },
  components: {
  }
}
</script>
