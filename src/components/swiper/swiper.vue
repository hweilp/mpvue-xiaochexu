<!--  -->
<template>
  <swiper class="swiper" 
          :circular="circular" 
          :indicator-color="indicatorColor"
          :indicator-active-color="indicatorActiveColor"
          :indicator-dots="indicatorDots" 
          :autoplay="autoplay" 
          :interval="interval" 
          :duration="duration">
    <block v-for="(item,i) in imgUrls" :index="index" :key="i">
      <swiper-item>
        <image :src="item" class="slide-image" width="355" height="150"/>
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
export default {
  name: '',
  props: {
    imgUrls: {
      type: Array,
      default: []
    },
    indicatorColor: {
      type: String,
      default: 'rgba(0, 0, 0, .3)'
    },
    indicatorActiveColor: {
      type: String,
      default: 'rgba(0, 0, 0, 1)'
    }
  },
  data () {
    return {
      indicatorDots: true,
      autoplay: true,
      circular: true,
      interval: 5000,
      duration: 1000
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {}
}
</script>
<style scoped>
.swiper{
  height: 360rpx;
  width: 100%;
}
image{
  width: 100%;
}
</style>
