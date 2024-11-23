
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // Your backend base URL
  });


  // Add a request interceptor
apiClient.interceptors.request.use(
    (config) => {
      // Get the token from localStorage
      const token = localStorage.getItem('data');
      if (token) {
        // Add Authorization header with Bearer token
        config.headers.Authorization = `Bearer ${token.replace(/"/g, '')}`; 
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default apiClient;