import axios from "axios";
import SuperTokens from "supertokens-website";

import useUserStore from "../store";

SuperTokens.addAxiosInterceptors(axios);

const client = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Request interceptor: Add access token
  instance.interceptors.request.use(
    (config) => {
      // eslint-disable-next-line no-console
      console.log("Request Interceptor Triggered");

      const userStore = useUserStore();
      // eslint-disable-next-line no-console
      console.log("Access Token Before Request:", userStore?.accessToken);

      const token = userStore.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Ensure correct syntax
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

          // eslint-disable-next-line no-console
          console.log("Refreshing access token...");
          const refreshResponse = await instance.post("/api/refresh-token", {
            refresh_token: refreshToken,
          });

          if (refreshResponse.data.status === "OK") {
            const newAccessToken = refreshResponse.data.access_token;
            userStore.accessToken = newAccessToken;
            localStorage.setItem("access_token", newAccessToken);

            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          }
        } catch (refreshError) {
          // eslint-disable-next-line no-console
          console.error("Token refresh failed:", refreshError);
          userStore.removeAuthTokens();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default client;
