// pages/readbook/readbook.js
import { fetch } from "../until/utils.js"
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isloading:false,
    articleid:"",
    booktitle:[],
    bookid:"",
    article:{},
    title:"",
    ishow:false,
    viewopacity: 0,
    font:40,
    index:0


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
   this.setData({
     articleid:options.id,
     bookid:options.book_id
   })
  },
   getarticledata:function(){
     this.setData({
       isloading:true
     })
     fetch.get(`/article/${this.data.articleid}`).then(res=>{
       console.log(res.data.data);
      //  let data = app.towxml.toJson(res.data.data.article.content, 'markdown');
  
       this.setData({
         article: res.data.data.article.content,
         index: res.data.data.article.index,
         title:res.data.data.title,
         isloading:false,
       })

     }).catch(err=>{
       this.setData({
         isloaing:false
       })
     })
    

   },

   getbooktitle:function(){
     fetch.get(`/titles/${this.data.bookid}`).then(res=>{
       console.log(res.data)
       this.setData({
         booktitle:res.data.data
       })
     })
   },
   //切换文章
   addartilce(){
     if(this.data.booktitle[this.data.index +1]){
       this.setData({
         index:this.data.index+1,
         articleid:this.data.booktitle[this.data.index +1]._id
        
       })
       this.getarticledata();
     }else{
       wx.showToast({
         title: '最后一章了',
       })
     }
   },
  delarticle(){
    if (this.data.booktitle[this.data.index - 1]) {
      this.setData({
        index: this.data.index - 1,
        articleid: this.data.booktitle[this.data.index - 1]._id

      })
      this.getarticledata();
    } else {
      wx.showToast({
        title: '第一章',
      })
    }
  },
  // 导航栏动画
  changes(){
    this.setData({
      ishow:!this.data.ishow
    })

  },

  //放大缩小字体
   addfont(){
     console.log("....")
    if(this.data.font<80){
      this.setData({
        font: this.data.font + 2
      })}else{
        wx.showToast({
          title: '小伙子还放大',
        })
      }
   },
   delfont(){
    if(this.data.font>24){
      this.setData({
        font: this.data.font -2
      })
    }else{
      wx.showToast({
        title: '最小了已经',
      })
    }
   },

  changetitle(e){
    this.changes();
    let id = e.currentTarget.id
    this.setData({
      articleid:id
    })
    this.getarticledata();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getarticledata();
    this.getbooktitle();
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