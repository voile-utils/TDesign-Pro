<template>
  <t-layout>
    <t-aside><l-side class="side" :menu="sideMenu"></l-side></t-aside>
    <t-layout class="layout">
      <r-header :name="bucket.name" class="header"></r-header>
      <t-content class="content"><router-view></router-view></t-content>
    </t-layout>
  </t-layout>
</template>

<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePermissionStore, useSettingStore } from '@/store';
import LSide from './layouts/SideNav.vue';
import RHeader from './layouts/Header.vue';

const route = useRoute();
const permissionStore = usePermissionStore();
const settingStore = useSettingStore();
const { bucketRouters: menuRouters } = storeToRefs(permissionStore);

const bucket = {
  name: '存储桶名称',
};

const sideMenu = computed(() => {
  const { layout, splitMenu } = settingStore;
  let newMenuRouters = menuRouters.value;
  if (layout === 'mix' && splitMenu) {
    newMenuRouters.forEach((menu) => {
      if (route.path.indexOf(menu.path) === 0) {
        newMenuRouters = menu.children.map((subMenu) => ({ ...subMenu, path: `${menu.path}/${subMenu.path}` }));
      }
    });
  }
  return newMenuRouters;
});

const changeCollapsed = (status) => {
  settingStore.updateConfig({
    isSidebarCompact: status,
  });
};

onMounted(() => {
  changeCollapsed(true);
});
onBeforeUnmount(() => {
  changeCollapsed(false);
});
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  top: var(--td-comp-size-xxxl);
  right: 0;
  z-index: 199;
}
.content {
  padding-top: 32px;
  padding-left: 180px;
}
.side {
  margin-left: -23px;
}

:deep(.tdesign-starter-side-nav) {
  top: var(--td-comp-size-xxxl);
  border-right: 1px solid var(--td-component-stroke);
}
</style>
