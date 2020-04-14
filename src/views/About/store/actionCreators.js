import { ADD_NUM, ADD_NUM2 } from './actionTypes'

export const addNum = () => ({
  type: ADD_NUM,
  data: 1
})

export const addNum2 = (num) => ({
  type: ADD_NUM2,
  data: num
})