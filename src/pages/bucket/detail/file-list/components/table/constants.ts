import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const columns: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '文件名',
    align: 'left',
    width: 200,
    colKey: 'name',
    ellipsis: true,
    fixed: 'left',
  },
  { title: '大小', align: 'left', colKey: 'size', width: 100 },
  {
    title: '存储类型',
    width: 100,
    colKey: 'type',
  },
  {
    title: '修改时间',
    width: 200,
    ellipsis: true,
    colKey: 'updateTime',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 150,
    colKey: 'op',
    title: '操作',
  },
];

export const fileFragmentColumns: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '碎片名称',
    align: 'left',
    width: 300,
    colKey: 'name',
    ellipsis: true,
    fixed: 'left',
  },
  { title: '上传任务ID', align: 'left', colKey: 'id', width: 200 },
  {
    title: '存储类型',
    width: 200,
    colKey: 'type',
  },
  {
    title: '创建时间时间',
    width: 200,
    ellipsis: true,
    colKey: 'updateTime',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 200,
    colKey: 'op',
    title: '操作',
  },
];
