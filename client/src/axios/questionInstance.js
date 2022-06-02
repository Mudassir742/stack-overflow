import axios from "axios";

const questionInstance = axios.create({
  baseURL: `${SERVER_URL}/question`,
});

export default questionInstance;
