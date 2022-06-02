import axios from "axios";

const answerInstance = axios.create({
  baseURL: `${SERVER_URL}/answer`,
});

export default answerInstance;
