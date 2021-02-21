import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import list  from 'vant/lib/list'
import cell from 'vant/lib/cell'


createApp(App)
    .use(store)
    .use(router)
    .use(list)
    .use(cell)
    .mount('#app')
