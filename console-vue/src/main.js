import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import './global.less'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

// 全局错误处理器，忽略 ResizeObserver 错误
window.addEventListener('error', (e) => {
    if (e.message && e.message.includes('ResizeObserver loop')) {
        e.stopImmediatePropagation()
        e.preventDefault()
        return false
    }
})

// 处理未捕获的 Promise 错误
window.addEventListener('unhandledrejection', (e) => {
    if (e.reason && e.reason.message && e.reason.message.includes('ResizeObserver loop')) {
        e.preventDefault()
        return false
    }
})

const app = createApp(App)

// Vue 应用级错误处理
app.config.errorHandler = (err, vm, info) => {
    if (err.message && err.message.includes('ResizeObserver loop')) {
        return false
    }
    console.error('Vue Error:', err, info)
}

app.use(router).use(Antd).mount('#app')
