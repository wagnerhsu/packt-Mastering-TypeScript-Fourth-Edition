/*eslint-disable @typescript-eslint/triple-slash-reference*/
/// <reference path="../types/window.d.ts" />

import { createApp } from "vue";
import App from "./App.vue";

console.log(window.myVersion);
createApp(App).mount("#app");
