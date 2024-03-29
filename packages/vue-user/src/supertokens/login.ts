import { emailPasswordSignIn } from "supertokens-web-js/recipe/thirdpartyemailpassword";

import type { LoginCredentials, User } from "../types";

const login = async (
  credentials: LoginCredentials
): Promise<User | undefined> => {
  let user: User | undefined;

  const response = await emailPasswordSignIn({
    formFields: [
      {
        id: "email",
        value: credentials.email as string,
      },
      {
        id: "password",
        value: credentials.password as string,
      },
    ],
  });

  if (response.status === "OK") {
    user = response.user;
  } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
    throw new Error("401");
  }

  return user;
};

export default login;
