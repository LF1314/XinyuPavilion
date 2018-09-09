// pages/musicopen/musicopen.js
var muscidatas = require("../../static/music-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shows:false,
    mid:"",
     songname: "",
    singername: "",
    last:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(muscidatas)
   
    this.setData({
      musicid:options.id,
      mid: muscidatas.musicdata[options.id].data.songmid,
      songname: muscidatas.musicdata[options.id].data.songname,
      singername: muscidatas.musicdata[options.id].data.singer[0].name
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    this.autoCtx = wx.createAudioContext("myAudio")
  },
  audioPlay: function () {
    this.autoCtx.pause()
    this.setData(
      {
        shows: !this.data.shows
      }
    )
    
  },
  stopplay(){
    this.autoCtx.play()
    this.setData(
      {
        shows: !this.data.shows
      }
    )
  }
,

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