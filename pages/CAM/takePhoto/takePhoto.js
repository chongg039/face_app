// pages/CAM/takePhoto/takePhoto.js

//获取应用实例
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    device: true,
    tempImagePath: "", // 拍照的临时图片地址
    camera: true,
    ctx: {},
    type: "takePhoto",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ctx: wx.createCameraContext()
    })
  },

  // 切换相机前后置摄像头
  devicePosition() {
    this.setData({
      device: !this.data.device,
    })
    console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");
  },
  camera() {
    let { ctx, type, startRecord } = this.data;
    // 拍照
    if (type == "takePhoto") {
      console.log("拍照");
      ctx.takePhoto({
        quality: "normal",
        success: (res) => {
          // console.log(res);
          this.setData({
            tempImagePath: res.tempImagePath,
            camera: false,
          });
          wx.navigateTo({
            url: '../uploadPhoto/uploadPhoto?imagePath=' + this.data.tempImagePath,
          })
        },
        fail: (e) => {
          console.log(e);
        }
      })
    }
  },
  // 打开模拟的相机界面
  open(e) {
    let { type } = e.target.dataset;
    console.log("开启相机准备", type == "takePhoto" ? "拍照" : "录视频");
    this.setData({
      camera: true,
      type
    })
  },
  // 关闭模拟的相机界面
  close() {
    console.log("关闭相机");
    this.setData({
      camera: false
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