// pages/share/share.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showVideo: false
    },

    //调用子组件的方法
    getSharePoster: function() {
        this.setData({ showVideo: false })
        this.selectComponent('#getPoster').getAvaterInfo()
    },

    myEventListener: function(e) {
        this.setData({ showVideo: true })
    },
    getUserInfo: function(e) {
        var that = this;
        if (e && e.detail.userInfo) {
            that.setData({
                showModal: false
            })
        }
        wx.getUserInfo({
            success: (result) => {
                console.log(2222)
                wx.showLoading({
                    title: '加载中',
                    mask: true
                })
                var gender = null;
                let nickName = result.userInfo.nickName
                let userPic = result.userInfo.avatarUrl
                let userData = {
                    'nickName': nickName,
                    'userPic': userPic,
                    'gender': gender,
                    'age': null
                }
                wx.setStorageSync('userInfo', userData);
                that.setData({
                    userData: userData
                })
                wx.hideToast()
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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

    }
})