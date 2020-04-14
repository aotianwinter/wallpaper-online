// import icon from '../../assets/icon.png'

const menus = {
  // titleIcon: icon,
  titleText: '2333',
  activeItem: 'Main',
  textColor: 'white',
  activeColor: 'red',
  leftMenu: [{
    key: 'Main',
    title: '主页',
    subitems: [
      {
        key: '111',
        title: '111',
        href: '/test/1'
      }
    ]
  },{
    key: 'Other',
    title: '其他',
    href: '/about'
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