import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'

const app = createApp(App)

app.use(router)
app.use(createMetaManager())
app.use(metaPlugin) // optional, only needed for OptionsAPI (see below)


app.mount('#app')
