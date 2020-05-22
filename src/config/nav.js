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
import icon from '../assets/icon.png'

const menus = {
  titleIcon: icon,
  titleText: '2333',
  activeItem: 'Main',
  textColor: 'white',
  activeColor: 'teal',
  leftMenu: [{
    key: 'Main',
    title: '主页',
    href: '/test/1'
  },{
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
  },{
    key: 'GitHub',
    title: 'GitHub',
    href: 'www.github.com',
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

export default menus