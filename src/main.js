import { createApp} from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
import router from './router'
import './style/style.scss'

createApp(App).use(router).mount("#app");
createApp(App).config.globalProperties.$dayjs=dayjs;
