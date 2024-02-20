import "@/assets/styles/main.css";
import "@/assets/styles/reset.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import AppButton from "@/components/UI/AppButton.vue";

const app = createApp(App);

app.use(createPinia());
app.component("AppButton", AppButton);  
app.mount("#app");
