/*
 * @Author: mainkeys
 * @Date: 2024-03-09 17:19:58
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-09 17:20:26
 * @FilePath: \mks_admin\src\utils\timeout.js
 * @Description: 判断登录超时
 */
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'
/**
 * 获取时间戳
 */
export function getTimeStamp () {
  return getItem(TIME_STAMP)
}
/**
 * 设置时间戳
 */
export function setTimeStamp () {
  setItem(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout () {
  // 当前时间戳
  var currentTime = Date.now()
  // 缓存时间戳
  var timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
