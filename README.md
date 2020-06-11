# my-picture-online
🎉Power Design By 打酱油🎉

**最新更新**
🎉图片现已支持 -多分辨率- 下载（Safari暂不支持）

🎉适配PC、Pad、Phone多种分辨率设备，持续更新中！

## 项目简介
> 该项目是基于`React Hook` + `semantic ui react`实现，提供在线壁纸浏览、下载的前端项目。

![](https://user-gold-cdn.xitu.io/2020/6/10/1729e518e15fdb0a?w=1130&h=715&f=gif&s=5203096)

# 使用
- [点击在线预览](http://120.26.51.81:8000)
- 扫码体验

![http://120.26.51.81:8000](https://user-gold-cdn.xitu.io/2020/6/1/1727015f7cae9234?w=260&h=260&f=png&s=6218)

- 本地运行
```
- git clone
- yarn
- yarn start
```

- 部署服务器

完成`nginx`配置后，结合 [从零开始 Node实现前端自动化部署](https://juejin.im/post/5e210de76fb9a02fb75d6252)
体验更佳。

## 配置说明
### 头部导航栏配置

`src/config/nav.js`
```js
/*
  Tip:
    导航栏会根据URL自动确定当前页面对应激活菜单项。
    配置默认根路由跳转的URL，即可设置默认激活子菜单。
    例如：
      '/' => '/wallpaper' 根路由跳转
      {
        key: 'Main',
        title: '主页',
        href: '/wallpaper'
      }
      会自动激活 主页 菜单项
      
  导航栏配置说明：
    titleIcon 标题图片
    titleText 标题文字
    textColor 菜单项默认文字颜色（不含标题文字）
    activeColor 菜单项默认激活颜色（现支持：red orange yellow olive green teal blue violet purple pink brown grey black）
    leftMenu 左侧菜单组
    rightMenu 右侧菜单组
    （菜单顺序与菜单项配置先后顺序一致）
    
    普通子菜单项：
      {
        key: 'Main',
        title: '主页',
        href: '/wallpaper/1'
      }
    外部链接跳转：
      {
        key: 'GitHub',
        title: 'GitHub',
        href: 'https://github.com/aotianwinter/my-picture-online',
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

### 页脚配置

`src/config/footer.js`
```js
/*
  页脚配置说明：
    ---------------------------------------------------------------------------
    -    leftRow                    centerRow                rightRow         -
    -    # # # # #                  title                    title            -
    -    # ICON  #                  link                     link             -
    -    #       #                  link                     link             -
    -    # # # # #                  link                     link             -
    -    desc                                                                 -
    -                                                                         -
    -    ----------------------------------------------------------------     -                                                                -
    -                              author                                     -
    -                             copyright                                   -
    ---------------------------------------------------------------------------
*/
import avatar from '../assets/author.jpg'
import qrCode from '../assets/qrCode.png'

const configs = {
  leftRow: {
    icon: qrCode,
    desc: '扫码体验'
  },
  centerRow: {
    title: '文档链接',
    links: [
      {
        name: 'React官方文档',
        href: 'https://react.docschina.org/'
      },
      {
        name: 'Semantic UI',
        href: 'https://react.semantic-ui.com/'
      },
      {
        name: 'NPM',
        href: 'https://www.npmjs.com/'
      }
    ]
  },
  rightRow: {
    title: '相关链接',
    links: [
      {
        name: 'GitHub',
        href: 'https://github.com/aotianwinter/my-picture-online'
      },
      {
        name: '掘金',
        href: 'https://juejin.im/user/5d9c26b2f265da5b616dd1c8'
      },
      {
        name: '简书',
        href: 'https://www.jianshu.com/u/393293c79416'
      }
    ]
  },
  author: {
    name: '打酱油',
    avatar: avatar
  },
  copyright: 'copyright©2020'
}

export default configs
```

### 下载选项配置
参考以下配置即可。

**Tip：**
当图片最大分辨率未达到设定下载分辨率时，仅提供最大分辨率图片下载。

`src/config/download_options.js`

```js
const downloadOptions = [
  // {
  //   desc: '4096 x 2160',
  //   filterParam: '/bdm/4096_2160_85/'
  // },
  // {
  //   desc: '2560 x 1440',
  //   filterParam: '/bdm/2560_1440_85/'
  // },
  {
    desc: '1920 x 1080',
    filterParam: '/bdm/1920_1080_85/'
  },
  {
    desc: '1366 x 768',
    filterParam: '/bdm/1366_768_85/'
  }
]

export default downloadOptions
```