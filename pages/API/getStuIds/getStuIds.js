// pages/API/getStuIds/getStuIds.js
const getStuIdsUrl = require("../../../config.js").getStuIdsUrl
const getInfoUrl = require("../../../config.js").getInfoUrl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    group: "",
    students: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let group = options.group
    let student = new Object()
    // this.setData({
    //   "group": group
    // })
    let _this = this
    wx.request({
      url: getStuIdsUrl,
      data: {
        "group_id": group,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function(res) {
        let stuIds = res.data['person_ids']
        let array = []
        for (let i = 0; i < stuIds.length; i++) {
          wx.request({
            url: getInfoUrl,
            data: {
              "student_id": stuIds[i],
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            method: 'POST',
            success: function(res) {
              student.name = res.data['person_name']
              student.id = res.data['person_id']
              student.faces = res.data['face_ids']
              student.groups = res.data['group_ids']
              student.tag = res.data['tag']

              array.push(student)

              _this.setData({
                "students": array
              })
            },
            fail: function() {
              console.log("fail")
            }
          })
        }
        console.log(_this.data.students)
      },
      fail: function() {
        console.log("fail")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})