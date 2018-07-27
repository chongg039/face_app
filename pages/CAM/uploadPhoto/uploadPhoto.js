// pages/CAM/uploadPhoto/uploadPhoto.js
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
    let imagePath = options.imagePath
    let _this = this
    wx.uploadFile({
      url: 'http://192.168.0.109:2333/face/api/faceidentify',
      header: {
        'content-type': 'multipart/form-data' // 默认值
      },
      filePath: imagePath,
      name: 'image',
      formData: {
        "group_id": "test1g", // 模拟数据
      },
      success: function (res) {
        let datas = JSON.parse(res.data)
        _this.setData({
          "identify_data": datas['candidates'][0],
          "time": datas['time_ms'],
          "errorcode": datas['errorcode'], // 判断是否显示
          "img": imagePath
        })
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