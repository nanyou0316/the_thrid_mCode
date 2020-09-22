//! 提前完成数据请求
import request from 'Utils/request'
import { getCookie } from 'Utils/cookie'
import {
  loginURL,
  cateURL,
  addCarURL,
  getCarURL,
  delCarURL,
  picURL,
  registerURL,
  hotURL,
  initMovieURL,
  moreMovieURL
} from './url'
const token = getCookie('token')
// request封装好了，默认是json格式提交
export function loginReq(data) {
  return request({
    url: loginURL,
    data,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
// 分类请求
export function cateReq() {
  return request({
    url: cateURL,
    data: {
      r: 'class/category',
      type: 1
    }
  })
}
// 列表请求
export function listReq(data) {
  return request({
    url: cateURL,
    data
  })
}
// 详情页请求
export function detailReq(data) {
  return request({
    url: cateURL,
    data
  })
}
// 添加购物车
export function addCarReq(data) {
  return request({
    url: addCarURL,
    data,
    method: 'POST'
  })
}
// 获取购物车数据
export function getCarReq() {
  return request({
    url: getCarURL,
    data: {
      token
    }
  })
}
// 购物车里面删除某件商品
export function delCarReq(shopId) {
  return request({
    url: delCarURL,
    method: 'POST',
    data: {
      token,
      shopId
    }
  })
}
// 头像图片上传
export function picReq(file) {
  return request({
    url: picURL,
    method: 'POST',
    data: {
      file
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
// 注册
export function registerReq(data) {
  return request({
    url: registerURL,
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
// 热门商品
export function hotReq(cid) {
  return request({
    url: hotURL,
    data: { cid }
  })
}
// 猫眼电影的初始化数据

export function initMovieReq() {
  return request({
    url: initMovieURL,
    data: {
      token: '',
      optimus_uuid:
        'F2C8CA50060111E9BE3B2FA6BBC8F42F783446B54C974221B87A48F0BB404BD5',
      optimus_risk_level: 71,
      optimus_code: 10
    }
  })
}
export function moreMovieReq(movieIds) {
  return request({
    url: moreMovieURL,
    data: {
      token: '',
      movieIds,
      optimus_uuid:
        'D760AAF0F75C11EAB36EA1F9BFAA83245230B93218AB47C987E474BC565D536C',
      optimus_risk_level: 71,
      optimus_code: 10
    }
  })
}
