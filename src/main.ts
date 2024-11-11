import { createApp } from "vue"
import "~/global.css"
import App from "~/App.vue"
import { MotionPlugin } from "@vueuse/motion"

const app = createApp(App)
app.use(MotionPlugin)
app.mount("#app")
