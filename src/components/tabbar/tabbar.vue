<template>
  <div class="tabBar-wrap">
    <div class="tabBar-box">
      <ul class="tabBar-nav">
        <li class="item" v-for="(item, index) in navList"
            @click="selectNavItem(index,item.pagePath)"
            :key="index">
          <p class="item-images">
            <img :src="selectNavIndex === index ? item.selectedIconPath : item.iconPath" alt="iconPath">
          </p>
          <p :class="selectNavIndex === index ? 'item-text item-text-active' : 'item-text' " 
              :style="{color:selectNavIndex === index ? selectedTextColor : TextColor}">
            {{item.text}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../../store/store'
export default {
  props: {
    TextColor: {
      type: 'String',
      default () {
        return store.getters.tabbar.TextColor
      }
    },
    selectedTextColor: {
      type: 'String',
      default () {
        return store.getters.tabbar.selectedTextColor
      }
    }
  },
  data () {
    return {
      selectNavIndex: 0,
      navList: [
      ]
    }
  },
  created () {
    this.selectNavIndex = store.getters.tabbar.selectNavIndex
    this.navList = store.getters.tabbar.navList
  },
  methods: {
    selectNavItem (index, pagePath) {
      if (index === this.selectNavIndex) {
        return false
      } else {
        store.commit('SELECTED_NAV_INDEX', index)
        this.bindSwitchTabTo(pagePath)
      }
    },

    /**
     * 路由跳转
     */
    bindSwitchTabTo (url) {
      wx.switchTab({url})
    },

    /**
     * 回到顶部
     */
    bindViewTap (url) {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
}
</script>

<style>
.tabBar-wrap{
  position: fixed;
  z-index: 99;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70rpx;
  padding: 10rpx 0;
  border-top: 1rpx solid #eee;
  background-color: rgba(255, 255, 255, 1);
}
.tabBar-box {
  width: 100%;
  height: 100%;
}

.tabBar-nav {
  width: 100%;
  height: 100%;
  display: flex;
}

.tabBar-nav .item {
  flex: 1;
  text-align: center;
}

.tabBar-nav .item-text {
  color: #666;
  font-size: 28rpx;
  transition: .24s linear;
}

.tabBar-nav .item-text {
  color: #666;
  font-size: 24rpx;
  transition: .24s linear;
}

.tabBar-nav .item-text-active {
  color: #f12c20;
}

.tabBar-nav .item-images {
  width:44rpx;
  height: 44rpx;
  margin: 0 auto;
  text-align: center;
  transition: .24s linear;
}
.tabBar-nav .item-images img {
  display: inline;
}

.submit-box-btn {
  position: relative;
  z-index: 999;
  width: 85%;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 10rpx;
  color: #404040;
  font-size: 36rpx;
  border: none;
  background-color: #eee;
  text-align: center;
  border: 1rpx solid #eee;
}

.submit-box-btn-active {
  color: #fff;
  border: none;
  border: 1rpx solid #ff6c00;
  background-color: #ff6c00;
}

button {
  border: none;
  outline: none;
}
</style>
