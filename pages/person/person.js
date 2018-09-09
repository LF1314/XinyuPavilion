// pages/person/person.js
import { fetch } from "../until/utils.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ishowthem:false,
    userinfo:{},
    canIUse: false,
    imgid:0,
    collectios:0,
    imgurl:[
      { img: "https://s1.ax2x.com/2018/09/07/5FFSJE.jpg",index:0,name:"美食风"},
      { img: "https://s1.ax2x.com/2018/09/07/5FFkfG.jpg",index:1,name:"白熊"},
      { img: "https://s1.ax2x.com/2018/09/07/5FFfIQ.jpg",index:2,name:"植物"},
      { img: "https://s1.ax2x.com/2018/09/07/5FF8Tn.jpg",index:3,name:"创意"},
      { img: "https://s1.ax2x.com/2018/09/07/5FFx52.jpg",index:4,name:"苹果"},
      { img: " https://s1.ax2x.com/2018/09/07/5FF2Oa.jpg",index:5,name:"搞笑"},
      { img: " https://s1.ax2x.com/2018/09/07/5FF7Uz.jpg",index:6,name:"风格"},
      { img: "https://s1.ax2x.com/2018/09/07/5FTTBE.jpg", index: 7, name: "写真" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTOF9.jpg", index: 8, name: "动漫" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTXsQ.jpg", index: 9, name: "唯美" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTFkn.jpg", index: 10, name: "唯美" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTYjz.jpg", index: 11, name: "清新" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTBvG.jpg", index: 12, name: "唯美" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTm12.jpg", index: 13, name: "可爱" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTzqa.jpg", index: 14, name: "唯美" },
      { img: "https://s1.ax2x.com/2018/09/07/5FTQ2h.jpg", index: 15, name: "天真" },
      { img: "https://s1.ax2x.com/2018/09/07/5FT0CS.jpg", index: 16, name: "帅锅" }
    ]
  },
  num:0,
  changetheam(){
      this.setData({
        ishowthem: !this.data.ishowthem
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getStorageSync('imgid')){
      this.setData({
        imgid:wx.getStorageSync('imgid'),
        num: Math.floor(Math.random()*1000)
      })
    }
    let _this = this
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
               console.log(res)
              _this.setData({
                userinfo: res.userInfo,
                canIUse:true
              })
            }
          })
        }
      }
    })
   
  },
  changeimg(e){
    console.log(e)
     this.setData({
       imgid:e.currentTarget.id
     })
   wx.setStorageSync('imgid', this.data.imgid)
    this.changetheam()

  },
  articletype(){
   wx.navigateTo({
     url: '/pages/articletype/articletype'
   })
  },
  listenmusic(){
     wx.navigateTo({
       url:`/pages/music/music`,
     })
  },
  Collectionlist() {
    wx.navigateTo({
      url: `/pages/collectionlist/collectionlist`,
    })
  },

  bindGetUserInfo: function (e) {
    this.setData({
      userinfo: e.detail.userInfo,
      canIUse: true
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
  
    this.getCollections() 
  },
  getCollections() {
    let _this = this
    wx.getSetting({
      
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          fetch.get("/collection", {
            pn: 1,
            size: 20
          }).then(res => {
            console.log(res)
            _this.setData({
              collectios: res.data.data.length,

            })
          })
        }
      }
    })




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