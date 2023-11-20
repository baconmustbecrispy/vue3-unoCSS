import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import './assets/main.css'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

/* +Vant+ */
import { DatePicker, Locale } from 'vant'
import 'vant/lib/index.css'
import zhTW from 'vant/es/locale/lang/zh-TW'
Locale.use('zh-TW', zhTW)
import '@vant/touch-emulator'
/* -Vant- */

import 'virtual:uno.css'

const app = createApp(App)
app.use(DatePicker)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
