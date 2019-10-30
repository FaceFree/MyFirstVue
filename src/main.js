// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from '@/api/ajax'
//配置全局js    ajax   使用 this.$ajax()
Vue.prototype.$ajax = ajax;

// 根据路由设置标题 路由跳转之前
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next();
})
//注册全局组件mint-ui
import { Field,Header } from 'mint-ui';
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
