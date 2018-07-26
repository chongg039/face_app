Page({
  onLoad: function () {
  },
  getGroupIds() {
    wx.navigateTo({
      url: '../getGroupIds/getGroupIds'
    })
  },
  getStuIds() {
    wx.navigateTo({
      url: '../getStuIds/getStuIds'
    })
  },
  getFaceIds() {
    wx.navigateTo({
      url: '../getFaceIds/getFaceIds'
    })
  },
  getFaceInfo() {
    wx.navigateTo({
      url: '../getFaceInfo/getFaceInfo'
    })
  },
  getInfo() {
    wx.navigateTo({
      url: '../getInfo/getInfo'
    })
  },
  faceIdentify() {
    wx.navigateTo({
      url: '../faceIdentify/faceIdentify'
    })
  }
})
