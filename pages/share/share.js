// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareAppMessage: function(e) {
    return e.from && "button" === e.from && console.log(e.target), {
        title: "AI神器，体态风险，一拍便知！",
        path: "/pages/index/index",
        imageUrl: "../../images/share-app.jpg",
        success: function(e) {
            console.log(e);
        },
        fail: function(e) {
            console.log(e);
        }
    };
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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