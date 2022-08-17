import DynamicTable from './table/dynamic-table/index.vue'
import DragTable from './table/drag-table.vue'
import InlineEditTable from './table/inline-edit-table.vue'

DynamicTable.install = function (Vue) {
  Vue.use(DynamicTable)
}
DragTable.install = function (Vue) {
  Vue.use(DragTable)
}
InlineEditTable.install = function (Vue) {
  Vue.use(InlineEditTable)
}

const tableRouter = [
  {
    path: '/dynamic-table',
    component: DynamicTable,
    name: 'DynamicTable',
    meta: { title: 'Dynamic Table' }
  },
  {
    path: '/drag-table',
    component: DragTable,
    name: 'DragTable',
    meta: { title: 'Drag Table' }
  },
  {
    path: '/inline-edit-table',
    component: InlineEditTable,
    name: 'InlineEditTable',
    meta: { title: 'Inline Edit' }
  }
]
export default tableRouter
