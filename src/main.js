/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' // axios 호출

createApp(App).use(store).use(router).mount('#app')

// 뷰에 설정?
createApp.config.productionTip = true
new createApp ({
    render: h => h(App)
    , router
}).$mount('#app')
