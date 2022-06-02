import axios from "axios";

const questionInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/question`,
});

export default questionInstance;
