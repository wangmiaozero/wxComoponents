// component/slideBarChart/slideBarChart.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        chartData: {
            type: Object,
            observer: function() {
                this.initialization()
            }
        },
        xName: {
            type: String
        },
        yName: {
            type: String
        },

    },

    /**
     * 组件的初始数据
     */
    data: {
        // historyData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        moveScroll: 0,
        barWidth: 0,
        windowWidth: 0, //实际的宽度
        nowIndex: 0, //当前位置的索引，从1开始
        scale: 1,
        chartLeft: 0,
        isTouch: false,
        scrollTimeout: "", //滚动节流定时器
    },
    /**
     * 生命周期
     */
    attached() {

    },
    ready() {

    },
    /**
     * 组件的方法列表
     */
    methods: {
        // 初始化
        initialization() {

            let self = this
            setTimeout(() => {
                wx.createSelectorQuery().in(this).selectAll('.slide-item-content').boundingClientRect(function(rects) {
                    // 获取bar的实际宽度
                    wx.getSystemInfo({
                        success: function(res) {
                            console.log(res, rects)
                            let chartLeft = (res.windowWidth - rects[0].width) / 3
                            console.log(rects[0].width, self.data.chartData.length - 1)
                            self.setData({
                                chartLeft: chartLeft,
                                chartWidth: (self.data.chartData.length - 0.5) * rects[0].width + res.windowWidth / 2
                            })
                            setTimeout(() => {
                                self.setData({
                                    // 滚动到最后一个时间轴
                                    moveScroll: rects[0].width * 1, //self.data.chartData.length - 1
                                    nowIndex: self.data.chartData.length,
                                    barWidth: rects[0].width,
                                    windowWidth: res.windowWidth
                                })
                            }, 1000)
                        }
                    })
                }).exec()

            }, 0)
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
            clearTimeout(this.data.scrollTimeout)
            if (this.data.isTouch) {
                this.setData({
                        scrollX: e.detail.scrollLeft
                    })
                    // 节流函数，当滑动停止的100毫秒后执行结束事件
                    // 因为ios下有惯性滑动，这里不能直接touchend事件
                this.setData({
                    scrollTimeout: setTimeout(() => {
                        this.clickEnd()
                    }, 200)
                })
            }
        },
        // 滑动结束
        clickEnd() {
            console.log('滑动结束')
            let nowIndex = Math.round(this.data.scrollX / this.data.barWidth + 1)
                //  console.log(nowIndex)
            this.setData({
                nowIndex: nowIndex,
                moveScroll: this.data.barWidth * (nowIndex - 1),
                isTouch: false
            })
            this.triggerEvent('currentBarChange', this.data.chartData[nowIndex - 1])
        }
    }

})