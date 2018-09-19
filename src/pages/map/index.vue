<template>
  <div class="container">
    <map class="map" id="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale" :style="{'height': windowHeight }"></map>
  </div>
</template>

<script>
import Utils from '@/utils/index'
export default {
  name: 'map',
  data () {
    return {
      windowHeight: '',
      title: '地图',
      longitude: '113.324520',
      latitude: '23.099994',
      scale: 14,
      markers: [
      ]
    }
  },
  mounted () {
    this.windowHeight = Utils.GetWindowInfo.windowHeight
    wx.setNavigationBarTitle({title: this.title})
  },
  onLoad: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        this.longitude = res.longitude
        this.latitude = res.latitude
        this.markers.push({
          iconPath: '/static/icon/mark.png',
          id: 0,
          width: 40,
          height: 40,
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  }
}
</script>

<style scoped>
  .map{
    width: 100%;
    min-height: 400px;
  }
</style>

