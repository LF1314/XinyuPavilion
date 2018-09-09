// pages/details/details.js


import {fetch} from "../until/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookid:"",
    bookdata:{},
    iscollect:0
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  this.setData({
    bookid:options.id
  })
  },
  
 collect(){
      this.setData({
        iscollect:false
      }),
      wx.showToast({
        title: '收藏成功',
        duration:1000,
        mask:true,
        
        success:()=>{
          this.setData({
            iscollect: true
          })
          fetch.post("/collection", {bookId: this.data.bookid})
        }
        
      })
 },
  getDate:function(){
    fetch.get(`/book/${this.data.bookid}`).then(res=>{
      console.log(res.data)
      if(res.data.isCollect){
        this.setData({
          iscollect:true
        })
      }
      this.setData({
        bookdata:res.data,
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getDate();
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
  onShareAppMessage: function (res) {

    if(res.from==="button"){
     
      return{
        title: this.data.bookdata.data.title,
        path: "/pages/details/details",
        imageUrl: this.data.bookdata.data.img
      }
    }
  },
  readbook:function(){
    wx.navigateTo({
      url: `/pages/book/book?id=${this.data.bookid}`,
    })
  }
})