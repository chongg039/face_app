//logs.js
Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    let obj = JSON.parse(options.identify_data) // 原获取到的数据不知道为什么是json字符串，转换成json对象可用
    this.setData({
      "identify_data": obj['candidates'][0],
      "time": obj['time_ms'],
      "errorcode": obj['errorcode'], // 判断是否显示
      "img": wx.getStorageSync('image_path')
    })
  }
})
