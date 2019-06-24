// pages/滑动展示图表/slideCharts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    moveScroll: 0,
    barWidth: 0,
    windowWidth: 0,//实际的宽度
    nowIndex: 0,//当前位置的索引，从1开始
    scale: 1,
    chartLeft: 0,
    isTouch: false,
    scrollTimeout: "",//滚动节流定时器
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.createSelectorQuery().selectAll('.slide-item-content').boundingClientRect(function (rects) {
      // 获取bar的实际宽度
      wx.getSystemInfo({
        success: function (res) {
          let chartLeft = (res.windowWidth - rects[0].width) / 2
          console.log(rects[0].width, that.data.historyData.length - 1)
          that.setData({
            chartLeft: chartLeft,
            chartWidth: (that.data.historyData.length - 0.5) * rects[0].width + res.windowWidth / 2
          })
          setTimeout(() => {
            that.setData({
              // 滚动到最后一个时间轴
              moveScroll: rects[0].width * (that.data.historyData.length - 1),
              nowIndex: that.data.historyData.length,
              barWidth: rects[0].width,
              windowWidth: res.windowWidth
            })
          }, 1000)
        }
      })
    }).exec()

  },
  // 滑动开始
  clickStart(e) {
    this.setData({
      isTouch: true
    })
  },
  // 滑动过程
  chartScroll(e) {
    // console.log("滑动" + e.detail.scrollLeft)
    let that = this
    clearTimeout(this.data.scrollTimeout)
    if (this.data.isTouch) {
      this.setData({
        scrollX: e.detail.scrollLeft
      })
      // 节流函数，当滑动停止的100毫秒后执行结束事件
      // 因为ios下有惯性滑动，这里不能直接touchend事件
      this.setData({
        scrollTimeout: setTimeout(() => {
          that.clickEnd()
        }, 100)
      })
    }
  },
  // 滑动结束
  clickEnd() {
    console.log('滑动结束')
    let nowIndex = Math.round(this.data.scrollX / this.data.barWidth + 1)
    this.setData({
      nowIndex: nowIndex,
      moveScroll: this.data.barWidth * (nowIndex - 1),
      isTouch: false
    })
  }
})