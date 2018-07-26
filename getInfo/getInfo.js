// getInfo/getInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  formSubmit: function (e) {
    let _this = this
    let v = e.detail.value
    wx.request({
      url: 'http://192.168.0.109:2333/face/api/getinfo',
      data: {
        "student_id": Object.values(v)[0],
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (res) {
        _this.setData({
          "student_name": res.data['person_name'],
          "student_id": res.data['person_id'],
          "face_ids": res.data['face_ids'],
          "group_ids": res.data['group_ids'],
          "tag": res.data['tag'],
          "datas": _this.data
        })
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