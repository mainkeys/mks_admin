import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'

// 导入全局样式
import './styles/index.scss'

const app = createApp(App)
installElementPlus(app)

app
  .use(router)
  .mount('#app')
