function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function ShowActionSheet (array, callback) {
  callback = callback || function (params) { }
  wx.showActionSheet({
    itemList: array,
    success: function (params) {
      callback(params)
    }
  })
}

function PreviewImage (images, callback) {
  callback = callback || function (params) { }
  wx.previewImage({
    urls: images,
    success: function (params) {
      callback(params)
    }
  })
}

function GetWindowInfo () {
  const windowInfo = wx.getSystemInfo()
  return windowInfo
}

export default {
  formatNumber,
  formatTime,
  ShowActionSheet,
  PreviewImage,
  GetWindowInfo
}
