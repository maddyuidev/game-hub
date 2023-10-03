import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "66b0099ed1b04b5eaf7ab011aeb9516a",
  },
});
