import axios from './axios'

const WINTER = '/winter'

// 请求方式
const GET = 'get'
// const POST = 'post'

const PICTURE = '/picture'
export const getCategories = (data) => axios(GET, 'https://bird.ioliu.cn/v1?url=http://cdn.apc.360.cn/index.php?c=WallPaper&a=getAllCategories', data)
export const getPictureList = (data) => axios(GET, 'https://bird.ioliu.cn/v1?url=http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory', data)
