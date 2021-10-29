<template>
  <!-- 個人檔案-->
  <section class="personal">
    <h2>個人檔案</h2>
    <div class="personal-box">
    <!-- 手機 -->
    <div class="d-flex py-20">
      <h3 class="fw-bold">手機</h3>
      <span>0900-000-000</span>
      <p>更改</p>
    </div>

    <!-- email -->
    <div class="d-flex py-20">
      <h3 class="fw-bold">E-mail</h3>
      <span>無</span>
      <p>更改</p>
    </div>

    <!-- 帳號 -->
    <div class="d-flex py-20">
      <h3 class="fw-bold">帳號</h3>
      <span>MeiMei2020</span>
      <p></p>
    </div>

    <!-- 暱稱 -->
    <div class="d-flex py-20">
      <h3 class="fw-bold">暱稱</h3>
      <span>MeiMei2020</span>
      <p></p>
    </div>

    <!-- 性別 -->
    <div class="d-flex py-20 align-items-center">
      <h3 class="fw-bold">性別</h3>
      <div class="form-check pr-25">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
      <label class="form-check-label" for="flexRadioDefault1">
          男性
      </label>
      </div>
      <div class="form-check pr-25">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
          女性
      </label>
      </div>
      <div class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
      <label class="form-check-label" for="flexRadioDefault2">
          其他
      </label>
      </div>
      <p></p>
    </div>

    <!-- 生日 -->
    <div class="d-flex py-20 align-items-center">
    <h3 class="fw-bold">生日</h3>
    <span>1994/1/11</span>
    <p></p>
    </div>

    <!-- 所在縣市 -->
    <div class="d-flex py-20 align-items-center">
    <h3 class="fw-bold">所在縣市</h3>
    <div class="select-item">
    <i class="fas fa-caret-down select-down fa-2x"></i>
    <select>
      <option value="基隆市">基隆市</option>
      <option value="台北市">台北市</option>
      <option value="新北市">新北市</option>
      <option value="桃園縣">桃園縣</option>
      <option value="新竹市">新竹市</option>
      <option value="新竹縣">新竹縣</option>
      <option value="苗栗縣">苗栗縣</option>
      <option value="台中市">台中市</option>
      <option value="彰化縣">彰化縣</option>
      <option value="南投縣">南投縣</option>
      <option value="雲林縣">雲林縣</option>
      <option value="嘉義市">嘉義市</option>
      <option value="嘉義縣">嘉義縣</option>
      <option selected value="台南市">台南市</option>
      <option value="高雄市">高雄市</option>
      <option value="屏東縣">屏東縣</option>
      <option value="台東縣">台東縣</option>
      <option value="花蓮縣">花蓮縣</option>
      <option value="宜蘭縣">宜蘭縣</option>
      <option value="澎湖縣">澎湖縣</option>
      <option value="金門縣">金門縣</option>
      <option value="連江縣">連江縣</option>
    </select>
    <p></p>
    </div>
    </div>

    <!-- 儲存資料 -->
    <button>儲存</button>
    </div>
    <hr>
  </section>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {

  }
}
</script>
