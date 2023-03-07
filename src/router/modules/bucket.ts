const prefix = '/bucket/detail';

export default [
  {
    path: `${prefix}/base`,
    name: 'BucketDetailBase',
    component: () => import('@/pages/bucket/detail/base/index.vue'),
    meta: {
      title: '概览',
      hiddenBreadcrumb: true,
    },
  },
  {
    path: `${prefix}/fileList`,
    name: 'BucketDetailFileList',
    component: () => import('@/pages/bucket/detail/file-list/index.vue'),
    meta: {
      title: '文件列表',
      hiddenBreadcrumb: true,
    },
  },
  {
    path: `${prefix}/setting`,
    name: 'BucketDetailSetting',
    redirct: `${prefix}/setting/origin`,
    meta: {
      title: '存储桶配置',
      hiddenBreadcrumb: true,
    },
    children: [
      {
        path: `origin`,
        name: 'BucketDetailSettingOrigin',
        component: () => import('@/pages/bucket/detail/setting/origin.vue'),
        meta: {
          title: '回源设置',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `lifecycle`,
        name: 'BucketDetailSettingLifecycle',
        component: () => import('@/pages/bucket/detail/setting/life-cycle.vue'),
        meta: {
          title: '生命周期',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `tag`,
        name: 'BucketDetailSettingTag',
        component: () => import('@/pages/bucket/detail/setting/tag.vue'),
        meta: {
          title: '标签管理',
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: `${prefix}/safe`,
    name: 'BucketDetailSafe',
    component: () => import('@/pages/bucket/detail/index.vue'),
    meta: {
      title: '安全管理',
      hiddenBreadcrumb: true,
    },
    children: [
      {
        path: `${prefix}/antiLeech`,
        name: 'BucketDetailSafeAntiLeech',
        component: () => import('@/pages/bucket/safe/anti-leech.vue'),
        meta: {
          title: '防盗链配置',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/encrypt`,
        name: 'BucketDetailSafeEncrypt',
        component: () => import('@/pages/bucket/safe/encrypt.vue'),
        meta: {
          title: '服务端加密',
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: `${prefix}/permission`,
    name: 'BucketDetailPermission',
    component: () => import('@/pages/bucket/detail/index.vue'),
    meta: {
      title: '权限设置',
      hiddenBreadcrumb: true,
    },
    children: [
      {
        path: `${prefix}/access`,
        name: 'BucketDetailPermissionAccess',
        component: () => import('@/pages/bucket/permission/access.vue'),
        meta: {
          title: '访问权限',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/readWrite`,
        name: 'BucketDetailReadWrite',
        component: () => import('@/pages/bucket/permission/read-write.vue'),
        meta: {
          title: '读写权限',
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: `${prefix}/disasteRecovery`,
    name: 'BucketDetailDisasteRecovery',
    component: () => import('@/pages/bucket/detail/index.vue'),
    meta: {
      title: '容灾管理',
      hiddenBreadcrumb: true,
    },
    children: [
      {
        path: `${prefix}/versionControl`,
        name: 'BucketDetailDisasteRecoveryVersionControl',
        component: () => import('@/pages/bucket/recovery/version-control.vue'),
        meta: {
          title: '版本控制',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/bucketCopy`,
        name: 'BucketDetailDisasteRecoveryBucketCopy',
        component: () => import('@/pages/bucket/recovery/bucket-copy.vue'),
        meta: {
          title: '存储桶复制',
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: `${prefix}/log`,
    name: 'BucketDetailLog',
    component: () => import('@/pages/bucket/base/index.vue'),
    redirct: `${prefix}/log/base`,
    meta: {
      title: '日志管理',
      hiddenBreadcrumb: true,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'BucketDetailLogBase',
        component: () => import('@/pages/bucket/log/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: `${prefix}/dataProcess`,
    name: 'BucketDetailDataProcess',
    redirct: `${prefix}/dataProcess/base`,
    component: () => import('@/pages/bucket/base/index.vue'),
    meta: {
      title: '数据处理',
      hiddenBreadcrumb: true,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'BucketDetailDataProcessBase',
        component: () => import('@/pages/bucket/data-process/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
  {
    path: `${prefix}/dataMonitor`,
    name: 'BucketDetailDataMonitor',
    component: () => import('@/pages/bucket/base/index.vue'),
    meta: {
      title: '数据监控',
      hiddenBreadcrumb: true,
      single: true,
    },
    children: [
      {
        path: 'base',
        name: 'BucketDetailDataMonitorBase',
        component: () => import('@/pages/bucket/data-monitor/index.vue'),
        meta: {
          hiddenBreadcrumb: true,
        },
      },
    ],
  },
];
