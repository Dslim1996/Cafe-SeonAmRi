import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import './registerServiceWorker';
import { router } from './router/index.js';

import vClickOutside from 'click-outside-vue3';

import i18n from '@/i18n.js';

import funcs from './services/utility.js';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.config.globalProperties.$isEmpty = funcs.isEmpty;
app.config.globalProperties.$isEmail = funcs.isEmail;

app.directive('clickOutside', vClickOutside.directive);
app.mount('#app');
