import axios from "axios";

const userInstance = axios.create({
  baseURL: `${process.env.SERVER_URL}/user`,
});

export default userInstance;
