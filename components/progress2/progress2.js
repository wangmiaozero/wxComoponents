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
    containerText: {
      type: String,
      value: '风险值'
    },
    outer0: {
      type: String,
      value: '#E0F5EE'
    },
    inside0: {
      type: String,
      value: '#4FE1B6'
    },
    outer1: {
      type: String,
      value: '#F9EFC1'
    },
    inside1: {
      type: String,
      value: '#F7CF1C'
    },
    outer2: {
      type: String,
      value: '#FAD3C6'
    },
    inside2: {
      type: String,
      value: '#EB7B57'
    }
  },
  data: {
    deg: 0,
    deg2: 0,
    adminValue: 59, //需要更改的值  其他不用进行修改
    containerText: '',
    inside: '',
    outer: '',
    inside0: '#4FE1B6',
    outer0: '#E0F5EE',
    inside1: '#F7CF1C',
    outer1: '#F9EFC1',
    inside2: '#EB7B57',
    outer2: '#FAD3C6'

  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {}, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () {
    if (parseInt(this.data.adminValue) <= 30) {
      this.data.inside = this.data.inside0;
      this.data.outer = this.data.outer0;
      this.data.deg = parseInt(this.data.adminValue) * 3.6;
    } else if (parseInt(this.data.adminValue) >= 30 && parseInt(this.data.adminValue) <= 60) {
      this.data.deg = parseInt(this.data.adminValue) > 50 ? 50 * 3.6 : parseInt(this.data.adminValue) * 3.6;
      if (parseInt(this.data.adminValue) > 50) {
        this.data.deg2 = parseInt(this.data.adminValue - 50) * 3.6
      } else {
        this.data.deg2 = 0 * 3.6;
      }
      this.data.inside = this.data.inside1;
      this.data.outer = this.data.outer1;
    } else if (parseInt(this.data.adminValue) >= 60 && parseInt(this.data.adminValue) <= 100) {
      this.data.inside = this.data.inside2;
      this.data.outer = this.data.outer2;
      this.data.deg = 50 * 3.6;
      this.data.deg2 = (parseInt(this.data.adminValue) - 50) * 3.6;
    }
    this.setData({
      adminValue: this.data.adminValue,
      deg: this.data.deg,
      deg2: this.data.deg2,
      inside: this.data.inside,
      outer: this.data.outer,
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