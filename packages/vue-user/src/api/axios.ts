import { AppConfig } from "@dzangolab/vue3-config";
import axios from "axios";
import SuperTokens from "supertokens-website";

SuperTokens.addAxiosInterceptors(axios);

const client = (baseURL: string, config?: AppConfig) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  // Response interceptor: Handle token expiration
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshRoute = config?.user?.apiRoutes?.refresh || "/api/refresh";

          const refreshResponse = await instance.post(refreshRoute, {
            withCredentials: true,
          });

          if (refreshResponse.status === 200) {
            return instance(originalRequest);
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export default client;
