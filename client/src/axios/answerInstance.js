import axios from "axios";

const answerInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/answer`,
});

export default answerInstance;
