Component({
  options: {
    mutations: true
  },
  properties: {
    //左边角度变化 
    deg2: {
      type: Number,
      value: 0
    },
    //右边角度变化 
    deg: {
      type: Number,
      value: 0
    },
    adminValue: {
      type: Number,
      value: 70
    },
    outer: {
      type: String,
      value: '#F8E5DF'
    },
    inside: {
      type: String,
      value: '#ED987D'
    }
  },
  data: {
    deg: 0,
    deg2: 0,
    adminValue: 70, //需要更改的值  其他不用进行修改
    outer: '#F8E5DF',
    inside: '#ED987D'
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {}, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () {
    if (parseInt(this.data.adminValue) <= 50) {
      this.data.deg = parseInt(this.data.adminValue) * 3.6;
    } else if (parseInt(this.data.adminValue) > 33) {
      this.data.deg = 50 * 3.6;
      this.data.deg2 = (parseInt(this.data.adminValue) - 50) * 3.6;
    }
    this.setData({
      deg: this.data.deg,
      deg2: this.data.deg2,
      outer: this.data.outer,
      inside: this.data.inside
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */ // 180deg = 90deg 360 = 180deg   180  = 50 * 3.6
  onShow: function () {

  },
  methods: {

  }
})