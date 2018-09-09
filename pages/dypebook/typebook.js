// pages/dypebook/typebook.js
import { fetch } from "../until/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
  books:{},
  typeid:""
  },
  getbookData: function () {
    fetch.get(`/category/${this.data.typeid}/books`).then(res => {
      console.log(res.data.data)

      this.setData({
        isloading: false,
        books: res.data.data

      })
    }).catch(err => {
      this.setData({
        isloaing: false
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
 this.setData({
   typeid:options.id
 })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getbookData()
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