// pages/posters/posters1/posters1.js
let app = getApp();
let that;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        painting: {},
        shareImage: '',
        userInfo: {},
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
                width: 650, //这里的宽度 指的是 分享海报 的宽
                height: 1000,
                clear: true,
                views: [{
                        type: 'image',
                        url: 'https://zhanzhile.ukidgo.cn/static/images/common/poster/7-1.jpg',
                        top: 0,
                        left: 0,
                        width: 650,
                        height: 1000
                    },
                    {
                        type: 'image',
                        url: '../../images/img/avatar.jpeg',
                        top: 786,
                        left: 26,
                        width: 92,
                        height: 92
                    },

                    {
                        type: 'image',
                        url: '../../images/img/0722_tbg2.png',
                        top: 786,
                        left: 26,
                        width: 92,
                        height: 92
                    },
                    {
                        type: 'image',
                        url: "../../images/img/wxacode.jpeg",
                        top: 794,
                        left: 454,
                        width: 167,
                        height: 167
                    },
                    {
                        type: 'text',
                        content: 'romantic丶木槿',
                        fontSize: 30,
                        color: '#fff',
                        textAlign: 'left',
                        top: 796,
                        left: 136,
                        bolder: true
                    },

                ]
            }
        })
    },
    //保存相册
    eventSave: function() {

        // that.buried('SaveAndShareToMoments');
        //查看授权状态；
        if (wx.getSetting) { //判断是否存在函数wx.getSetting在版本库1.2以上才能用
            wx.getSetting({
                success(res) {
                    if (!res.authSetting['scope.writePhotosAlbum']) {
                        wx.authorize({
                            scope: 'scope.writePhotosAlbum',
                            success(res) {
                                wx.saveImageToPhotosAlbum({
                                    filePath: that.data.shareImage,
                                    success: function(res) {
                                        wx.showToast({
                                            title: '图片保存成功',
                                        });
                                    },
                                    fail: function(res) {
                                        wx.showToast({
                                            title: '图片保存失败',
                                            icon: 'none',
                                        });
                                    }
                                })
                            },
                            fail: function(res) {
                                //拒绝授权时会弹出提示框，提醒用户需要授权
                                wx.showModal({
                                    title: '提示',
                                    content: '保存图片需要授权，是否去授权',
                                    success: function(res) {
                                        if (res.confirm) {
                                            wx.openSetting({
                                                success: function(res) {

                                                }
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    } else { //已经授权
                        wx.saveImageToPhotosAlbum({
                            filePath: that.data.shareImage,
                            success: function(res) {
                                wx.showToast({
                                    title: '图片保存成功',
                                });
                            },
                            fail: function(res) {
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
                complete: function() {

                }
            })
        }
    },

    eventGetImage(event) {
        wx.hideLoading();
        console.log(event.detail);
        const {
            tempFilePath
        } = event.detail;
        that.setData({
            shareImage: tempFilePath
        })

    },

})