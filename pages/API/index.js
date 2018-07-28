// pages/API/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "这里是小程序提供的全部功能，部分功能可能不提供界面只提供函数，以供别的界面逻辑使用"
  },

  getGroupIds() {
    wx.navigateTo({
      url: './getGroupIds/getGroupIds'
    })
  },
  getStuIds() {
    wx.navigateTo({
      url: './getStuIds/getStuIds'
    })
  },
  getFaceIds() {
    wx.navigateTo({
      url: './getFaceIds/getFaceIds'
    })
  },
  getFaceInfo() {
    wx.navigateTo({
      url: './getFaceInfo/getFaceInfo'
    })
  },
  getInfo() {
    wx.navigateTo({
      url: './getInfo/getInfo'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})