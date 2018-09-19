
<template>
  <div class="container">
    <div class="top-img" :style="{'background': contact.topImg.background}">
      <img :src="contact.topImg.src" alt="">
    </div>
    <div class="contact-list">
      <div class="list" v-for="(items, key) in contact.contactList" :key="key" @click="handleContact(items)">
        <div class="label">{{items.title}}</div>
        <div class="text">{{items.val}}</div>
        <div class="icon" v-if="items.isOpr">
          <img :src="rightImg" alt="">
        </div>
      </div>
    </div>
    <tabbars/>
  </div>
</template>

<script>
import tabbars from '@/components/tabbar/tabbar'
import Utils from '@/utils/index'

export default {
  data () {
    return {
      title: '联系我们',
      rightImg: '/static/icon/right.png',
      contact: {
        topImg: {
          src: 'https://www.maibei168.com/web/index/static/images/logo.png',
          background: '#4B4B4B'
        },
        contactList: [
          {
            title: '联系电话',
            key: 'mobile',
            val: '400-9262299',
            isOpr: true,
            opr_type: 1
          },
          {
            title: '地址',
            key: 'address',
            val: '温州瑞安市经济开发区开发六路飞度国际货运有限公司5楼',
            isOpr: true,
            opr_type: 2
          },
          {
            title: '网址',
            key: 'website',
            val: 'https://www.baidu.com',
            isOpr: true,
            opr_type: 3
          },
          {
            title: '微信公众号',
            key: 'weipublic',
            val: '帮帮运',
            src: 'https://www.maibei168.com/web/index/static/images/qrcode.jpeg',
            isOpr: true,
            opr_type: 4
          }
        ]
      }
    }
  },

  components: {
    tabbars
  },

  created () {
  },

  mounted () {
    wx.setNavigationBarTitle({title: this.title})
  },

  methods: {
    handleContact (val) {
      // opr_type 0 无操作 1 showActionSheet 2 open map 3 open h5 4 open img
      if (val.opr_type === 1) {
        Utils.ShowActionSheet(['拨打电话'], function (params) {
          wx.makePhoneCall({phoneNumber: val.val})
        })
      }
      if (val.opr_type === 2) {
        wx.navigateTo({
          url: '/pages/map/main'
        })
      }
      if (val.opr_type === 3) {
        wx.navigateTo({
          url: '/pages/html5/main?url=' + val.val
        })
      }
      if (val.opr_type === 4) {
        let imgs = []
        imgs.push(val.src)
        Utils.PreviewImage(imgs)
      }
    }
  }
}
</script>

<style scoped>
.top-img{
  width: 100%;
  height: 300rpx;
  background: #4B4B4B;
  position: relative;
}
.top-img img{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 260rpx;
  height: 100rpx;
}
.contact-list{
  width: 100%;
  margin-top: 20rpx;
  padding: 0 20rpx;
  background: white;
  box-sizing: border-box;
}
.list{
  width: 100%;
  padding: 20rpx 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-content: center;
  font-size: 28rpx;
  border-bottom: 1px solid #d2d2d2;
}
.list:last-child{
  border-bottom:none;
}
.list .label{
  width: 25%;
  text-align: left;
}
.list .text{
  flex:1;
  text-align: right;
}
.list .icon{
  width: 40rpx;
  position: relative;
}
.list .icon img{
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 36rpx;
  height: 36rpx;
}
</style>
