<template>
  <div class="container">
    <div class="product">{{data}}</div>
    <tabbars/>
  </div>
</template>

<script>
import tabbars from '@/components/tabbar/tabbar'

export default {
  name: 'product',
  data () {
    return {
      data: 'product',
      title: '产品展示'
    }
  },
  components: {
    tabbars
  },
  created () {
  },
  mounted () {
    wx.setNavigationBarTitle({title: this.title})
  }
}
</script>


<style>

</style>
