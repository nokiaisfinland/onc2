import { createApp } from "vue"; // Import createApp from Vue 3
import App from "./App.vue";
import router from "./router";

const app = createApp(App); // Create the Vue app instance

app.use(router); // Use the router instance

app.mount("#app"); // Mount the app to the DOM element with ID "app"
