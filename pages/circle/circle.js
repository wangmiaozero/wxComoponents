// pages/circle/circle.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        progress_txt: '正在匹配中...',
        count: 0, // 设置 计数器 初始为0
        countTimer: null, // 设置 定时器 初始为null
        time: 100, //设置每100毫秒执行一次
    },
    drawProgressbg: function() {
        // 使用 wx.createContext 获取绘图上下文 context
        var ctx = wx.createCanvasContext('canvasProgressbg')
        ctx.setLineWidth(6); // 设置圆环的宽度
        ctx.setStrokeStyle('#20183b'); // 设置圆环的颜色
        ctx.setLineCap('round') // 设置圆环端点的形状
        ctx.beginPath(); //开始一个新的路径
        ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
        //设置一个原点(110,110)，半径为100的圆的路径到当前路径
        ctx.stroke(); //对当前路径进行描边
        ctx.draw();
    },
    drawCircle: function(step) {
        var context = wx.createCanvasContext('canvasProgress');
        // 设置渐变
        var gradient = context.createLinearGradient(200, 100, 100, 200);
        gradient.addColorStop("0", "#2661DD");
        gradient.addColorStop("0.5", "#40ED94");
        gradient.addColorStop("1.0", "#5956CC");

        context.setLineWidth(10);
        context.setStrokeStyle(gradient);
        context.setLineCap('round')
        context.beginPath();
        // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
        context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
        context.stroke();
        context.draw()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    countInterval: function() {
        // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
        this.countTimer = setInterval(() => {
            if (this.data.count <= 60) {
                /* 绘制彩色圆环进度条  
                注意此处 传参 step 取值范围是0到2，
                所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
                */
                this.drawCircle(this.data.count / (60 / 2))
                this.data.count++;
            } else {
                this.setData({
                    progress_txt: "匹配成功"
                });
                clearInterval(this.countTimer);
            }
        }, this.data.time)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.drawProgressbg();
        this.drawCircle(2); //彩色圈圈
        this.countInterval() //定时
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

/* //index.js
//获取应用实例
const app = getApp()
Page({
  data: { 
    num:100,
    step:null,
    time:null,
    stepTimer:null,
  },
  stepInterval:function(){
    // 设置倒计时 定时器
    var n = this.data.num / 2
    this.stepTimer = setInterval(() => {
      if (this.data.num >= 0) {
        this.data.step = this.data.num / n;
        // 绘制彩色圆环进度条
        this.circle.drawCircle('circle_draw', 40, 4, this.data.step)
        if ((/(^[1-9]\d*$)/.test(this.data.num / 10))) {
          // 当时间为整数秒的时候 改变时间
          this.setData({
            time: this.data.num / 10
          });
        }
        this.data.num--;
      } else {
        this.setData({
          time: 0
        });
      }
    }, 100) 
  },
  changeTime:function(){
    // 先清除定时器
    clearInterval(this.stepTimer);
    // 计数器 还原到100
    this.setData({
      num: 100
    });
    // 重新开启倒计时
    this.stepInterval()
    // 触发自定义组件事件
    this._runEvent()
  },
  onLoad: function () {
  },
  onReady: function () {
    //倒计时
    // 获得circle组件
    this.circle = this.selectComponent("#circle");
    // 绘制背景圆环
    this.circle.drawCircleBg('circle_bg', 40, 4)
    // 绘制彩色圆环
    this.stepInterval()
  },
  
  _runEvent() {
     console.log(1111) 
  },
})
 */