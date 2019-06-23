export default {
    data: {
        percentage: '', //百分比
        animTime: '', // 动画执行时间
    },
    options: {
        // 绘制圆形进度条方法
        run(c, w, h) {
            let that = this;
            var num = (2 * Math.PI / 100 * c) - 0.5 * Math.PI;
            that.data.ctx2.arc(w, h, w - 8, -0.5 * Math.PI, num); //每个间隔绘制的弧度
            that.data.ctx2.setStrokeStyle("#ED987D");
            that.data.ctx2.setLineWidth("16");
            that.data.ctx2.setLineCap("butt");
            that.data.ctx2.stroke();
            that.data.ctx2.beginPath();
            that.data.ctx2.setFontSize(20); //注意不要加引号
            that.data.ctx2.setFillStyle("#ED987D");
            that.data.ctx2.setTextAlign("center");
            that.data.ctx2.setTextBaseline("middle");
            that.data.ctx2.fillText("风险值", w, 80);
            that.data.ctx2.fillText(c + "%", w, h);

            that.data.ctx2.draw();
        },
        /**
         * start 起始百分比
         * end 结束百分比
         * w,h 其实就是圆心横纵坐标
         */
        // 动画效果实现
        canvasTap(start, end, time, w, h) {
            var that = this;
            start++;
            if (start > end) {
                return false;
            }
            that.run(start, w, h);
            setTimeout(function() {
                that.canvasTap(start, end, time, w, h);
            }, time);
        },
        /**
         * id----------------canvas画板id
         * percent-----------进度条百分比
         * time--------------画图动画执行的时间  
         */
        draw: function(id, percent, animTime) {
            var that = this;
            const ctx2 = wx.createCanvasContext(id);
            that.setData({
                ctx2: ctx2,
                percentage: percent,
                animTime: animTime
            });
            var time = that.data.animTime / that.data.percentage;
            wx.createSelectorQuery().select('#' + id).boundingClientRect(function(rect) { //监听canvas的宽高
                var w = parseInt(rect.width / 2); //获取canvas宽的的一半
                var h = parseInt(rect.height / 2); //获取canvas高的一半，
                that.canvasTap(0, that.data.percentage, time, w, h)
            }).exec();
        },
    }
}