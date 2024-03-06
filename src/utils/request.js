/*
 * @Author: mainkeys
 * @Date: 2024-03-03 19:11:58
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-06 21:26:06
 * @FilePath: \mks_admin\src\utils\request.js
 * @Description: axios封装
 */
import axios from 'axios'
import store from '@/store'
import { ElMessage as message } from 'element-plus'
// import { isCheckTimeout } from '@/utils/auth'
// import md5 from 'md5'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// export default service

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.icode = 'helloqianduanxunlianying'
    // 在这个位置需要统一的去注入token
    if (store.getters.token) {
      // if (isCheckTimeout()) {
      //   // 登出操作
      //   store.dispatch('user/logout')
      //   return Promise.reject(new Error('token 失效'))
      // }
      // 如果token存在 注入token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // 配置接口国际化
    // config.headers['Accept-Language'] = store.getters.language
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    //   要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      // 业务错误
      message.error(message) // 提示错误消息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理 token 超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token超时
      store.dispatch('user/logout')
    }
    message.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)
