<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-2">我意外懷孕了</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="unintended-3-1">我想要生下來</router-link></li>
              <li class="breadcrumb-item" aria-current="page"><router-link to="act-4-2">法律議題</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">共同撫養</router-link></li>
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
              <p class="step-text" data-aos="fade-up">ANSEWR</p>
              <h2 class="step-title" data-aos="fade-up" >選擇・答案</h2>
              <img class="title-line" src="../../assets/image/front/choose_title_line.svg" data-aos="fade-up" >
              <p class="step-sologan" data-aos="fade-up">為自己所想，為自己所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜共同撫養，父母不同意｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>進入婚姻？</h3>
                        <p>婚姻總令人充滿想像，尤其在與心愛的人有了愛的結晶時，結婚好像成了理所當然的事！<br><br>
                        但戀愛是二個人的世界，結婚就成了多人生活；戀愛中只需要盡情享受彼此的愛的流動，而結婚多了承諾也多了責任，日常中也多了許多要煩惱的事，
                        像是：二人如何為家分工，誰育兒、誰工作；彼此也要開始適應彼此家庭中的其他人等等；童話故事中的結婚後過著幸福美滿日子那只是一頁的圖案與一句文字，幻化成日常，它有著幾十年的光景。
                        <br><br>
                        二人是否都準備好要進入這關係，其實是很複雜的，建議有這樣打算的你，不只要好好跟另一伴溝通，也能找到信任的家人、朋友跟你好好討論；當然如果需要，也可以找尋專業人員陪你討論喔！</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>如何向父母告知並得到幫助</h3>
                        <p>父母在第一時間聽到這個消息，一定跟你一樣擔心害怕，有時候甚至會很生氣。但是這些情緒的背後，都是因為擔憂你們在這個年紀要面對這麼困難的抉擇。
                          <br><br>
                        或許在第一時間要和父母有共識並不容易，但是多數父母在最後都很願意幫助自己的孩子，若你在和父母溝通上有困難，歡迎與社工人員聯繫。<br><br>
                        未成年懷孕求助網站：<a class="text-success" href="https://257085.sfaa.gov.tw" target="_blank" title="未成年懷孕求助網站">257085.sfaa.gov.tw</a>
                        <br>
                        免付費諮詢專線：<a href="tel:0800257085" class="text-success">0800-25-7085
                          </a>（服務時間為週一到週五09:00～18:00）
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
