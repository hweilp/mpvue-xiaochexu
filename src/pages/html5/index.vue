<template>
  <web-view :src="url"></web-view>
</template>

<script>
export default {
  name: 'html5',
  data () {
    return {
      url: ''
    }
  },
  onLoad: function (option) {
    this.url = option.url
  }
}
</script>

