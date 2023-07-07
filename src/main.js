import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css"
import '../public/assets/stylesheet/style.css'

createApp(App).use(store).use(router).use(AOS.init()).mount('#app')
