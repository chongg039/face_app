// pages/CAM/index.js
const getGroupIdsUrl = require("../../config.js").getGroupIdsUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "这是一个面向学校的人脸识别小程序，旨在帮助教师识别学生身份。",
  },

  directToCamera() {
    wx.navigateTo({
      url: './takePhoto/takePhoto',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: getGroupIdsUrl,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (res) {
        _this.setData({
          groups: res.data['group_ids']
        })
        wx.setStorageSync('all_group_ids', _this.data.groups) // 这样才能获取setData的值
      },
      fail: function () {
        console.log("fail")
      }
    })
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