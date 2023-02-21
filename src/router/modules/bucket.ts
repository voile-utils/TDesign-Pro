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
    component: () => import('@/pages/bucket/detail/index.vue'),
    meta: {
      title: '存储桶配置',
      hiddenBreadcrumb: true,
    },
    children: [
      {
        path: `${prefix}/origin`,
        name: 'BucketDetailSettingOrigin',
        component: () => import('@/pages/bucket/detail/index.vue'),
        meta: {
          title: '回源设置',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/lifecycle`,
        name: 'BucketDetailSettingLifecycle',
        component: () => import('@/pages/bucket/detail/index.vue'),
        meta: {
          title: '生命周期',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/tag`,
        name: 'BucketDetailSettingTag',
        component: () => import('@/pages/bucket/detail/index.vue'),
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
        component: () => import('@/pages/bucket/detail/index.vue'),
        meta: {
          title: '防盗链配置',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/encrypt`,
        name: 'BucketDetailSafeEncrypt',
        component: () => import('@/pages/bucket/detail/index.vue'),
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
        component: () => import('@/pages/bucket/detail/index.vue'),
        meta: {
          title: '访问权限',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/readWrite`,
        name: 'BucketDetailReadWrite',
        component: () => import('@/pages/bucket/detail/index.vue'),
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
        component: () => import('@/pages/bucket/detail/index.vue'),
        meta: {
          title: '版本控制',
          hiddenBreadcrumb: true,
        },
      },
      {
        path: `${prefix}/bucketCopy`,
        name: 'BucketDetailDisasteRecoveryBucketCopy',
        component: () => import('@/pages/bucket/detail/index.vue'),
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
    meta: {
      title: '日志管理',
      hiddenBreadcrumb: true,
    },
  },
  {
    path: `${prefix}/dataProcess`,
    name: 'BucketDetailDataProcess',
    component: () => import('@/pages/bucket/base/index.vue'),
    meta: {
      title: '数据处理',
      hiddenBreadcrumb: true,
    },
  },
  {
    path: `${prefix}/dataMonitoring`,
    name: 'BucketDetailDataMonitoring',
    component: () => import('@/pages/bucket/base/index.vue'),
    meta: {
      title: '数据监控',
      hiddenBreadcrumb: true,
    },
  },
];
