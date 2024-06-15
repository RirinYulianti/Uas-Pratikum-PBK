import { createApp } from 'vue'
import { Quasar, QBtn, QCard, QCardSection, QInput, QLayout, QHeader, QToolbar, QToolbarTitle, QPageContainer, QPage } from 'quasar'
import quasarLang from 'quasar/lang/en-US'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Quasar, {
  config: {},
  plugins: {},
  lang: quasarLang,
  components: {
    QBtn,
    QCard,
    QCardSection,
    QInput,
    QLayout,
    QHeader,
    QToolbar,
    QToolbarTitle,
    QPageContainer,
    QPage
  }
})

app.use(router)
app.mount('#app')
