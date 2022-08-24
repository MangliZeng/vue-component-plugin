/*!
 * vue-virtual-scroll-list v0.0.3
 * open source under the MIT license
 * https://github.com/tangbc/vue-virtual-scroll-list#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.vueComponentPlugin = factory(global.Vue));
})(this, (function (vue) { 'use strict';

  var script$2 = {
    filters: {
      statusFilter: function statusFilter(status) {
        var statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        };
        return statusMap[status];
      }
    },
    data: function data() {
      return {
        list: null,
        listLoading: true
      };
    },
    created: function created() {
      console.log(process.env);
      this.fetchData();
    },
    methods: {
      fetchData: function fetchData() {
        var _this = this;

        this.listLoading = true;
        this.$request({
          url: '/vue-admin-template/table/list',
          method: 'get'
        }).then(function (response) {
          _this.list = response.data.items;
          _this.listLoading = false;
        });
      }
    }
  };

  var _hoisted_1$2 = {
    "class": "app-container"
  };

  var _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("p", null, "我是dynamic-table", -1
  /* HOISTED */
  );

  var _hoisted_3$2 = {
    "slot-scope": "scope"
  };
  var _hoisted_4$2 = {
    "slot-scope": "scope"
  };
  var _hoisted_5$2 = {
    "slot-scope": "scope"
  };
  var _hoisted_6$2 = {
    "slot-scope": "scope"
  };
  var _hoisted_7$2 = {
    "slot-scope": "scope"
  };
  var _hoisted_8$2 = {
    "slot-scope": "scope"
  };

  var _hoisted_9$2 = /*#__PURE__*/vue.createElementVNode("i", {
    "class": "el-icon-time"
  }, null, -1
  /* HOISTED */
  );

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_el_table_column = vue.resolveComponent("el-table-column");

    var _component_el_tag = vue.resolveComponent("el-tag");

    var _component_el_table = vue.resolveComponent("el-table");

    var _directive_loading = vue.resolveDirective("loading");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [_hoisted_2$2, vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_table, {
      data: $data.list,
      "element-loading-text": "Loading",
      border: "",
      fit: "",
      "highlight-current-row": ""
    }, {
      "default": vue.withCtx(function () {
        return [vue.createVNode(_component_el_table_column, {
          align: "center",
          label: "ID",
          width: "95"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_3$2, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.$index), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Title"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_4$2, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.title), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Author",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_5$2, [vue.createElementVNode("span", null, vue.toDisplayString(_ctx.scope.row.author), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Pageviews",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_6$2, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.pageviews), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          "class-name": "status-col",
          label: "Status",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_7$2, [vue.createVNode(_component_el_tag, {
              type: _ctx.scope.row.status | _ctx.statusFilter
            }, {
              "default": vue.withCtx(function () {
                return [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.status), 1
                /* TEXT */
                )];
              }),
              _: 1
              /* STABLE */

            }, 8
            /* PROPS */
            , ["type"])])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          align: "center",
          prop: "created_at",
          label: "Display_time",
          width: "200"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_8$2, [_hoisted_9$2, vue.createElementVNode("span", null, vue.toDisplayString(_ctx.scope.row.display_time), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        })];
      }),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["data"])), [[_directive_loading, $data.listLoading]])]);
  }

  script$2.render = render$2;
  script$2.__file = "src/table/dynamic-table/index.vue";

  var script$1 = {
    filters: {
      statusFilter: function statusFilter(status) {
        var statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        };
        return statusMap[status];
      }
    },
    data: function data() {
      return {
        list: null,
        listLoading: true
      };
    },
    created: function created() {
      console.log(process.env);
      this.fetchData();
    },
    methods: {
      fetchData: function fetchData() {
        var _this = this;

        this.listLoading = true;
        this.$request({
          url: '/vue-admin-template/table/list',
          method: 'get'
        }).then(function (response) {
          _this.list = response.data.items;
          _this.listLoading = false;
        });
      }
    }
  };

  var _hoisted_1$1 = {
    "class": "app-container"
  };

  var _hoisted_2$1 = /*#__PURE__*/vue.createElementVNode("p", null, "我是 drag-table", -1
  /* HOISTED */
  );

  var _hoisted_3$1 = {
    "slot-scope": "scope"
  };
  var _hoisted_4$1 = {
    "slot-scope": "scope"
  };
  var _hoisted_5$1 = {
    "slot-scope": "scope"
  };
  var _hoisted_6$1 = {
    "slot-scope": "scope"
  };
  var _hoisted_7$1 = {
    "slot-scope": "scope"
  };
  var _hoisted_8$1 = {
    "slot-scope": "scope"
  };

  var _hoisted_9$1 = /*#__PURE__*/vue.createElementVNode("i", {
    "class": "el-icon-time"
  }, null, -1
  /* HOISTED */
  );

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_el_table_column = vue.resolveComponent("el-table-column");

    var _component_el_tag = vue.resolveComponent("el-tag");

    var _component_el_table = vue.resolveComponent("el-table");

    var _directive_loading = vue.resolveDirective("loading");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [_hoisted_2$1, vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_table, {
      data: $data.list,
      "element-loading-text": "Loading",
      border: "",
      fit: "",
      "highlight-current-row": ""
    }, {
      "default": vue.withCtx(function () {
        return [vue.createVNode(_component_el_table_column, {
          align: "center",
          label: "ID",
          width: "95"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_3$1, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.$index), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Title"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_4$1, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.title), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Author",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_5$1, [vue.createElementVNode("span", null, vue.toDisplayString(_ctx.scope.row.author), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Pageviews",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_6$1, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.pageviews), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          "class-name": "status-col",
          label: "Status",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_7$1, [vue.createVNode(_component_el_tag, {
              type: _ctx.scope.row.status | _ctx.statusFilter
            }, {
              "default": vue.withCtx(function () {
                return [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.status), 1
                /* TEXT */
                )];
              }),
              _: 1
              /* STABLE */

            }, 8
            /* PROPS */
            , ["type"])])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          align: "center",
          prop: "created_at",
          label: "Display_time",
          width: "200"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_8$1, [_hoisted_9$1, vue.createElementVNode("span", null, vue.toDisplayString(_ctx.scope.row.display_time), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        })];
      }),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["data"])), [[_directive_loading, $data.listLoading]])]);
  }

  script$1.render = render$1;
  script$1.__file = "src/table/drag-table.vue";

  var script = {
    filters: {
      statusFilter: function statusFilter(status) {
        var statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        };
        return statusMap[status];
      }
    },
    data: function data() {
      return {
        list: null,
        listLoading: true
      };
    },
    created: function created() {
      console.log(process.env);
      this.fetchData();
    },
    methods: {
      fetchData: function fetchData() {
        var _this = this;

        this.listLoading = true;
        this.$request({
          url: '/vue-admin-template/table/list',
          method: 'get'
        }).then(function (response) {
          _this.list = response.data.items;
          _this.listLoading = false;
        });
      }
    }
  };

  var _hoisted_1 = {
    "class": "app-container"
  };

  var _hoisted_2 = /*#__PURE__*/vue.createElementVNode("p", null, "我是 inline-edit-table", -1
  /* HOISTED */
  );

  var _hoisted_3 = {
    "slot-scope": "scope"
  };
  var _hoisted_4 = {
    "slot-scope": "scope"
  };
  var _hoisted_5 = {
    "slot-scope": "scope"
  };
  var _hoisted_6 = {
    "slot-scope": "scope"
  };
  var _hoisted_7 = {
    "slot-scope": "scope"
  };
  var _hoisted_8 = {
    "slot-scope": "scope"
  };

  var _hoisted_9 = /*#__PURE__*/vue.createElementVNode("i", {
    "class": "el-icon-time"
  }, null, -1
  /* HOISTED */
  );

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_el_table_column = vue.resolveComponent("el-table-column");

    var _component_el_tag = vue.resolveComponent("el-tag");

    var _component_el_table = vue.resolveComponent("el-table");

    var _directive_loading = vue.resolveDirective("loading");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [_hoisted_2, vue.withDirectives((vue.openBlock(), vue.createBlock(_component_el_table, {
      data: $data.list,
      "element-loading-text": "Loading",
      border: "",
      fit: "",
      "highlight-current-row": ""
    }, {
      "default": vue.withCtx(function () {
        return [vue.createVNode(_component_el_table_column, {
          align: "center",
          label: "ID",
          width: "95"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_3, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.$index), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Title"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_4, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.title), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Author",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_5, [vue.createElementVNode("span", null, vue.toDisplayString(_ctx.scope.row.author), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          label: "Pageviews",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_6, [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.pageviews), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          "class-name": "status-col",
          label: "Status",
          width: "110",
          align: "center"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_7, [vue.createVNode(_component_el_tag, {
              type: _ctx.scope.row.status | _ctx.statusFilter
            }, {
              "default": vue.withCtx(function () {
                return [vue.createTextVNode(vue.toDisplayString(_ctx.scope.row.status), 1
                /* TEXT */
                )];
              }),
              _: 1
              /* STABLE */

            }, 8
            /* PROPS */
            , ["type"])])];
          }),
          _: 1
          /* STABLE */

        }), vue.createVNode(_component_el_table_column, {
          align: "center",
          prop: "created_at",
          label: "Display_time",
          width: "200"
        }, {
          "default": vue.withCtx(function () {
            return [vue.createElementVNode("template", _hoisted_8, [_hoisted_9, vue.createElementVNode("span", null, vue.toDisplayString(_ctx.scope.row.display_time), 1
            /* TEXT */
            )])];
          }),
          _: 1
          /* STABLE */

        })];
      }),
      _: 1
      /* STABLE */

    }, 8
    /* PROPS */
    , ["data"])), [[_directive_loading, $data.listLoading]])]);
  }

  script.render = render;
  script.__file = "src/table/inline-edit-table.vue";

  script$2.install = function (Vue) {
    Vue.use(script$2);
  };

  script$1.install = function (Vue) {
    Vue.use(script$1);
  };

  script.install = function (Vue) {
    Vue.use(script);
  };

  var tableRouter = [{
    path: '/dynamic-table',
    component: script$2,
    name: 'DynamicTable',
    meta: {
      title: 'Dynamic Table'
    }
  }, {
    path: '/drag-table',
    component: script$1,
    name: 'DragTable',
    meta: {
      title: 'Drag Table'
    }
  }, {
    path: '/inline-edit-table',
    component: script,
    name: 'InlineEditTable',
    meta: {
      title: 'Inline Edit'
    }
  }];

  /**
   * 打包入口 外面属性传入当前的全局属性
   * 方便页面调用，eg: 请求$request，在vue页面中通过this.$request调用
   */

  var install = function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // 页面请求封装和整个系统保持一致
    Vue.prototype.$request = opts.$request; // 动态加载路由

    opts.$router.addRoutes(tableRouter);
  };
  /* istanbul ignore if */


  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = {
    install: install
  };

  return index;

}));
