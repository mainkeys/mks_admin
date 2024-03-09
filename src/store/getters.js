/*
 * @Author: mainkeys
 * @Date: 2024-03-08 22:47:23
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-08 23:11:14
 * @FilePath: \mks_admin\src\store\getters.js
 * @Description: getters
 */

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
