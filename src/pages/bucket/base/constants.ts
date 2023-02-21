import { PrimaryTableCol, TableRowData } from 'tdesign-vue-next';

export const COLUMNS: PrimaryTableCol<TableRowData>[] = [
  { colKey: 'row-select', type: 'multiple', width: 64, fixed: 'left' },
  {
    title: '存储桶名称',
    align: 'left',
    width: 600,
    colKey: 'name',
    fixed: 'left',
  },
  { title: '访问限制', colKey: 'limit', width: 300 },
  {
    title: '创建时间',
    width: 300,
    ellipsis: true,
    colKey: 'createTime',
  },
  {
    align: 'left',
    fixed: 'right',
    width: 200,
    colKey: 'op',
    title: '操作',
  },
];
