// pages/posters/posters2/posters2.js
let that
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    painting: {},
    shareImage: '',
    shareText: "保存图片并分享朋友圈"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;

    //关闭分享
    wx.hideShareMenu();
    
  },
  eventDraw() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
    that.setData({
      painting: {
        width: 656, //这里的宽度 指的是 分享海报 的宽
        height: 1320,
        clear: true,
        views: [{
            type: 'image',
            url: '../../images/img/share2.png',
            top: 0,
            left: 0,
            width: 656,
            height: 1320
          },
          {
            type: 'image',
            url: '../../images/img/avatar.jpeg',
            top: 46,
            left: 200,
            width: 92,
            height: 92
          },

          {
            type: 'image',
            url: '../../images/img/0722_tbg1.png',
            top: 46,
            left: 200,
            width: 92,
            height: 92
          },
          {
            type: 'image',
            url: '../../images/img/avatar.jpeg' ,
            top: 46,
            left: 360,
            width: 92,
            height: 92
          },

          {
            type: 'image',
            url: '../../images/img/0722_tbg1.png',
            top: 46,
            left: 360,
            width: 92,
            height: 92
          },
          {
            type: 'image',
            url: '../../images/img/wxacode.jpeg',
            top: 1042,
            left: 448,
            width: 164,
            height: 164
          },
          {
            type: 'text',
            content: '我对romantic丶木槿的',
            fontSize: 30,
            color: '#fff',
            textAlign: 'center',
            top: 144,
            left: 328,
            bolder: true
          },
          
          {
            type: 'text',
            content:   '25.8%',
            fontSize: 86,
            color: '#fb4b50',
            textAlign: 'center',
            top: 294,
            left: 328,
            bolder: true
          },
          {
            type: 'text',
            content: '36',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 584,
            left: 42,
            bolder: true
          },
          {
            type: 'text',
            content: '45',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 678,
            left: 42,
            bolder: true
          },
          {
            type: 'text',
            content:'36',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 772,
            left: 42,
            bolder: true
          },
          {
            type: 'text',
            content: '78',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 866,
            left: 42,
            bolder: true
          },
          {
            type: 'text',
            content: '89',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 960,
            left: 42,
            bolder: true
          },
          {
            type: 'text',
            content: '56',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 584,
            left: 370,
            bolder: true
          },
          {
            type: 'text',
            content:'23',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 678,
            left: 370,
            bolder: true
          },
          {
            type: 'text',
            content: '12',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 772,
            left: 370,
            bolder: true
          },
          {
            type: 'text',
            content:'12',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 866,
            left: 370,
            bolder: true
          },
          {
            type: 'text',
            content: '12',
            fontSize: 24,
            color: '#2200FF',
            textAlign: 'left',
            top: 960,
            left: 370,
            bolder: true
          }
        ]
      }
    })
  },
  //保存相册
  eventSave: function () {

    //查看授权状态；
    if (wx.getSetting) {//判断是否存在函数wx.getSetting在版本库1.2以上才能用
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success(res) {
                wx.saveImageToPhotosAlbum({
                  filePath: that.data.shareImage,
                  success: function (res) {

                    wx.showToast({
                      title: '图片保存成功',
                    });
                  },
                  fail: function (res) {
                    wx.showToast({
                      title: '图片保存失败',
                      icon: 'none',
                    });
                  }
                })

              },
              fail: function (res) {
                //拒绝授权时会弹出提示框，提醒用户需要授权
                wx.showModal({
                  title: '提示',
                  content: '保存图片需要授权，是否去授权',
                  success: function (res) {
                    if (res.confirm) {
                      wx.openSetting({
                        success: function (res) {
                        }
                      })
                    }
                  }
                })
              }
            })
          } else {
            console.log("已经授权过了");
            wx.saveImageToPhotosAlbum({
              filePath: that.data.shareImage,
              success: function (res) {

                wx.showToast({
                  title: '图片保存成功',
                });
              },
              fail: function (res) {
                wx.showToast({
                  title: '图片保存失败',
                  icon: 'none',
                });
              }
            })

          }
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '因当前微信版本过低导致无法下载，请更新至最新版本',
        showCancel: false,
        complete: function () {

        }
      })
    }
  },

  eventGetImage(event) {
    wx.hideLoading();
    const {
      tempFilePath
    } = event.detail;
    that.setData({
      shareImage:tempFilePath
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    
   
  },
})