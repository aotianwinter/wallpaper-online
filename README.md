# my-picture-online
🎉Power Design By 打酱油🎉

**待实现：**
🎉safari暂不支持下载(调用百度下载链接可以实现)
🎉优化预览
🎉追加内容时逐步追加（pre 300ms）

## 项目简介
> 该项目是基于`React Hook` + `semantic ui react`实现，提供在线壁纸服务的前端浏览服务。

**在线地址：** [点击预览](192.168.0.223)

## 配置说明
- 头部导航栏配置：

`src/config/nav,js`
```js
/*
  导航栏配置说明：
    titleIcon 标题图片
    titleText 标题文字
    activeItem 默认激活菜单项（值应对应菜单项key值）
    textColor 菜单项默认文字颜色（不含标题文字）
    activeColor 菜单项默认激活颜色（现支持：red orange yellow olive green teal blue violet purple pink brown grey black）
    leftMenu 左侧菜单组
    rightMenu 右侧菜单组
    
    普通子菜单项：
      {
        key: 'Main',
        title: '主页',
        href: '/test/1'
      }
    外部链接跳转：
      {
        key: 'GitHub',
        title: 'GitHub',
        href: 'www.github.com',
        externalLink: true // 设置为true表示为外部链接，否则为站内地址
      }
    多级子菜单（subitems中追加即可）：
      {
        key: 'Main2',
        title: '分类',
        subitems: [
          {
            key: 'AA',
            title: 'AA',
            href: '/AA'
          },
          {
            key: 'BB',
            title: 'BB',
            href: '/BB'
          }
        ]
      }
*/
```