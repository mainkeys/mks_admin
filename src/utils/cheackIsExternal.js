/*
 * @Author: mainkeys
 * @Date: 2024-03-03 15:26:05
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-03 15:28:51
 * @FilePath: \mks_admin\src\utils\cheackIsExternal.js
 * @Description: 判断是否为外部资源
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
