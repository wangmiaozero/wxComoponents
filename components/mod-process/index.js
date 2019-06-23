Component({
    /**
     * 组件的属性列表
     */
    properties: {
        //进度条总数
        maxCount: {
            type: Number,
            value: 0
        },
        //达到目标数量
        requireNum: {
            type: Number,
            value: 0
        },
        //已经完成的数量
        joinedNum: {
            type: Number,
            value: 0
        },
        //进度条长度
        processLen: {
            type: Number,
            value: 0
        },
        //是否展示刻度线
        showScale: {
            type: Boolean,
            value: true
        },
        //是否展示刻度值
        showScaleVal: {
            type: Boolean,
            value: true
        },
        //底部进度条颜色
        backgroundColor: {
            type: String,
            value: '#9CF0D1'
        },
        //动态变化颜色
        activeColor: {
            type: String,
            value: '#09CD8A'
        },
        //是否需要完成标志图标
        showSuccess: {
            type: Boolean,
            value: true
        },
        //进度条单位刻度值
        processItemLen: {
            type: Number,
            value: 10
        },
        //要求数量文案
        requireInfo: {
            type: String,
            value: '/'
        },
        //已达成文案
        activeInfo: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        maxCount: 0,
        joinedNum: 0,
        requireNum: 0,
        showScale: true,
        showScaleVal: true,
        scaleList: [],
        flagLeft: '',
        joinedLen: '',
        animationData: {},
        animationCheck: {},
        countAnimation: 0,
        //进度条总长度
        processLen: 0,
        //进度条刻度值
        processItemLen: 0
    },
    attached: function() {
        var that = this;
        var { maxCount, scaleList, joinedNum, joinedLen, countAnimation, requireNum, processLen, processItemLen } = that.data;
        //最大值不能被规定刻度正除的处理
        var handleData = that.handleProcessData(maxCount, processItemLen);
        for (let i = 0; i < (maxCount / processItemLen + 1); i++) {
            let scaleVal = processItemLen * i <= maxCount ? processItemLen * i : maxCount;
            scaleList.push({
                scale: processItemLen * i === requireNum ? '达成' : scaleVal,
                left: i === (handleData.shang + 1) ? `${processLen - 2}rpx` : `${i * (processLen * processItemLen / maxCount)}rpx`,
                numLeft: `${i * (processLen * processItemLen / maxCount) - 20}rpx`,
            });
            //完成标志位置
            if (processItemLen * i <= requireNum && processItemLen * (i + 1) >= requireNum) {
                var remainder = (requireNum % processItemLen) / processItemLen;
                that.setData({
                    flagLeft: `${(i+remainder) * (processLen * processItemLen / maxCount) - 20}rpx`
                });
                //达成在非整除刻度上时的特殊处理
                if (requireNum % processItemLen) {
                    scaleList.push({
                        scale: '达成',
                        left: i === (handleData.shang + 1) ? `${processLen - 2}rpx` : `${(i+remainder) * (processLen * processItemLen / maxCount)}rpx`,
                        numLeft: `${(i+remainder) * (processLen * processItemLen / maxCount) - 20}rpx`,
                    });
                }
            }
        }
        //已完成进度条长度
        joinedLen = `${(joinedNum / maxCount) * processLen}rpx`;
        //进度条
        var animation = wx.createAnimation({
            duration: 2000 * (joinedNum / maxCount),
            timingFunction: 'ease-in-out'
        });
        animation.width(joinedLen).step();
        this.setData({
            animationData: animation.export(),
        });
        //达到目标动画
        if (joinedNum >= requireNum) {
            var animationCheck = wx.createAnimation({
                duration: 350,
                timingFunction: 'ease'
            });

            animationCheck.scale(1.4).step().scale(1).step().scale(1.1).step().scale(1).step();
            setTimeout(() => {
                that.setData({
                    animationCheck: animationCheck.export(),
                });
            }, 2000 * (requireNum / maxCount));
        };

        that.setData({
            scaleList,
            joinedLen
        });

        var s = setInterval(() => {
            if (countAnimation < joinedNum) {
                ++countAnimation;
            } else {
                clearInterval(s);
                return
            };

            this.setData({
                countAnimation: countAnimation
            })
        }, 2000 / maxCount)
    },
    methods: {
        //最大值不能被规定刻度整除的处理
        handleProcessData: function(maxCount, processItemLen) {
            let remainder = maxCount % processItemLen;
            let shang = parseInt(maxCount / processItemLen);

            return { remainder, shang };
        }
    }
})