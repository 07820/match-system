import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {Button, Icon} from 'vant';

const app=createApp(App);
app.use(Button);
app.use(Icon)


app.mount('#app')



