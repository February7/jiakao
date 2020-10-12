// pages/choose.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    city:"请选择",
    show: false,
    sexRadio:"",
    statusRadio:"",
    isActive:0,
    carTypeText:'小车',
    certificateType:'drive'||'qualifications',
    toastText:'',
    carType:[
      {
        id:"001",
        iconName:"xiaoche-sijiache",
        name:"小车",
        model:"C1/C2/C3"
      },
      {
        id:"002",
        iconName:"xiaohuoche",
        name:"货车",
        model:"A2/B2"
      },
      {
        id:"003",
        iconName:"keche",
        name:"客车",
        model:"A1/A3/B1"
      },
      {
        id:"004",
        iconName:"motuoche",
        name:"摩托车",
        model:"D/E/F"
      }
    ],
    qualificationsType:[
      {
        id:"005",
        iconName:"gonglukeyun",
        name:"客运"
      },
      {
        id:"006",
        iconName:"zonghuoyunnengli",
        name:"货运"
      },
      {
        id:"007",
        iconName:"weixian",
        name:"危险品"
      },
      {
        id:"008",
        iconName:"jiaolianduan",
        name:"教练员"
      },
      {
        id:"009",
        iconName:"chuzuche",
        name:"出租车"
      },
      {
        id:"010",
        iconName:"yuyue",
        name:"网约车"
      }
    ]
  },
  
  onClose() {
    this.setData({ show: false });
  },
  openMark(){
    this.setData({ show: true });
  },
  obtainCity(e){
    let {name} = e.detail;
    this.setData({
      city:name,
      show:false
    })
  },
  onChangeSex(event) {
    this.setData({
      sexRadio: event.detail
    });
  },
  onChangeStatus(event) {
    this.setData({
      statusRadio: event.detail
    });
  },
  addClass(event){
    let {name} = event.currentTarget.dataset.item
    let {index} = event.currentTarget.dataset
    let {certificatetype} = event.currentTarget.dataset
    this.setData({
      isActive:index,
      carTypeText:name,
      certificateType:certificatetype
    });
  },
  jumpIndex(){
    if (this.data.city!=='请选择') {
      if (this.data.sexRadio!=='') {
        if (this.data.statusRadio!=='') {
          wx.switchTab({
            url: '/pages/index/index',
          })
        }else{
          this.setData({toastText:'请选择报名状态'})
        }
      }else{
        this.setData({toastText:'请选择性别'})
      }
    }else{
      this.setData({toastText:'请选择城市'})
    }
    if (this.data.toastText!=='') {
      wx.showToast({
        title: this.data.toastText,
        icon: 'none'
      })
      this.setData({
        toastText:''
      })
    }
  },









  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})