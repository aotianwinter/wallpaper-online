/*
  页脚配置说明：
    ---------------------------------------------------------------------------
    -    leftRow                    centerRow                rightRow         -
    -    # # # # #                  title                    title            -
    -    #  ICON #                  link                     link             -
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
    desc: 'Preview'
  },
  centerRow: {
    title: '文档链接',
    links: [
      {
        name: 'React官方文档',
        href: ''
      },
      {
        name: 'Semantic UI',
        href: ''
      },
      {
        name: 'Node',
        href: ''
      }
    ]
  },
  rightRow: {
    title: '相关链接',
    links: [
      {
        name: 'GitHub',
        href: ''
      },
      {
        name: '掘金',
        href: ''
      },
      {
        name: '简书',
        href: ''
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
