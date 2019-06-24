// pages/main/main.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        chartData: [{
                name: 0,
                value: 200,
                text: `Weex 是一套简单易用的跨平台开发方案，
                能以 web 的开发体验构建高性能、可扩展的 native 应用`
            },
            {
                name: 1,
                value: 20,
                text: `仅仅管一行，因此在只有第一个元素设置了高度的情况下，第一行的其`
            },
            {
                name: 2,
                value: 120,
                text: `仅仅管一行，因此在只有第一个元素设置了高度的情况下，第一行的其`
            },
            {
                name: 3,
                value: 90,
                text: `仅仅管一行，因此在只有第一个元素设置了高度的情况下，第一行的其`
            },
            {
                name: 4,
                value: 110
            },
            {
                name: 5,
                value: 140
            },
            {
                name: 6,
                value: 160
            },
            {
                name: 7,
                value: 50
            }, {
                name: 8,
                value: 60
            }, {
                name: 9,
                value: 140
            },
        ],
        currentData: ""
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

    // 滑动组件变化时处罚
    currentBarChange: function(e) {
        console.log(e)
        console.log(e.detail),
            this.setData({
                currentData: e.detail
            })
    }
})