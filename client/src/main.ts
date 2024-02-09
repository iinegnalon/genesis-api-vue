import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/main.scss';
import { createPinia } from 'pinia';
import axios from 'axios';
import router from '@/router';

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.config.globalProperties.$axios = axios;

app.mount('#app');
