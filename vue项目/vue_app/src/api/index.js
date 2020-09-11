//! 提前完成数据请求
import request from 'Utils/request'
import { loginURL, cateURL } from './url'
export function loginReq (data) {
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
export function cateReq () {
  return request({
    url: cateURL,
    data: {
      r: 'class/category',
      type: 1
    }
  })
}
// 列表请求
export function listReq (data) {
  return request({
    url: cateURL,
    data
  })
}
