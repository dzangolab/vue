import axios from "axios";
import SuperTokens from "supertokens-website";

import useUserStore from ".././store";

SuperTokens.addAxiosInterceptors(axios);

const client = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      post: {
        "Content-Type": "application/json",
      },
    },
  });

  // Request interceptor: Add access token
  instance.interceptors.request.use(
    (config) => {
      const userStore = useUserStore();
      const token = userStore.accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error),
  );

  // Response interceptor: Handle token expiration
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const userStore = useUserStore();
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = userStore.refreshToken;
          if (!refreshToken) {
            throw new Error("No refresh token available");
          }

          const refreshResponse = await axios.post(
            `${baseURL}/api/refresh-token`,
            { refresh_token: refreshToken },
          );

          if (refreshResponse.data.status === "OK") {
            const newAccessToken = refreshResponse.data.access_token;
            userStore.accessToken = newAccessToken;
            localStorage.setItem("access_token", newAccessToken);

            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          }
        } catch (refreshError) {
          userStore.removeAuthTokens();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default client;
