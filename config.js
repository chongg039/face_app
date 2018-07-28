/**
 * 小程序配置文件
 */

// 目标服务器地址
var host = "192.168.0.109:2333"

var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 创建个体，此函数小程序暂不使用
  newStuUrl: `http://${host}/face/api/newstu`,

  // 删除个体
  delStuUrl: `http://${host}/face/api/delstu`,

  // 获取个体信息
  getInfoUrl: `http://${host}/face/api/getinfo`,

  // 重置个体信息：新的name和tag
  setInfoUrl: `http://${host}/face/api/setinfo`,

  // 获取分组列表
  getGroupIdsUrl: `http://${host}/face/api/getgroupids`,

  // 获取某分组中的个体列表
  getStuIdsUrl: `http://${host}/face/api/getstuids`,

  // 获取一个人的人脸列表
  getFaceIdsUrl: `http://${host}/face/api/getfaceids`,

  // 获取人脸信息
  getFaceInfoUrl: `http://${host}/face/api/getfaceinfo`,

  // 单人脸识别
  faceIdentifyUrl: `http://${host}/face/api/faceidentify`,
};

module.exports = config