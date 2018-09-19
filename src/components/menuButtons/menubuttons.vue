<!--  -->
<template>
  <div class="con">
    <div class="menu-wrapper">
      <div class="menu-item" v-for="(item,i) in menus" :key="i" :style="style">
        <img :src="item.img" :style="imgStyle"/>
        <span :style="textStyle">{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    menus: {
      type: Array,
      default: []
    },
    line_num: {
      type: Number,
      default: 3
    },
    imgStyle: {
      type: String,
      default: ''
    },
    textStyle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      style: ''
    }
  },
  created () {
    this.style = 'flex-basis:' + (100 / this.line_num).toFixed(4) + '%'
  },
  methods: {}
}
</script>
<style scoped>
.con{
  width: 100%;
  margin-top: 20rpx;
}
.menu-wrapper {
  display: flex;
  flex-flow: row wrap;
}
.menu-item {
  /* overflow: hidden; */
  text-align: center;
  margin-top: 20rpx;
}
.menu-item image {
  display: block;
  margin: 0 auto;
  width: 100rpx;
  height: 100rpx;
}
.menu-item text {
  font-size: 28rpx;
}
</style>
