var app = getApp()
Page({
    data: {
        num: 8, //这是当前有几个人
        jindutiao: [ //这个是进度条的标准，刻度
            {
                num: 3,
                price: '999'
            },
            {
                num: 5,
                price: '799'
            },
            {
                num: 10,
                price: '599'
            }
        ],
    },
    onLoad: function() {
        this.jindutiao();
    },
    jindutiao: function() {
        var that = this;
        var jindutiao = that.data.jindutiao;
        var num = that.data.num;
        var p = 0;
        for (var i = 0; i < jindutiao.length; i++) {
            if (jindutiao[i].num > num) {
                p = i;
                break;
            }
        }
        if (i == jindutiao.length) { p = i; }
        for (var j = 0; j < p; j++) {
            jindutiao[j].statu = true;
        }
        if (p == 0) {
            num = 0.5 / jindutiao.length * 100;

        } else if (jindutiao[p - 1].num < num) {
            num = (p + 0.5) / jindutiao.length * 100;
            //毕竟不是当前进度等分，所以让他在等于8，7，6的时候也能在中间。就加0.5
        } else {
            num = p / jindutiao.length * 100;
            //当前黄色进度长度就是当前人数除以总人数乘以100，就是进度条宽度的百分比。
        }
        that.setData({
            width: num,
            p: p,
            jindutiao: jindutiao
        })
    },
})