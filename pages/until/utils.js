const baseURl = 'https://m.yaojunrong.com'

const fetch = {
  http(url, method,data) {
    return new Promise((resolve, reject) => {
      let header =  {
        'Content-Type': 'application/json'
        }
      if (wx.getStorageSync('Token')){
        header.Token = wx.getStorageSync('Token');
      }
      wx.request({
        url: baseURl + url,
        method,
        data,
        header,
        success(res) {
          console.log(res)
        if(res.header.Token || res.header.token){
          wx.setStorageSync('Token', (res.header.token || res.header.Token))
        }
          resolve(res)
        },
        fail(err){
          reject(err)
        }
      })
    })
  },
  get(url,data){
     return this.http(url,"GET",data);
  },
  post(url,data){
    return this.http(url,"POST",data)
  },
  delete(url,data) { return this.http(url,"DELETE",data)}
}
const login = ()=>{
  wx.login({
    success:function(res){
       fetch.post('/login',{
         code:res.code,
         appid: "wx6ce9d46464e18d07",
         secret:"39e6659d65f6fbc7906db5c5bcfd420c"
       }).then(res=>{
        
       })
    }
  })
}
exports.login = login;
exports.fetch = fetch;
