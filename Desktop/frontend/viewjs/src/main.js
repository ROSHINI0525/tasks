import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Vue.filter('shorttrim',function(item){
//   if(item.length>10)
//   return'${item.slice(0,10)}...'
// })
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// })
Vue.filter('shorttrim', function (value) {
  if (value.length>10){
    const item = value.slice(0,10)+'..'
    return item
  }
  else{
    return value
  }
  
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
