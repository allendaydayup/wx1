//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        logo: '/images/index_normal.png',
        title: '标题',
        desc: '内容',
      },
      {
        logo: '/images/index_normal.png',
        title: '标题',
        desc: '内容',
      },
      {
        logo: '/images/index_normal.png',
        title: '标题',
        desc: '内容',
      },
      {
        logo: '/images/index_normal.png',
        title: '标题',
        desc: '内容',
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      test: '01',
    })
  },
  toDetail: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  }
})
