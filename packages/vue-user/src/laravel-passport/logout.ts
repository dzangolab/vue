import { AxiosError } from "axios";

import client from "../api/axios";

const logout = async (apiBaseUrl: string) => {
  try {
    await client(apiBaseUrl).post("/api/logout", {
      withCredentials: true,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        throw new Error("401");
      } else {
        throw new Error("SOMETHING_WRONG");
      }
    } else {
      throw new Error("SOMETHING_WRONG");
    }
  }
};

export default logout;
