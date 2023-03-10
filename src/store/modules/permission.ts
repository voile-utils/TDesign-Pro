import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import router, { fixedRouterList, homepageRouterList, bucketRouterList } from '@/router';
import { store } from '@/store';
import { RouteItem } from '@/api/model/permissionModel';
import { getMenuList } from '@/api/permission';
import { transformObjectToRoute } from '@/utils/route';

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    whiteListRouters: ['/login'],
    routers: [],
    bucketRouters: [],
    removeRoutes: [],
    asyncRoutes: [],
  }),
  actions: {
    async initRoutes() {
      const accessedRouters = this.asyncRoutes;

      // 在菜单展示全部路由
      this.routers = [...homepageRouterList, ...accessedRouters, ...fixedRouterList];
      this.bucketRouters = [...bucketRouterList];
      // 在菜单只展示动态路由和首页
      // this.routers = [...homepageRouterList, ...accessedRouters];
      // 在菜单只展示动态路由
      // this.routers = [...accessedRouters];
    },
    async buildAsyncRoutes() {
      try {
        // 发起菜单权限请求 获取菜单列表
        const asyncRoutes: Array<RouteItem> = (await getMenuList()).list;
        this.asyncRoutes = transformObjectToRoute(asyncRoutes);
        await this.initRoutes();
        return this.asyncRoutes;
      } catch (error) {
        throw new Error("Can't build routes");
      }
    },
    async restoreRoutes() {
      this.removeRoutes.forEach((item: RouteRecordRaw) => {
        router.addRoute(item);
      });
    },
  },
});

export function getPermissionStore() {
  return usePermissionStore(store);
}
