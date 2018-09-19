<template>
  <div class="container">
    <swiper :imgUrls="bannerList"></swiper>
    <div class="introduce">
      <div class="idea-list">
        <menubuttons :imgStyle="idea.imgStyle" :textStyle="idea.textStyle" :menus="idea.ideaList" :line_num="idea.ideaColumn"></menubuttons>
      </div>
      <div class="introduce-imgs">
        <div class="img-view" v-for="(item, key) in introduceImgs.list" :key="key">
          <img :src="item" alt=""/>
        </div>  
        
      </div>
    </div>
    <tabbars/> 
  </div>
</template>

<script>
import tabbars from '@/components/tabbar/tabbar'
import swiper from '@/components/swiper/swiper'
import menubuttons from '@/components/menubuttons/menubuttons'

export default {
  data () {
    return {
      title: '首页',
      bannerList: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248414704&di=ab41644a6acf7a613037edf56ae5acd9&imgtype=0&src=http%3A%2F%2Fpic-cdn.35pic.com%2F58pic%2F19%2F71%2F58%2F570ccefbcff2c_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248060085&di=19b0414e849e6bf90cb63195258229eb&imgtype=0&src=http%3A%2F%2Fbbs.tianya.cn%2Fpost-hqxx%2Fuploads%2Fimage%2Fcustomer%2F61698%2Fqyxxq%2F2e02db4a9d6b.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248060019&di=82e1f277fe1d7c7cf515516c5a05e72e&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F16%2F30%2F21%2F16302108-ed7f2f05eb9518ff50fd64f4202a17c7-1.jpg'
      ],
      idea: {
        ideaColumn: 4,
        textStyle: 'font-size:24rpx;',
        imgStyle: 'width:80rpx;height:80rpx;',
        ideaList: [
          {
            id: '001',
            img: 'https://www.maibei168.com/web/index/static/images/icon01.png',
            title: '专业系统集成'
          },
          {
            id: '002',
            img: 'https://www.maibei168.com/web/index/static/images/icon02.png',
            title: '多元技术架构'
          },
          {
            id: '003',
            img: 'https://www.maibei168.com/web/index/static/images/icon03.png',
            title: '全国交付模式'
          },
          {
            id: '004',
            img: 'https://www.maibei168.com/web/index/static/images/icon04.png',
            title: '精细服务管理'
          }
        ]
      },
      introduceImgs: {
        list: [
          'https://user-assets.sxlcdn.com/images/140559/FiR8Kk6RyUChq_km5MWVJ3IjQLIr.png?imageMogr2/strip/thumbnail/1200x9000%3E/format/png'
        ]
      }
    }
  },

  components: {
    tabbars,
    swiper,
    menubuttons
  },

  created () {
  },

  mounted () {
    wx.setNavigationBarTitle({title: this.title})
  },

  methods: {}
}
</script>

<style scoped>
  .introduce{
    width: 100%;
    min-height: 500rpx;
    padding-bottom: 80rpx;
  }
  .idea-list{
    width: 100%;
    overflow: hidden;
    background: white;
    padding-bottom: 40rpx;
  }
  .introduce-imgs{
    width: 100%;
    overflow: hidden;
    margin-top: 20rpx;
    padding-bottom: 20rpx;
  }
  .introduce-imgs .img-view{
    width: 100%;
  }
  .introduce-imgs .img-view img{
    width: 100%;
    min-height: 1400rpx;
  }
</style>
