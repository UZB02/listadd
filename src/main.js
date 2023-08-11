import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";


const app = createApp(App);

app.use(store);
app.use(VueSweetalert2);

app.mount("#app");
