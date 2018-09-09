// pages/music/music.js
import { musicdata } from "../../static/music-data.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
        musicdata:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(musicdata)
    this.setData({
      musicdata: musicdata
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.autoCtx = wx.createAudioContext("myAudio")
  },
  audioPlay: function () {
    this.autoCtx.play()
  },
  audioPause: function () {
    this.autoCtx.pause()
  },
  audioStart: function () {
    this.autoCtx.seek(0)
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