<template>
  <div class="header">
    <span class="inner">{{ props.name }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
  },
});
</script>

<style lang="less" scoped>
.header {
  height: 54px;
  line-height: 54px;
  width: calc(100% - 244px);
  background-color: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
  text-align: center;
  .inner {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
