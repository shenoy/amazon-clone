import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-clone-4b803.cloudfunctions.net/api",
});

export default instance;
