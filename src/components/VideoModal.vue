<template>
    <div>
    <!-- Modal -->
    <div class="modal fade videoModal" data-bs-backdrop="static"  id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body border-0">
            <h2>守護勇敢 翩然起舞</h2>
            <p>讓我們用愛點燃燈火<br>使溫暖照亮你我</p>
            <iframe width="500" height="300" src="https://www.youtube.com/embed/7Cm6lzBvXSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="modal-footer border-0">
            <button @click="closeModal" type="button" class="btn btn-purple text-white" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
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
    $('.header-fixed').removeClass('header-fixed')
    // eslint-disable-next-line no-undef
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'), {
      keyboard: false
    })
    videoModal.show()
  },
  methods: {
    closeModal () {
      setTimeout(() => {
        $('.fixed-top').addClass('header-fixed')
      }, 500)
    }
  },
  created () {
  }
}
</script>
