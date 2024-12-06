import axios from "axios";

axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

export const api = axios.create();
