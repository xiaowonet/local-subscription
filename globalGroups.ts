{
  name: '开屏广告',
  key: 0,
  matchTime: 10000,
  actionMaximum: 1,
  resetMatch: 'app',
  actionCdKey: 0,
  actionMaximumKey: 0,
  apps: [
    {
      id: 'com.baidu.BaiduMap', //百度地图
    },
    {
      id: 'com.eastmoney.android.berlin', //东方财富
    },
    {
      id: 'com.alibaba.android.rimet', //钉钉
    },
    {
      id: 'com.ss.android.ugc.aweme', //抖音
    },
    {
      id: 'com.tmri.app.main', //交管12123
    },
    {
      id: 'com.jd.jrapp', //京东金融
    },
    {
      id: 'cc.kinva.smartqa', //挑战答题助手
    },
    {
      id: 'com.jingdong.app.mall', //京东
    },
    {
      id: 'com.jingdong.pdj', //京东到家
    },
    {
      id: 'cmb.pb', //招商银行
    },
    {
      id: 'cmccwm.mobilemusic', //咪咕音乐
    },
    {
      id: 'com.jd.pingou', //京喜
    },
    {
      id: 'cn.beekee.zhongtong', //中通快递
    },
    {
      id: 'com.jd.jdlite', //京喜特价
    },
    {
      id: 'cn.cntvnews', //央视新闻
    },
    {
      id: 'cn.com.cmbc.newmbank', //民生银行
    },
    {
      id: 'cn.com.gzbank.mbank', //广银信用卡
    },
    {
      id: 'cn.com.hkgt.gasapp', //易捷加油
    },
    {
      id: 'cn.com.shbank.mper', //上海银行
    },
    {
      id: 'com.alibaba.wireless', //阿里巴巴
    },
    {
      id: 'com.vivo.browser', //vivo 浏览器
    },
    {
      id: 'com.vivo.space', //vivo 官网
    },
    {
      id: 'com.vivo.wallet', //vivo 钱包
    },
    {
      id: 'com.sankuai.meituan', //美团
    },
    {
      id: 'com.xunmeng.pinduoduo', //拼多多
    },
    {
      id: 'com.smzdm.client.android', //什么值得买
    },
    {
      id: 'com.tmall.wireless', //手机天猫
    },
    {
      id: 'com.wenhua.bamboo', //随身行
    },
    {
      id: 'com.taobao.idlefish', //闲鱼
    },
    {
      id: 'com.qq.ac.android', //腾讯动漫
    },
    {
      id: 'com.wacai365', //挖财记账
    },
    {
      id: 'com.bbk.appstore', //vivo 应用商店
    },
    {
      id: 'com.oray.sunlogin', //向日葵远程控制
    },
    {
      id: 'com.xiaomi.mico', //小爱音箱
    },
    {
      id: 'com.xingin.xhs', //小红书
    },
    {
      id: 'com.fenbi.android.leo', //小猿口算
    },
    {
      id: 'com.chinatelecom.bestpayclient', //翼支付
    },
    {
      id: 'com.yek.android.uniqlo', //优衣库
    },
    {
      id: 'com.unionpay', //云闪付
    },
    {
      id: 'com.ct.client', //中国电信
    },
    {
      id: 'com.icbc', //中国工商银行
    }
  ],
  matchAnyApp: false,
  rules: [
    {
      quickFind: true,
      key: 0,
      matches: [
        '[text*="跳过"][text.length<10][visibleToUser=true]'
      ]
    },
    {
      key: -1,
      matches: [
        '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down") || desc*="跳过" || desc*="skip"]'
      ]
    }
  ]
}
