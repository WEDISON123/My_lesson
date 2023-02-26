import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// js 使用import 引入了css vite 的功劳
// 更好统一管理
import 'element-plus/dist/index.css'
// 全局引入
// 性能问题
import {
    // 按需加载
    ElCard, // 卡片组件
    ElButton // 组件类
} from 'element-plus'

const app = createApp(App)
// ElButton 全局引入？
app
    .use(ElButton) // 组件变成全局组件
    .use(ElCard)
app.mount('#app')
