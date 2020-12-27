<template>
  <div class="bg-section">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
    >
      <swiper-slide><img src="../assets/images/slider1.jpg"/></swiper-slide>
      <swiper-slide><img src="../assets/images/slider2.jpg"/></swiper-slide>
      <swiper-slide><img src="../assets/images/slider3.jpg"/></swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
@Component({
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class Home extends Vue {
  swiperOptions = {
    // slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true
    },
    effects:'coverflow',
    loop: true
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true
    // }
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev"
    // }
  };
  get swiper() {
    return (this.$refs.mySwiper as any).$swiper;
  }
}
</script>
<style lang="less">
.bg-section {
  background: url("../assets/images/bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  // background-position: center center;
  // -webkit-transition: all .4s ease;
  // transition: all .4s ease;
}
.swiper-slide{
  img{
    width: 100%;
    height: 100%;

  }
}
</style>
