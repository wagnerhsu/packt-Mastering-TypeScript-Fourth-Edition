/*eslint-disable @typescript-eslint/triple-slash-reference*/
/// <reference path="../types/window.d.ts" />

import { getEmployee } from "./js/employee";

const emp = getEmployee(2, "James", 100);
console.log(emp.name);

import { createApp } from "vue";
import App from "./App.vue";

console.log(window.myVersion);
createApp(App).mount("#app");
