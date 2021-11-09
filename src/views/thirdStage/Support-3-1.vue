<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/support-2">我想支持</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">支持，從你/妳開始</a></li>
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
              <p class="step-sologan" data-aos="fade-up">為愛所想，為愛所選。</p>
            </div>
            <div class="container step-box">
              <div class="select-box-inner">
                <div class="box-title" data-aos="fade-up">
                  <h2>｜支持，從你/妳開始｜</h2>
                </div>
                <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                    <p data-aos="fade-up">「當了父母之後才知道怎麼當父母」，<br>
                      這不只是一句廣告台詞，同時也是每個身為父母的人很真實的感受，懷孕、生產、育兒，<br>
                      對於父母來說從來不是件容易的事，對這群小蝴蝶來說，負擔與壓力更是沉重，<br>
                      不僅是身心靈的疲憊，更多時候是社會價值與期待強加而來的壓迫感。</p>
                  <hr data-aos="fade-up">
                </div>
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <p class="mb-20">無論環境多不友善，未來的路多茫然，只要有人願意理解、願意相信，願意陪伴，願意提供機會，都會成為支撐這群 小蝴蝶 繼續往前走的動力。</p>
                        <p>而那個人，除了家人、除了社工，還可以是瀏覽著網站的你/妳，以及社會上的每個人。</p>
                      </li>
                      <li data-aos="fade-up">
                        <h3>如何支持</h3>
                        <ul class="list mb-60">
                          <li>無論是小蝴蝶的家人、親戚還是朋友；在心理上、生活上都是她們最近的求助對象。事以至此；無論原因為何，陪伴她們走過這段過程、協助她們解決接下來可能會遇到的各類問題，往往對她們的幫助往往勝過於追究責任、責罵及論斷。 </li>
                          <li>或許身旁的人能夠提供的幫助並不是很多，畢竟這仍然是一件非常隱私的事情；我們所能做的除了上述的提到的陪伴，更多的是保持接納、尊重的態度，傾聽小蝴蝶們的想法並提供相對應的解決方式、聯絡管道，與她們一同討論。</li>
                          <li>非預期的懷孕，任誰都不想遇到且對於每個人來說；未來要走的路漫長且充滿挑戰的，小蝴蝶們承受的心理、生理及生活上各樣的壓力更是無法想像及體驗。常伴她們左右、時時的關心、讓他們知道自己不是孤單一人在面對或許就是最好的幫助。</li>
                          <li data-aos="fade-up">
                            <h3>參考文章</h3>
                            <ul class="list mb-60">
                              <li>如果您的女兒將成為未婚媽媽，請給予她鼓勵<br>
                                <a href="https://imny01.pixnet.net/blog/post/333867396" target="_blank">https://imny01.pixnet.net/blog/post/333867396</a>
                              </li>
                              <li>我有小孩，我想念書：中學生小媽媽與自我實現的距離<br>
                                <a href="https://www.twreporter.org/a/teenage-pregnancy-young-mothers" target="_blank">https://www.twreporter.org/a/teenage-pregnancy-young-mothers</a>
                              </li>
                              <li>在學懷孕，有關係嗎？<br>
                                <a href="https://www.peopo.org/news/437521" target="_blank">https://www.peopo.org/news/437521</a>
                              </li>
                              <li>孕期心理調適<br>
                                <a href="https://ivan0303.pixnet.net/blog/post/6902575" target="_blank">https://ivan0303.pixnet.net/blog/post/6902575</a>
                              </li>
                            </ul>
                          </li>
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
