// pages/login/login.js
import { fetch } from "../until/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
   num:[],
  readlist:[],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   
  },
  getreadlist(){
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          fetch.get("/readList").then(res => {
            console.log(res)
            let nu = res.data.data.map(item => {
              console.log(item.title.index / item.title.total)
              return (parseInt(item.title.index / item.title.total * 100))
            })
            this.setData({
              num: nu,
              readlist: res.data.data
            })
            console.log(this.data.num)
          })

        }
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
    this.getreadlist();
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
    this.getreadlist();
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