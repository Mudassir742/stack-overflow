import axios from "axios";

const bookmarkInstance = axios.create({
  baseURL: `${SERVER_URL}/bookmark`,
});

export default bookmarkInstance;
