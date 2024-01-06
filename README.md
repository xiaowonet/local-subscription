# local-subscription
gkd本地订阅规则  
1、本仓库中的规则，仅仅作为[gkd默认订阅规则](https://github.com/gkd-kit/subscription)的补充，而不是替代；  
2、感谢[gkd项目](https://github.com/gkd-kit/gkd)，及其[开发者](https://github.com/gkd-kit/gkd/graphs/contributors)。

[./globalGroups.json5](./globalGroups.json5)  --  全局规则黑名单版，仅名单中的APP生效  
使用方法：  
1、在手机里复制文件中的所有内容；  
2、打开gkd APP - 本地订阅 - 全局规则 - 添加全局规则组 - 粘贴（注意粘贴格式），待添加按钮变成可点击状态后，点击添加；  
3、回到APP中的订阅页 - 默认订阅 - 全局规则 - 禁用。

[./globalGroups-mini.json5](./globalGroups-mini.json5)  --  全局规则黑名单版-mini，仅能跳过简体中文类APP中的开屏广告，无法跳过繁体中文、英文类APP中的开屏广告  
