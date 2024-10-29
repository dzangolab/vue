import { emailPasswordSignIn } from "supertokens-web-js/recipe/thirdpartyemailpassword";

import type { LoginCredentials, User } from "../types";

const login = async (
  credentials: LoginCredentials,
): Promise<User | undefined> => {
  let user: User | undefined;
  let response;

  const data = {
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
  };

  try {
    response = await emailPasswordSignIn(data);
    // eslint-disable-next-line
  } catch (error) {
    throw new Error("SOMETHING_WRONG");
  }

  if (response.status === "OK") {
    user = response.user;

    return user;
  } else if (response.status === "WRONG_CREDENTIALS_ERROR") {
    throw new Error("401");
  } else {
    throw new Error("SOMETHING_WRONG");
  }
};

export default login;
