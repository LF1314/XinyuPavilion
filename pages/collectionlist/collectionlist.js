// pages/collectionlist/collectionlist.js
import { fetch } from "../until/utils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collectios:[],
    cancelid:[]
  
  },
  Cancelcollection(e){
    console.log(e.currentTarget.id)
     this.setData({
       cancelid:e.currentTarget.id
     })
    wx.showModal({
      title:"Cancelcollection",
      content:"取消收藏",
      cancelText:"取消",
      confirmText:"确定",
      cancelColor:"#ccc",
      success:res=>{
        if (res.confirm) {
          fetch.post(`/collection/delete`, { arr: [`${this.data.cancelid}`]}).then(res=>{
            wx.showToast({
              title: '取消成功',
              success:()=>{
                this.getCollections()
              }
            })
            
          })
        } else if (res.cancel) {
      
        }
      }


    })
  },
  getCollections() {
    fetch.get("/collection", {
      pn: 1,
      size: 20
    }).then(res => {
      console.log(res.data.data)
      this.setData({
        collectios: res.data.data,
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCollections()
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