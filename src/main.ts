import { createApp } from "vue"

import App from "@/App.vue"
import "@/css/app.scss"
import VueSplide from "@splidejs/vue-splide"

const app = createApp(App)
app.use(VueSplide)
app.mount("#app")
