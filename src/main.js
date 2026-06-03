import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

// Efecto de partículas
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine)
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
