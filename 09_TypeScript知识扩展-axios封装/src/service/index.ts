import { BASE_URL, TIME_OUT } from "./config";
import BWRequest from "./request";
const bwRequest = new BWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default bwRequest