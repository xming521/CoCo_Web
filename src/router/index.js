import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '看板', icon: 'el-icon-monitor' }
    }]
  },
  {
    path: '/app',
    component: Layout,
    redirect: '/app/app_table',
    name: 'app',
    meta: { title: '应用', icon: 'el-icon-menu' },
    children: [
      {
        path: 'app_main',
        name: 'app_main',
        component: () => import('@/views/app/app_main'),
        meta: { title: '创建应用', icon: 'el-icon-circle-plus-outline' }
      },
      {
        path: 'app_modify',
        name: 'app_modify',
        hidden: true,
        component: () => import('@/views/app/app_main'),
        meta: { title: '编辑应用', icon: 'dashboard' }
      },
      {
        path: 'app_table',
        name: 'app_table',
        component: () => import('@/views/app/app_table'),
        meta: { title: '应用列表', icon: 'table' }
      },
      {
        path: 'container_table',
        name: 'container_table',
        hidden: true,
        component: () => import('@/views/app/container_table'),
        meta: { title: '容器列表', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [{
  path: '/image',
  component: Layout,
  meta: { title: '镜像', icon: 'el-icon-s-grid', roles: ['admin'] },
  children: [
    {
      path: 'image/1',
      name: 'image/1',
      component: () => import('@/views/image/index'),
      meta: { title: '推荐镜像', icon: 'el-icon-s-grid' }
    },
    {
      path: 'image/table',
      name: 'image/table',
      component: () => import('@/views/image/table'),
      meta: { title: '镜像管理', icon: 'el-icon-s-grid' }
    },
    {
      path: 'image/create',
      name: 'image/create',
      component: () => import('@/views/image/create'),
      meta: { title: '镜像制作', icon: 'el-icon-s-grid' }
    }
  ]
},
  {
    path: '/file',
    component: Layout,
    meta: { roles: ['admin', 'developer'] },
    children: [
      {
        path: 'file',
        name: 'Form',
        component: () => import('@/views/file/index'),
        meta: { title: '文件和数据管理', icon: 'el-icon-coin' }
      }
    ]
  },
  {
    path: '/flow',
    component: Layout,
    meta: { roles: ['admin', 'developer'] },
    children: [
      {
        path: 'flow',
        name: 'Flow',
        component: () => import('@/views/flow/index'),
        meta: { title: 'Flow', icon: 'el-icon-coin' }
      }
    ]
  },
  {
    path: '/scheduler',
    component: Layout,
    meta: { roles: ['admin', 'developer'] },
    children: [
      {
        path: 'scheduler',
        name: 'scheduler',
        component: () => import('@/views/scheduler/index'),
        meta: { title: '计划任务', icon: 'el-icon-s-operation' }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/role',
    meta: { roles: ['admin'] },
    children: [
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '权限控制',
          roles: ['admin'],
          icon: 'el-icon-s-custom'
        }
      }
    ]
  }, {
    path: 'thiea',
    component: Layout,
    meta: { roles: ['admin', 'developer'] },
    children: [
      {
        path: 'http://8.140.133.102:3000/#/home/project',
        meta: { title: 'Thiea IDE', icon: 'link' }
      }
    ]
  },
  {
    path: 'leablstdio',
    component: Layout,
    meta: { roles: ['admin', 'developer'] },
    children: [
      {
        path: 'http://8.140.133.102:8080/projects/',
        meta: { title: 'Leabl Stdio', icon: 'link' }
      }
    ]
  },
  {
    path: 'Demo-Link',
    component: Layout,
    meta: { roles: ['admin', 'tester', 'developer'] },
    children: [
      {
        path: 'http://8.140.133.102:5000/',
        meta: { title: 'demo-link', icon: 'link' }
      }
    ]
  }]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
