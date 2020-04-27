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
        title: 'test111',
        href: '/test/1'
      },
      {
        key: '222',
        title: 'test222',
        href: '/test/2'
      }
    ]
  },{
    key: 'Main2',
    title: '主页2',
    subitems: [
      {
        key: '1112',
        title: '2test111',
        href: '/test/1'
      },
      {
        key: '2222',
        title: '2test222',
        href: '/test/2'
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