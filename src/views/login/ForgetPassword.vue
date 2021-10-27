<template>
  <div>
    <section class="login-inner">
      <h3 class="pt-50" data-aos="fade-up">忘記密碼</h3>
      <p data-aos="fade-up">-forgot password-</p>
      <Form class="d-flex justify-content-center pb-120" v-slot="{ errors }">
        <label data-aos="fade-up" for="a" class="forget-label">
          <span class="forget-span">請輸入手機/Email</span>
          <Field class="forget-input mb-15" rules="email|required" :class="{ 'outline-danger': errors['請輸入手機/Email'] }" name="請輸入手機/Email" type="email" placeholder="請輸入手機/Email，以便接受連結通知" />
          <error-message name="請輸入手機/Email" class="error-text"></error-message>
          <button data-aos="fade-up" class="login-btn mt-20">發送驗證</button>
          <router-link data-aos="fade-up" class="forget-link" to="tt"><i class="fas fa-chevron-left"></i><p class="pb-0">返回上一頁</p></router-link>
        </label>
      </Form>
    </section>
  </div>
</template>
