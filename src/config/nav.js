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
import icon from '../assets/icon.png'

const configs = {
  titleIcon: icon,
  titleText: 'picture-online',
  textColor: 'white',
  activeColor: 'teal',
  leftMenu: [{
    key: 'Main',
    title: '主页',
    href: '/wallpaper/5'
  },{
    key: 'Main2',
    title: '分类',
    subitems: [
      {
        key: '403',
        title: '403',
        href: '/403'
      },
      {
        key: '404',
        title: '404',
        href: '/404'
      },
      {
        key: '500',
        title: '500',
        href: '/500'
      }
    ]
  },{
    key: 'GitHub',
    title: 'GitHub',
    href: 'https://github.com/aotianwinter/my-picture-online',
    externalLink: true
  }],
  rightMenu: [{
    key: 'Donate',
    title: '升级中',
    href: '/404'
  }, {
    key: 'About',
    title: '关于',
    href: '/about'
  }]
}

export default configs