<template>
  <div>
    <!-- Modal -->
    <div class="modal fade right" id="rightModal" tabindex="-1" aria-labelledby="rightModalabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-box">
              <ul class="modal-list">
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('about')" to="about"><p>01</p><h3>關於我們</h3><span>About Us</span></router-link></li>
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('#')" to="#"><p>02</p><h3>經驗分享</h3><span>Success Stories</span></router-link></li>
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('unintended-2')" to="unintended-2"><p>03</p><h3>我意外懷孕了</h3><span>Teen Mom</span></router-link></li>
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('youngdad-2')" to="youngdad-2"><p>04</p><h3>我女友懷孕了</h3><span>Teen Dad</span></router-link></li>
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('daughter-2')" to="daughter-2"><p>05</p><h3>我女兒懷孕了</h3><span>Parents</span></router-link></li>
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('family-2')" to="family-2"><p>06</p><h3>親友懷孕了</h3><span>Family</span></router-link></li>
                <li><img src="../assets/image/front/icon_triangle.svg"><router-link data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="closeModal('support-2')" to="support-2"><p>07</p><h3>我想支持</h3><span>Support</span></router-link></li>
                <li class="mb-20"><img src="../assets/image/front/icon_triangle.svg"><a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=637rlwfd" target="_blank"><p>08</p><h3>聯絡我們</h3><span>Contact Us</span></a></li>
              </ul>
              <ul class="d-flex justify-content-center modal-social">
                <li>
                  <a class="d-flex align-items-center rwd-item ps-0" target="_blank" href="https://reurl.cc/Q6mYj0"><img src="../assets/image/front/icon_document_header.svg">
                    <p class="ml-10 me-0 modal-text">資源下載</p>
                  </a>
                </li>
                <li><a href="https://www.facebook.com/butterflysweethome" target="_blank"><img src="../assets/image/front/icon_fb_menu.svg"></a></li>
                <li><a href="https://www.instagram.com/protect.butterfly/" target="_blank"><img src="../assets/image/front/icon_ig_menu.svg"></a></li>
                <li><a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=637rlwfd" target="_blank"><img src="../assets/image/front/icon_line_menu.svg"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- fixed-header -->
    <header class="container header-fixed fixed-top header-rwd" id="header">
      <section class="header" data-aos="fade-down" data-aos-duration="2000">
        <div class="header-logo">
          <a href="#">
              <img src="../assets/image/front/new_header_logo.svg">
          </a>
          <hr class="header-line">
          <h1>小蝴蝶資源整合平台</h1>
        </div>
        <div class="header-menu">
          <!-- 社群 icon -->
          <ul class="header-menu-social d-flex align-items-center phone-none">
            <li>
                <a class="d-flex align-items-center" href="https://reurl.cc/Q6mYj0" target="_blank"><img src="../assets/image/front/icon_document_header.svg">
                  <p class="ml-10 me-0">資源下載</p>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/butterflysweethome" target="_blank"><img src="../assets/image/front/icon_fb.svg"></a>
            </li>
            <li>
                <a href="https://www.instagram.com/protect.butterfly/" target="_blank"><img src="../assets/image/front/icon_ig.svg"></a>
            </li>
            <li>
                <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=637rlwfd" target="_blank"><img src="../assets/image/front/icon_line_header.svg"></a>
            </li>
          </ul>
          <div class="d-flex align-items-center ml-20">
            <router-link to="chat"><img class="member-icon" src="../assets/image/front/icon_member.svg"></router-link>

            <!-- 漢堡選單 -->
            <button class="header-hamburger header-fixed-hamburger mx-20" data-bs-toggle="modal" data-bs-target="#rightModal" aria-label="Main Menu" @click="toggleBtn()">
              <svg width="57" height="57" viewBox="0 0 100 100">
                  <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                  <path class="line line2" d="M 20,50 H 80" />
                  <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
    }
  },
  mounted () {
    $(document).ready(function () {
      // 觸碰特效
      $('.modal-list li').hover(function () {
        $('.modal-list li img').css('visibility', 'hidden')
        $('.modal-list li a h3').css('color', 'black')
        $('.modal-list li p').css('color', 'black')
        $('.modal-list li span').css('color', 'black')

        $(this).children('img').css('visibility', 'visible')
        $(this).find('p').css('color', 'white')
        $(this).find('h3').css('color', 'white')
        $(this).find('span').css('color', 'white')
      })

      // 離開時回復原本樣子
      $('.modal-list li').mouseleave(function () {
        $('.modal-list li img').css('visibility', 'hidden')
        $('.modal-list li h3').css('color', 'black')
        $('.modal-list li p').css('color', 'black')
        $('.modal-list li span').css('color', 'black')
      })
      // $(window).scroll(function () {
      // 判斷高度用 (預留)
      // })
    })
  },
  methods: {
    toggleBtn () {
      if ($('.header-fixed').hasClass('custom-visible')) {
        setTimeout(() => {
          $('.header-fixed').removeClass('custom-visible')
        }, 300)
      } else {
        $('.header-fixed').addClass('custom-visible')
      }
      $('.header-hamburger').toggleClass('opened')
      $('.header-fixed-hamburger').toggleClass('visible')
    },
    closeModal (res) {
      this.$router.push(`${res}`)
      this.toggleBtn()
    }
  },
  created () {
  }
}

</script>
