import axios from './axios'

const WINTER = '/winter'

// 请求方式
const GET = 'get'
// const POST = 'post'

const PICTURE = '/picture'
export const getInfinityList = (data) => axios(GET, WINTER + PICTURE + '/getInfinity', data) // Infinity
export const getCategories = (data) => axios(GET, WINTER + PICTURE + '/getCategories', data)
export const getPictureList = (data) => axios(GET, WINTER + PICTURE + '/getPictures', data)
