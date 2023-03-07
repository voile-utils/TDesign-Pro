<template>
  <div>
    <t-card class="list-card-container" :bordered="false">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-button @click="uploadeVisible = true"> 上传文件 </t-button>
          <t-button variant="base" theme="default" @click="createVisible = true"> 创建文件夹 </t-button>
          <t-button variant="base" theme="default" @click="drawerVisible = true"> 文件碎片 </t-button>
          <t-popconfirm content="确认清空吗">
            <t-button variant="base" theme="default"> 清空存储桶 </t-button>
          </t-popconfirm>

          <p class="selected-count">已选{{ selectedRowKeys.length }}项</p>
        </div>
        <div class="search-input">
          <t-input v-model="searchValue" placeholder="请输入你需要搜索的内容" clearable>
            <template #suffix-icon>
              <search-icon size="20px" />
            </template>
          </t-input>
        </div>
      </t-row>
      <t-table
        :data="data"
        :columns="columns"
        :row-key="rowKey"
        vertical-align="top"
        :hover="true"
        :pagination="pagination"
        select-on-row-click
        :selected-row-keys="selectedRowKeys"
        :loading="dataLoading"
        table-layout="auto"
        size="large"
        @select-change="rehandleSelectChange"
      >
        <template #op="slotProps">
          <a class="t-button-link">详情</a>
          <a class="t-button-link">预览</a>
          <a class="t-button-link">下载</a>
          <t-dropdown :options="options" placement="bottom" trigger="click">
            <a class="t-button-link">更多</a>
          </t-dropdown>
        </template></t-table
      >
    </t-card>
    <t-dialog v-model:visible="uploadeVisible" header="上传文件" width="40%">
      <t-upload
        v-model="files"
        action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        :placeholder="`上传至${'volit'}`"
        theme="file-flow"
        multiple
        :max="10"
      ></t-upload>
    </t-dialog>

    <t-dialog v-model:visible="createVisible" header="创建文件夹">
      <t-form required-mark>
        <t-form-item label="文件夹名称" name="name" initial-data="TDesign">
          <t-input v-model="newFileName" placeholder="请输入文件夹名称" />
        </t-form-item>
      </t-form>
    </t-dialog>

    <t-drawer v-model:visible="drawerVisible" header="文件碎片" size="45%">
      <t-row justify="space-between">
        <div class="left-operation-container">
          <t-button @click="uploadeVisible = true"> 清空碎片 </t-button>
          <p class="selected-count">已选{{}}项</p>
        </div>
        <div class="search-input">
          <t-input v-model="searchValue" placeholder="请输入你需要搜索的内容" clearable>
            <template #suffix-icon>
              <search-icon size="20px" />
            </template>
          </t-input>
        </div>
      </t-row>
      <t-base-table
        size="large"
        table-layout="auto"
        row-key="index"
        :data="data"
        :columns="fileFragmentColumns"
        :pagination="fileFragmentPagination"
      >
        <template #op="slotProps">
          <t-popconfirm content="确认删除吗">
            <a class="t-button-link">删除</a>
          </t-popconfirm>
        </template></t-base-table
      >
    </t-drawer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ListBase',
};
</script>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue-next';
import { columns, fileFragmentColumns } from './constants';

const rowKey = 'index';
const searchValue = ref('');
const newFileName = ref('');
const dataLoading = ref(false);
const uploadeVisible = ref(false);
const createVisible = ref(false);
const drawerVisible = ref(false);

const selectedRowKeys = ref([]);
const files = reactive([]);

const pagination = reactive({
  defaultPageSize: 20,
  total: 100,
  defaultCurrent: 1,
});

const fileFragmentPagination = reactive({
  defaultPageSize: 10,
  total: 50,
  defaultCurrent: 1,
});

const data = reactive([
  {
    index: 1,
    name: '1.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 2,
    name: '2.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 3,
    name: '3.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 4,
    name: '4.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 5,
    name: '5.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 6,
    name: '6.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 7,
    name: '7.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 8,
    name: '8.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 9,
    name: '9.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
  {
    index: 10,
    name: '10.png',
    size: '100.00KB',
    type: '标准存储',
    updateTime: '2023-01-10 20:46:15',
  },
]);
const fileFragmentData = reactive([]);
const options = [
  { content: '修改访问权限', value: 1 },
  { content: '检索', value: 1 },
  { content: '删除', value: 1 },
  { content: '修改存储类型', value: 1 },
  { content: '文件压缩', value: 1 },
];
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
};
</script>

<style lang="less" scoped>
.payment-col {
  display: flex;

  .trend-container {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
}

.left-operation-container {
  padding: 6px 0;
  margin-bottom: 16px;

  .selected-count {
    display: inline-block;
    margin-left: 8px;
    color: var(--td-text-color-secondary);
  }
}

.search-input {
  width: 360px;
}
</style>
