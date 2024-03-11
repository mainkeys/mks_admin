/*
 * @Author: mainkeys
 * @Date: 2024-03-03 19:18:20
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-06 21:42:41
 * @FilePath: \mks_admin\src\store\modules\user.js
 * @Description: vuex-user
 */
import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { setTimeStamp } from '@/utils/timeout'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login (context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            this.commit('user/setToken', data.token)
            // 保存登录时间
            setTimeStamp()
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    async getUserInfo (context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    logout () {
      // resetRouter()
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      // this.commit('app/initTagsViewList')
      removeAllItem()
      router.push('/login')
    }
  }
}
