// pages/book/book.js
import { fetch } from "../until/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
     bookid:"",
     bookmulu:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.setData({
     bookid:options.id
   })
  },
  getbookmulu:function(){
    fetch.get(`/titles/${this.data.bookid}`).then(res=>{
      console.log(res.data.data)
      this.setData({
        bookmulu:res.data.data
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getbookmulu();
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