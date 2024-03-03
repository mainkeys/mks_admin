/*
 * @Author: mainkeys
 * @Date: 2024-02-27 23:45:56
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-03-03 16:23:02
 * @FilePath: \mks_admin\src\main.js
 * @Description: 项目入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
// 导入 svgIcon
import installIcons from '@/icons'

// 导入全局样式
import './styles/index.scss'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

app.use(router)
app.mount('#app')
