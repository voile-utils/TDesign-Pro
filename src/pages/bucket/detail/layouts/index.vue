<template>
  <t-layout>
    <t-aside><l-side class="side" :menu="sideMenu"></l-side></t-aside>
    <t-layout class="layout">
      <r-header :name="props.bucket.name" class="header"></r-header>
      <t-content class="content"><router-view></router-view></t-content>
    </t-layout>
  </t-layout>
</template>

<script lang="ts" setup>
import { computed, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { usePermissionStore, useSettingStore } from '@/store';
import LSide from './SideNav.vue';
import RHeader from './Header.vue';

const props = defineProps({
  bucket: {
    type: Object,
  },
});
const route = useRoute();
const permissionStore = usePermissionStore();
const settingStore = useSettingStore();
const { bucketRouters: menuRouters } = storeToRefs(permissionStore);

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

const changeCollapsed = () => {
  settingStore.updateConfig({
    isSidebarCompact: !settingStore.isSidebarCompact,
  });
};

onMounted(() => {
  nextTick(() => {
    changeCollapsed();
  });
});
onBeforeUnmount(() => {
  nextTick(() => {
    changeCollapsed();
  });
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
  padding-top: 40px;
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
