import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-4aaba.firebaseio.com/"
});

export default instance;