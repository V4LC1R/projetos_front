
import { getToken, logout } from "@services/LocalStorage/auth";
import axios from "axios"

const api = axios.create(
  {
      baseURL: import.meta.env.VITE_API_URL,
      timeout:10000,
      headers: {
          'Content-Type': 'application/json'
      }
  }
)

api.interceptors.request.use(function (config) {
  config.headers.Authorization =  `Bearer ${getToken()}`;
   
  return config;
});

api.interceptors.response.use(
  (response) => {

    return response
  },
  async (error) => {

    if(error){
        
      if(error.response.status === 401){
        logout()
      }

      return Promise.reject(error)
    }
       
  }
);

export default api
