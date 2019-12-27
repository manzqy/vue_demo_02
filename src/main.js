import Vue from 'vue'
// import App from './App.vue'
// import Foo from '@/components/Foo.vue'
// import Foo from '@/components/12-数据管理案例.vue'
import Foo from '@/components/13-数据管理案例.vue'

import * as filters from '@/utils/myfilter.js'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
Vue.config.productionTip = false

new Vue({
  render: h => h(Foo)
}).$mount('#app')
