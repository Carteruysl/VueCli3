import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router:any= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue')
    },
    {
      path: '/password',
      name: 'password',
      component: () => import('@/views/Login/Password.vue')
    }
  ]
})

router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = localStorage.tsToken ? true : false;
  if (to.path == '/login' || to.path == '/password') {
    next();
  } else {
    isLogin ? next() : next('/login');
    /* if (isLogin) {
      const decoded: any = jwt_decode(localStorage.tsToken);
      const { key } = decoded;
      // 权限判断
      if (hasPermission(key, to)) {
        next();
      } else {
        next('/404'); // 没有权限进入
      }
    } else {
      next('/login');
    }*/
  } 
});
export default router;