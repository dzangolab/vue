import client from "../api/axios";

import type { PasswordResetRequestPayload } from "../types";

const requestPasswordReset = async (
  credentials: PasswordResetRequestPayload,
  apiBaseUrl: string,
  path: string,
): Promise<boolean> => {
  try {
    return await client(apiBaseUrl).post(path, credentials, {
      withCredentials: true,
    });
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }
};

export default requestPasswordReset;
