import { DashboardIcon, AppIcon, ServerIcon, ControlPlatformIcon, CloudDownloadIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';
import Layout from '@/layouts/index.vue';
import Bucket from './bucket';

export default [
  {
    path: '/main',
    component: Layout,
    name: 'main',
    redirect: '/main/base',
    meta: {
      title: '概览',
      icon: shallowRef(AppIcon),
      orderNo: 0,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'mainBase',
        component: () => import('@/pages/main/base/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/bucket',
    component: Layout,
    name: 'bucket',
    redirect: '/bucket/detail',
    meta: {
      title: '存储桶列表',
      icon: shallowRef(ServerIcon),
      orderNo: 0,
      single: true,
      hiddenBreadcrumb: true,
    },
    children: [
      {
        path: 'base',
        name: 'bucketBase',
        component: () => import('@/pages/bucket/base/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
      {
        path: 'detail',
        name: 'bucketDetail',
        redirect: '/bucket/detail/base',
        component: () => import('@/pages/bucket/detail/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
        children: Bucket,
      },
    ],
  },
  {
    path: '/usage',
    component: Layout,
    name: 'usage',
    redirect: '/usage/base',
    meta: {
      title: '用量统计',
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'usageBase',
        component: () => import('@/pages/usage/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/dataUtil',
    component: Layout,
    redirect: '/dataUtil/base',
    name: '/dataUtil',
    meta: {
      title: '数据服务',
      icon: shallowRef(ControlPlatformIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'data',
        name: 'dataUtilBase',
        component: () => import('@/pages/data-util/index.vue'),
        meta: {
          title: '数据复制',
        },
      },
    ],
  },
  {
    path: '/dataProcess',
    component: Layout,
    name: 'dataProcess',
    redirect: '/dataProcess/base',
    meta: {
      title: '数据处理',
      icon: 'layers',
      orderNo: 0,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'dataProcessBase',
        component: () => import('@/pages/data-process/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/util',
    component: Layout,
    name: 'util',
    redirect: '/util/base',
    meta: {
      title: '工具下载',
      icon: shallowRef(CloudDownloadIcon),
      orderNo: 0,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'dataBase',
        component: () => import('@/pages/util/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base',
    name: 'dashboard',
    meta: {
      title: '仪表盘',
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'base',
        name: 'DashboardBase',
        component: () => import('@/pages/dashboard/base/index.vue'),
        meta: {
          title: '概览仪表盘',
        },
      },
      {
        path: 'detail',
        name: 'DashboardDetail',
        component: () => import('@/pages/dashboard/detail/index.vue'),
        meta: {
          title: '统计报表',
        },
      },
    ],
  },
];
