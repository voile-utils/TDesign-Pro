<template>
  <div :class="sideNavCls">
    <t-menu :class="menuCls" width="180px" :theme="theme" :value="active" :default-expanded="defaultExpanded">
      <menu-content :nav-data="menu" />
    </t-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import type { PropType } from 'vue';
import union from 'lodash/union';

// import { useSettingStore } from '@/store';
import { prefix } from '@/config/global';
import type { MenuRoute } from '@/types/interface';
import { getActive, getRoutesExpanded } from '@/router';

import MenuContent from '@/layouts/components/MenuContent.vue';

// const MIN_POINT = 992 - 1;

const props = defineProps({
  menu: {
    type: Array as PropType<MenuRoute[]>,
    default: () => [],
  },
  showLogo: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  isFixed: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  layout: {
    type: String as PropType<string>,
    default: '',
  },
  headerHeight: {
    type: String as PropType<string>,
    default: '64px',
  },
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
  isCompact: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

// const collapsed = computed(() => useSettingStore().isSidebarCompact);

const active = computed(() => getActive());

const defaultExpanded = computed(() => {
  const path = getActive();
  const parentPath = path.substring(0, path.lastIndexOf('/'));
  const expanded = getRoutesExpanded();
  return union(expanded, parentPath === '' ? [] : [parentPath]);
});

const sideNavCls = computed(() => {
  const { isCompact } = props;
  return [
    `${prefix}-sidebar-layout`,
    {
      [`${prefix}-sidebar-compact`]: isCompact,
    },
  ];
});

const menuCls = computed(() => {
  const { showLogo, isFixed, layout } = props;
  return [
    `${prefix}-side-nav`,
    {
      [`${prefix}-side-nav-no-logo`]: !showLogo,
      [`${prefix}-side-nav-no-fixed`]: !isFixed,
      [`${prefix}-side-nav-mix-fixed`]: layout === 'mix' && isFixed,
    },
  ];
});

// const settingStore = useSettingStore();

// const autoCollapsed = () => {
//   const isCompact = window.innerWidth <= MIN_POINT;
//   settingStore.updateConfig({
//     isSidebarCompact: isCompact,
//   });
// };

onMounted(() => {
  // autoCollapsed();
  // window.onresize = () => {
  //   autoCollapsed();
  // };
});
</script>

<style lang="less" scoped></style>
