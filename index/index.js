Page({
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        wx.setStorageSync('image_path', this.data.src) 
      }
    })
  },
  allFuncs() {
    wx.navigateTo({
      url: '../funcs/funcs'
    })
  },
  upload() {
    let image_path = wx.getStorageSync('image_path')
    let _this = this
    wx.uploadFile({
      url: 'http://192.168.0.109:2333/face/api/faceidentify',
      header: {
        'content-type': 'multipart/form-data' // 默认值
      },
      filePath: image_path,
      name: 'image',
      formData: {
        "group_id": "test1g", // 模拟数据
      },
      success: function (res) {
        _this.setData({
          "identify_data": res.data
        })
        wx.navigateTo({
          url: "../logs/logs?identify_data=" + _this.data.identify_data,
        })
      }
    })
    // wx.navigateTo({
    //   url: "../logs/logs?identify_data=" + _this.data.identify_data
    // })// 写在这里两个函数是异步的，第一次获取不到参数
  },
  rePhoto() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  error(e) {
    console.log(e.detail)
  }
})