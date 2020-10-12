// component/testbank/testbank.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 50,
    gradientColor: {
      '0%': '#7ed6df',
      '100%': '#1989fa',
    },
    smallModeSelection:[
      {
        id:"001",
        className:'vip',
        iconName:'bianzu',
        textName:'VIP',
        url:''
      },
      {
        id:"002",
        className:'cuoti',
        iconName:'cuoti',
        textName:'错题收藏',
        url:''
      },
      {
        id:"003",
        className:'zhuanxiang',
        iconName:'zhuanxianglianxi',
        textName:'专项练习',
        url:''
      },
      {
        id:"004",
        className:'suiji',
        iconName:'icon_suijitiqu',
        textName:'随机练习',
        url:''
      },
      {
        id:"005",
        className:'jiqiao',
        iconName:'wanfajiqiao',
        textName:'图标技巧',
        url:''
      },
      {
        id:"006",
        className:'kaoqian',
        iconName:'kaoshi1',
        textName:'考前500题',
        url:''
      },
      {
        id:"007",
        className:'yati',
        iconName:'kaoshi',
        textName:'考前押题',
        url:''
      },
      {
        id:"008",
        className:'paihang',
        iconName:'paihang',
        textName:'成绩排行',
        url:''
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
