import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { ClientTable } from 'vue-tables-2';
Vue.use(ClientTable);
Vue.config.productionTip = false


Vue.directive('comma', {
  componentUpdated(el,binding,vnode) {
    binding.value=binding.value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.warn(binding)
    vnode.context.attributes.price = binding.value;
     console.log(binding.value)
    
  }
}
)

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
