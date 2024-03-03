/*
 * @Author: mainkeys
 * @Date: 2024-03-03 19:18:26
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-03 20:44:34
 * @FilePath: \mks_admin\src\store\index.js
 * @Description: vuex
  */
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'
// import app from './modules/app'
// import theme from './modules/theme'
// import permission from './modules/permission'

export default createStore({
  getters,
  modules: {
    user
    // app,
    // theme,
    // permission
  }
})
