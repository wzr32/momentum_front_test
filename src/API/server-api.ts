import axios from "axios";
import { API_BASE_URL } from "../shared/constants";

const Api = axios.create({
  baseURL: `${API_BASE_URL}`,
});

export default Api;
