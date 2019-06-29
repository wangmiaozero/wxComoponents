var pageObj = {
    /**
     * 页面的初始数据
     */
    data: {
        items: [{
                id: 'popup',
                title: '0,自定义组件学习',
                navigateUrl: '/pages/study-components/study-components'
            },
            {
                id: 'date',
                title: '1，自定义日期控件',
                navigateUrl: '/pages/date/date'
            },
            {
                id: 'city',
                title: '2，自定义城市控件',
                navigateUrl: '/pages/city/city'
            },
            {
                id: 'floatTab',
                title: '3，悬浮控件',
                navigateUrl: '/pages/float_tab/float_tab'
            },
            {
                id: 'horizontal-scroll-tab',
                title: '4，横向滑动tab',
                navigateUrl: '/pages/horizontal-scroll_tab/horizontal-scroll_tab'
            },
            {
                id: 'line-chart',
                title: '5，折线区域图',
                navigateUrl: '/pages/line-chart/line-chart'
            },
            {
                id: 'column-chart',
                title: '6，柱状图',
                navigateUrl: '/pages/column-chart/column-chart'
            },
            {
                id: 'double-line-chart',
                title: '7，双折线区域图',
                navigateUrl: '/pages/double-line-chart/double-line-chart'
            },
            {
                id: 'line-column-chart',
                title: '8，折线柱状双图',
                navigateUrl: '/pages/line-column-chart/line-column-chart'
            },
            {
                id: 'double-column-chart',
                title: '9，双柱状双图',
                navigateUrl: '/pages/double-column-chart/double-column-chart'
            }, {
                id: 'calibration-instrument',
                title: '10，刻度盘',
                navigateUrl: '/pages/calibration-instrument/calibration-instrument'
            }, {
                id: 'progress-bar',
                title: '11，进度条',
                navigateUrl: '/pages/progress-bar/progress-bar'
            }, {
                id: 'cycle-select',
                title: '12，日，周，月，季度，自定义周期选择器',
                navigateUrl: '/pages/call-statistics/call-statistics'
            }, {
                id: 'cycle-select',
                title: '13，通用list分页加载，加载更多组件和音频播放结合使用demo',
                navigateUrl: '/pages/call-statistics-detail/call-statistics-detail?startDate=2018-11-11&endDate=2018-11-11',
            }, {
                id: 'comon-search',
                title: '14，通用搜索',
                navigateUrl: '/pages/comon-search/comon-search?startDate=2018-11-11&endDate=2018-11-11',
            }, {
                id: 'comon-search-history',
                title: '15，通用搜索和历史搜索',
                navigateUrl: '/pages/comon-search-history/comon-search-history?startDate=2018-11-11&endDate=2018-11-11',
            },
            {
                id: 'comon-search-circle',
                title: '16，微信小程序实现了圆形进度条',
                navigateUrl: '/pages/circle/circle',
            },
            {
                id: 'comon-search-canvasDemo',
                title: '17，微信小程序实现了圆形进度条',
                navigateUrl: '/pages/canvasDemo/canvasDemo',
            },
            {
                id: 'meituan',
                title: '18，美团进度',
                navigateUrl: '/pages/meituan/meituan',
            },
            {
                id: 'linghuojindutiao',
                title: '19，灵活的进度条',
                navigateUrl: '/pages/linghuojindutiao/linghuojindutiao',
            },
            {
                id: 'yuanjindu',
                title: '20，圆进度条css实现',
                navigateUrl: '/pages/yuanjindu/yuanjindu',
            },
            {
                id: 'yuanjindu1',
                title: '21，圆进度条css实现三色',
                navigateUrl: '/pages/yuanjindu1/yuanjindu1',
            },
            {
                id: 'delete',
                title: '22，滑动删除',
                navigateUrl: '/pages/delete/delete',
            },
            {
                id: 'main',
                title: '23.滑动柱状图',
                navigateUrl: '/pages/mian/mian'
            },
            {
                id: 'huadonglizhuti',
                title: '24.滑动柱状图',
                navigateUrl: '/pages/huadonglizhuti/huadonglizhutu'
            },
            {
                id: 'slideCharts',
                title: '25.滑动柱状图',
                navigateUrl: '/pages/slideCharts/slideCharts'
            },
            {
                id: 'jiazaisaomiao',
                title: '26.扫描',
                navigateUrl: '/pages/jiazaisaomiao/jiazaisaomiao'
            },
            {
                id: 'share',
                title: '27.分享',
                navigateUrl: '/pages/share/share'
            },
            {
                id: 'share1',
                title: '28.分享海报',
                navigateUrl: '/pages/share1/share'
            },
            {
                id: 'share1',
                title: '29.分享海报',
                navigateUrl: '/pages/fenxianghaibao/fenxianghaibao'
            },
            {
                id: 'haibao',
                title: '30.分享海报',
                navigateUrl: '/pages/haibao/haibao'
            },

            {
                id: 'posters1',
                title: '31.分享海报',
                navigateUrl: '/pages/posters/posters1/posters1'
            },
            {
                id: 'posters1',
                title: '32.分享海报',
                navigateUrl: '/pages/posters/posters2/posters2'
            },
            {
                id: 'haibao',
                title: '33.分享海报',
                navigateUrl: '/pages/haibao1/haibao1'
            },
            {
              id: 'haibao',
              title: '34.分享海报',
              navigateUrl: '/pages/haibao2/haibao2'
          },
          {
            id: 'haibao',
            title: '35.分享海报',
            navigateUrl: '/pages/haibao3/haibao3'
        },
        {
          id: 'haibao',
          title: '36.分享海报',
          navigateUrl: '/pages/haibao4/haibao3'
      },

        ],

    },

    /**
     * 生命周期函数--监听页面加载   
     *  
     */
    onLoad(options) {},

}

Page(pageObj);