// External Libraries
import axios from "axios";
import Constants from "expo-constants";


const { BACKEND_API_URL } = Constants.expoConfig.extra;


// Axios instance with base URL, JSON headers, and credentials for cookies/auth
const axiosInstance = axios.create({
    baseURL: BACKEND_API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});


export default axiosInstance;