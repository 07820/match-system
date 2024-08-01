import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {Button} from 'vant';

const app=createApp(App);
app.use(Button);
app.mount('#app')



