<template>
  <div class="bg-section">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :auto-play="true"
    >
      <swiper-slide v-for="(item,index) in banners" :key="index" ><img v-lazy="item" /></swiper-slide>
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
  banners = [
			    // require("../assets/images/slider1.jpg"),
        	// require("../assets/images/slider1.jpg"),
        	// require("../assets/images/slider1.jpg")
    ]
    
  swiperOptions = {
    speed: 2000,
    autoplay:true,
    // autoplay: {
    //   delay: 500,
    //   disableOnInteraction: true
    // },
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
  mounted() {
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script> 
<style lang="less" scoped>
.bg-section {
  background: url("../assets/images/bg.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center center;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
.swiper-slide{
  text-align: center;
  // img{
  //   width: 80%;
  //   height: 100%;

  // }
}
</style>
