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
              <li class="breadcrumb-item" aria-current="page"><router-link to="economy-4-1">經濟需求</router-link></li>
              <li class="breadcrumb-item active" aria-current="page"><router-link to="">托育問題</router-link></li>
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
                  <h2>｜托育問題｜</h2>
                </div>
                <div class="select-menu">
                  <img class="mb-60" data-aos="fade-up" src='../../assets/image/front/page02_pic3.jpg'>
                  <hr data-aos="fade-up">
                    <!-- 選項開始 -->
                    <ul class="select-item container-inner mt-60">
                      <li data-aos="fade-up">
                        <h3>托育服務</h3>
                      </li>
                      <li data-aos="fade-up">
                        <p>資料來源：<a class="fs-5 text-danger" href="https://www.mohw.gov.tw/cp-88-230-1-40.html" target="_blank"> 社會及家庭署、衛生福利部</a></p>
                      </li>
                      <li>
                        <p>主要提供0-2歲兒童家庭之托育服務，分由居家式、機構式及社區式三面向提供，透過完善居家托育制度、提升托嬰中心服務品質及建構托育資源中心，讓家長得以安心就業，並獲得足夠照顧能量。</p>
                      </li>
                      <li>
                        <h3>資源查詢</h3>
                         <p><a class="fs-5 text-success" href="https://www.sfaa.gov.tw/SFAA/Pages/List.aspx?nodeid=970" target="_blank" title="全國公設民營托嬰中心及公共托育家園名冊(另開新視窗)">全國公設民營托嬰中心及公共托育家園名冊</a><br>
                        查詢目前收托0-2歲兒童之全國公設民營托嬰中心及公共托育家園辦理地點及核定收托人數。</p>
                        <p><a class="fs-5 text-success" href="https://www.sfaa.gov.tw/SFAA/Pages/List.aspx?nodeid=1202" target="_blank" title="公私協力托育資源中心名冊(另開新視窗)">親子館(托育資源中心)名冊</a><br>
                        查詢目前全國公私協力托育資源中心的辦理地點及聯絡資訊。</p>
                        <p><a class="fs-5 text-success" href="https://www.sfaa.gov.tw/SFAA/Pages/List.aspx?nodeid=518" target="_blank" title="各地方政府與居家托育服務中心連絡表(另開新視窗)">各地方政府與居家托育服務中心連絡表</a><br>
                        家長欲將子女送由居家托育人員(保母)照顧，可查詢所屬居家中心聯絡方式，由中心協助家長媒合適當的托育人員。</p>
                        <p><a class="fs-5 text-success" href="https://ncwisweb.sfaa.gov.tw/home/index" target="_blank" title="立案托嬰中心(另開新視窗)">立案托嬰中心</a><br>
                        查詢目前全國收托0-2歲之合格立案托嬰中心聯絡方式及核定收托人數。</p>
                      </li>
                      <li>
                        <h3>線上服務</h3>
                        <p>
                          <a class="fs-5 text-success" href="https://ncwisweb.sfaa.gov.tw/" target="_blank" title="居家托育服務人員資料查詢、媒合服務、問與答(另開新視窗)">居家托育服務人員資料查詢、媒合服務、問與答</a><br>
                          家長欲將子女送由居家托育人員(保母)照顧，可查詢居家托育人員資料，直接與托育人員聯繫，並瞭解有關居家托育服務相關法律規定事項及常見問答。
                        </p>
                      </li>
                      <li>
                        <h3>資訊提供</h3>
                          <p><a class="fs-5 text-success" href="https://www.sfaa.gov.tw/SFAA/Pages/List.aspx?nodeid=1057" target="_blank" title="托育費用補助(另開新視窗)">托育費用補助</a><br>
                          未滿2歲兒童送托準公共化之托嬰中心或居家托育人員照顧，家庭所得稅率未滿20%，可申請托育費用補助。</p>
                          <p><a class="fs-5 text-success" href="https://www.sfaa.gov.tw/SFAA/Pages/Detail.aspx?nodeid=515&amp;pid=3211" target="_blank" title="托育服務環境安全檢核表(另開新視窗)">托育服務環境安全檢核表</a><br>
                          依據「居家式托育服務提供者登記及管理辦法」之規定，申請登記需通過書面審查及實地審查，申請者之托育服務環境應符合本表40項環境安全檢核，方可辦理登記。</p>
                          <p><a class="fs-5 text-success" href="https://ncwisweb.sfaa.gov.tw/home/index" target="_blank" title="托育人員在職訓練資訊(另開新視窗)">托育人員在職訓練資訊</a><br>
                          依據「居家式托育服務提供者登記及管理辦法」及「兒童及少年福利機構專業人員資格及訓練辦法」之規定，托育人員每年需接受18小時在職訓練，爰提供居家托育服務中心開設在職訓練課程相關資訊，托育人員可自行查詢及報名。</p>
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
