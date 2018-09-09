
import {fetch , login} from "../until/utils.js"

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isloading:true,
    imgUrls: [],
    books:[],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 300,
    pn:2,
    showmore:true
  },
  onPullDownRefresh: function () {
      if(!this.data.showmore){
        wx.stopPullDownRefresh()
      }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
   
    fetch.get("/category/books",{pn:this.data.pn}).then(res=>{
      console.log(res)
      if(res.data.data.length <2){
           console.log("...")
            this.setData({
              showmore:false
            })
      }else{
        let newarr = [...this.data.books,...res.data.data]
        this.setData({
            books:newarr,
            pn:this.data.pn+1
        })

      }
    })
  },
  //事件处理函数

  onLoad: function () {
    login();
    this.getData();
    this.getbookData();

    } ,
    onReady:function(){

    },
  getUserInfo: function(e) {
    
  },
  getData:function(){
    fetch.get("/swiper").then(res=>{
      console.log(res.data.data)
      this.setData({
        imgUrls: res.data.data
      })
    })
  },
  jumpmore:function(e){
    console.log(e)
    wx.navigateTo({
      url: `/pages/dypebook/typebook?id=${e.target.id}`,
    })

  },
  getbookData:function(){
  
    fetch.get("/category/books").then(res=>{
      console.log(res.data.data)
      
      this.setData({
        isloading: false,
        books:res.data.data
     
      })
    }).catch(err=>{
      this.setData({
        isloaing:false
      })
    })
  }

})
