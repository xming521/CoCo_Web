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
      meta: { title: '看板', icon: 'dashboard' }
    }]
  },
  {
    path: '/app',
    component: Layout,
    redirect: '/app/app_table',
    name: 'app',
    meta: { title: '应用', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'app_main',
        name: 'app_main',
        component: () => import('@/views/app/app_main'),
        meta: { title: '创建应用', icon: 'dashboard' }
      },
      {
        path: 'app_modify',
        name: 'app_modify',
        hidden:true,
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
  {
    path: '/permission',
    component: Layout,
    redirect: '/role',
    children: [
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: '权限控制',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/image',
    component: Layout,
    meta: { title: '镜像', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'image/create',
        name: 'image',
        component: () => import('@/views/image/index'),
        meta: { title: '推荐镜像', icon: 'form' }
      },
       {
        path: 'image/table',
        name: 'image/table',
        component: () => import('@/views/image/table'),
        meta: { title: '镜像管理', icon: 'form' }
      },
    ]
  },
  {
    path: '/file',
    component: Layout,
    children: [
      {
        path: 'file',
        name: 'Form',
        component: () => import('@/views/file/index'),
        meta: { title: '文件和数据管理', icon: 'folder' }
      }
    ]
  },
  {
    path: '/scheduler',
    component: Layout,
    children: [
      {
        path: 'scheduler',
        name: 'scheduler',
        component: () => import('@/views/scheduler/index'),
        meta: { title: '计划任务', icon: 'file' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

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
