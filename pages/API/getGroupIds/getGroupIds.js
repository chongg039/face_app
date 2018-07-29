// pages/API/getGroupIds/getGroupIds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    groups: wx.getStorageSync("all_group_ids"),
    title: "选择想要查看的分组列表并提交，\n查看该分组中所有学生。", // 换行符在<view>中无效
    items: [] // 这里如果没有会报错undefined，要解决
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindAllStu: function() {
    let groups = this.data.groups
    wx.navigateTo({
      url: '../getStuIds/getStuIds?group=' + groups[this.data.index],
    })
  },

  // radioChange: function (e) {
  //   console.log('radio发生change事件，携带value值为：', e.detail.value)

  //   var items = this.data.items;
  //   for (var i = 0, len = items.length; i < len; ++i) {
  //     items[i].checked = items[i].value == e.detail.value
  //   }

  //   this.setData({
  //     items: items
  //   });
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.groups)
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