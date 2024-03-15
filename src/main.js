import { createApp} from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
import router from './router'
import './style/style.scss'
import globle from '@/global/global'
import request from '@/util/request'


const app = createApp(App);
app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$globle = globle;
app.config.globalProperties.$request = request;
app.use(router).mount("#app");
