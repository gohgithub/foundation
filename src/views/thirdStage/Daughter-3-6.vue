<template>
    <div>
      <main>
        <!-- 麵包屑 -->
        <section class="container" data-aos="fade-down"  data-aos-delay="500">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb" class="badge">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">首頁</a></li>
              <li class="breadcrumb-item"><a href="#/daughter-2">我女兒懷孕了</a></li>
              <li class="breadcrumb-item active" aria-current="page"><a href="#">小孩怎麼養小孩</a></li>
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
                  <h2>｜小孩怎麼養小孩｜</h2>
                </div>
                <div class="step-header">
                  <img data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                    <p data-aos="fade-up">當面臨人生岔路中做出選擇，家人的包容與支持是小媽媽最大的動力，面對此刻的人生考題，家人所給予的也是他們經歷路程的一部分，為小媽媽指向正確的道路，家庭的關係不再疏遠。
                    </p>
                  <hr data-aos="fade-up">
                </div>
                <div class="select-menu">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>經濟問題您可先參考以下資訊</h3>
                        <p class="mb-15">
                          2021年中央育兒津貼以「自行照顧」的家庭為主，包括由父母、長輩或是親屬照顧。<br>
                          申請資格：
                        </p>
                        <ul class="list mb-36">
                          <li class="list-disc">未滿5歲</li>
                          <li class="list-disc">自行照顧兒童，或送至私立托育中心、尚未與政府簽約之合格保母</li>
                          <li class="list-disc">家庭所得稅率未達20%</li>
                          <li class="list-disc">未領取育嬰留停津貼(2021年8月後可領)、托育補助</li>
                        </ul>
                        <p class="mb-15">
                          申請辦法、準備文件：
                        </p>
                        <ul class="list mb-60">
                          <li class="list-disc">育兒津貼申請表(至各縣市政府網站下載)</li>
                          <li class="list-disc">申請人、兒童之身分證明文件</li>
                          <li class="list-disc">3名以上子女證明文件</li>
                          <li class="list-disc">親送或郵寄至兒童戶籍地之鄉鎮市區公所辦理</li>
                        </ul>
                      </li>
                      <li data-aos="fade-up">
                        <h3>中央托育補助</h3>
                        <p class="mb-0">
                          適用於將兒童交與公辦托育中心或保母照顧之家庭。<br><br>0至2歲：
                        </p>
                        <ul class="list mb-36">
                          <li class="list-disc">補助相關問題可撥打免付費諮詢電話1957</li>
                          <li class="list-disc">衛福部育兒津貼諮詢：<a href="tel:0422502850">電話04-2250-2850</a></li>
                          <li class="list-disc">對育兒津貼、托育補助有任何問題，可撥打衛福部專線受理所有補助相關的問題。</li>
                        </ul>
                        <p class="mb-0">
                          2至4歲：
                        </p>
                        <ul class="list mb-60">
                          <li class="list-disc">教育部專線0800-205-105，或是查詢全國教保資訊網的各縣市諮詢號碼。</li>
                        </ul>
                      </li>
                      <li data-aos="fade-up">
                        <h3>其他問題</h3>
                        <p>對於沒有經濟工作基礎的未成年小爸媽來說，會面臨經濟壓力、托育問題的沉重負擔，各直轄市、縣（市）政府社會局（處）對於未成年懷孕家庭，依其家庭經濟狀況，提供低收入戶、中低收入戶生活扶助、馬上關懷急難救助、特殊境遇家庭扶助等措施。<br>
                        評估女兒的需求與經濟協助申請事宜，歡迎利用下列諮詢服務瞭解更多資訊。</p>
                        資訊來源：教育部國民及學前教育署
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
