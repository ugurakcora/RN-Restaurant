import axios from "axios";
import { API_URL, API_TOKEN } from "@env";

export default axios.create({
  baseURL: `${API_URL}/businesses`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});
