/*
 * @Author: mainkeys
 * @Date: 2024-03-03 19:15:09
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-03 21:51:04
 * @FilePath: \mks_admin\src\api\sys.js
 * @Description: sysAPI
 */
import request from '@/utils/request'

/**
 * 登录
 */
export const login = data => {
  console.log(data)
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}
