//index.js
import Poster from '../../components/miniprogram_dist/poster/poster';

const posterConfig = {
    jdConfig: {
        width: 750,
        height: 1334,
        backgroundColor: '#fff',
        debug: false,
      
        texts: [
            {
                x: 240,
                y: 130,
                baseLine: 'middle',
                text: '大龙猫',
                fontSize: 32,
                color: '#fff',
                zIndex:99,
            },
        ],
        images: [
            {
                width: 128,
                height: 128,
                x: 62,
                y: 66,
                borderRadius:125,
                zIndex:99,
                url: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJDdmHm6txEVtsLsBzEcOJ9K60degicV6XTg4WhKZX6lNxa8x3UQQ4htIGqsInT3pibXEzkO1JktibWg/132',
            },
            {
                width: 750,
                height: 1334,
                x: 0,
                y: 0,
                url: 'https://zhanzhile.ukidgo.cn/static/images/common/poster/7-1.jpg',
            },
            //https://zhanzhile.ukidgo.cn/static/images/common/poster/7-1.jpg
        ]

    },
    demoConfig: {
        width: 750,
        height: 1000,
        backgroundColor: '#fff',
        debug: false,
        blocks: [
            {
                x: 0,
                y: 10,
                width: 750, // 如果内部有文字，由文字宽度和内边距决定
                height: 120,
                paddingLeft: 0,
                paddingRight: 0,
                borderWidth: 10,
                borderColor: 'red',
                backgroundColor: 'blue',
                borderRadius: 40,
                text: {
                    text: [
                       
                     
                    ],
                    baseLine: 'middle',
                },
            }
        ],
        lines: [
            {
                startY: 800,
                startX: 10,
                endX: 300,
                endY: 800,
                width: 5,
                color: 'red',
            }
        ]

    }
}
Page({
    data: {
        posterConfig: posterConfig.jdConfig,
    },
    onPosterSuccess(e) {
      let that = this;
        const { detail } = e;
        wx.previewImage({
            current: detail,
            urls: [detail]
        })
        console.log('====================================');
        console.log(e);
        console.log('====================================');
        // 保存图片
        wx.saveImageToPhotosAlbum({
          filePath: e.detail,
          success(result) {
            console.log(result)
            wx.showModal({
              content: '图片已保存到相册，赶紧晒一下吧~',
              showCancel: false,
              confirmText: '好的',
              confirmColor: '#333',
              success: function(result) {
                console.log(posterConfig.jdConfig);
                that.setData({
                  posterConfig:posterConfig.jdConfig.debug=true
                })
                  if (result.confirm) {}
              },
              fail: function(result) {
                  console.log(result)
              }
            })
          },
          fail: function(res) {
            wx.showToast({
                title: res.errMsg,
                icon: 'none',
                duration: 2000
            })
          }
        })
       
    },
   
    
    onPosterFail(err) {
        console.error(err);
    },

    /**
     * 异步生成海报
     */
    onCreatePoster() {
    	this.setData({ posterConfig: posterConfig.demoConfig }, () => {
        	Poster.create(true);    // 入参：true为抹掉重新生成
    	});
    },

    onCreateOtherPoster() {
    	this.setData({ posterConfig: posterConfig.jdConfig }, () => {
        	Poster.create(true);    // 入参：true为抹掉重新生成 
    	});
    },
  
    onShow(e){
   /*    let that = this
      setTimeout(() => {
        that.selectComponent("#poster").saveShareImg()
    }, 2000) */
    },
})
