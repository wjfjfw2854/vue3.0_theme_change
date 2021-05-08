import { createWebHistory, createRouter } from 'vue-router'
import page1 from '@/page/page1.vue'
// import page1 from '@/static/index.html'

const history = createWebHistory()
const router = createRouter({
    history, // 路由模式
    routes: [
      {
        // 页面逻辑
        path: '/xx',
        name: 'page1的名称',
        // component: () => import('@/page/page1')
        component: page1
      }
    ]
  })
  export default router