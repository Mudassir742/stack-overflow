import axios from "axios";

const bookmarkInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/bookmark`,
});

export default bookmarkInstance;
