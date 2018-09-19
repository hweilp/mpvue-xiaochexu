<script>
import store from './store/store'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.hideTabBar()
    let TabList = [
      {
        key: 'index',
        pagePath: '/pages/index/main',
        iconPath: '/static/tabbaricon/home.png',
        selectedIconPath: '/static/tabbaricon/home-active.png',
        text: '首页'
      },
      {
        key: 'products',
        pagePath: '/pages/products/main',
        iconPath: '/static/tabbaricon/products.png',
        selectedIconPath: '/static/tabbaricon/products-active.png',
        text: '产品展示'
      },
      {
        key: 'contact',
        pagePath: '/pages/contact/main',
        iconPath: '/static/tabbaricon/contact.png',
        selectedIconPath: '/static/tabbaricon/contact-active.png',
        text: '联系我们'
      }
    ]
    store.commit('TABBAR_LIST', TabList)
  }
}
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #f8f8f8;
  min-height: 1200rpx;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
