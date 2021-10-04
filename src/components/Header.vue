<template>
  <div>
    <header class="container">
      <section class="header">
        <div class="header-logo">
          <a href="#">
              <img src="../assets/image/front/logo.svg">
          </a>
          <hr class="header-line">
          <h1>小媽媽資源整合平台</h1>
        </div>
        <div class="header-menu">
          <p>OUR MEDIA</p>
          <!-- 社群 icon -->
          <ul class="header-menu-social d-flex align-items-center">
              <li>
                  <a href="#"><img src="../assets/image/front/icon_fb.svg"></a>
              </li>
              <li>
                  <a href="#"><img src="../assets/image/front/icon_ig.svg"></a>
              </li>
              <li>
                  <a href="#"><img src="../assets/image/front/icon_youtu.svg"></a>
              </li>
              <li>
                  <a href="#"><img src="../assets/image/front/icon_line.svg"></a>
              </li>
          </ul>
          <div class="d-flex align-items-center ml-20">
              <a href="#"><img src="../assets/image/front/icon_member.svg"></a>

              <!-- 漢堡選單 -->
              <button class="header-hamburger mx-20" onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))" aria-label="Main Menu">
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
