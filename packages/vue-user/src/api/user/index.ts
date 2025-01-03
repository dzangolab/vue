import client from "../axios";

import type { UserType } from "../../types";

export const getMe = async (
  apiBaseUrl: string,
): Promise<{ data: UserType }> => {
  const response = await client(apiBaseUrl).get(`me`, {
    withCredentials: true,
  });

  if ("error" in response.data) {
    throw new Error(response.data.message);
  } else {
    return response;
  }
};
