/* eslint-disable no-console */
import { AxiosError } from "axios";

import useUserStore from ".././store";
import client from "../api/axios";

import type { LoginCredentials, UserType } from "../types";

const login = async (
  credentials: LoginCredentials,
  apiBaseUrl: string,
): Promise<UserType | undefined> => {
  const userStore = useUserStore();

  let user: UserType | undefined;
  let response;

  console.log("login.ts", credentials);

  try {
    response = await client(apiBaseUrl).post("/api/login", credentials, {
      withCredentials: true,
    });
    console.log("response", response);
    // eslint-disable-next-line

    if (response.status === 200) {
      const { access_token: accessToken, refresh_token: refreshToken } =
        response.data;

      userStore.setAuthTokens({ accessToken, refreshToken });

      user = response.data.user as UserType;

      return user;
    }
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

export default login;
