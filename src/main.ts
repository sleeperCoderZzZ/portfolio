import { createApp } from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import './style.css'
import vuetify from './plugins/vuetify'
import { vReveal } from './directives/reveal'
import App from './App.vue'

createApp(App).use(vuetify).directive('reveal', vReveal).mount('#app')
