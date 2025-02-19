import { defineStore } from "pinia";
import { ref } from "vue";

import { auth } from "./auth-provider";

import type {
  AuthTokens,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  UpdatePasswordPayload,
  UserType,
} from "./types";

const USER_KEY = "user";

const useUserStore = defineStore("user", () => {
  const user = ref<UserType | undefined>(undefined);
  const accessToken = ref(localStorage.getItem("accessToken") || null);
  const refreshToken = ref(localStorage.getItem("refreshToken") || null);

  const changePassword = async (
    payload: UpdatePasswordPayload,
    apiBaseUrl: string
  ) => {
    const selectedAuthProvider = auth();

    if ("doChangePassword" in selectedAuthProvider) {
      const response = await selectedAuthProvider.doChangePassword(
        payload,
        apiBaseUrl
      );

      return response;
    }

    throw new Error(
      "Change password is not supported for the selected auth provider"
    );
  };

  const getUser = (): UserType => {
    if (user.value) {
      return user.value;
    }

    const data = localStorage.getItem(USER_KEY);

    return data ? JSON.parse(data) : undefined;
  };

  const googleSignIn = async (redirectURL: string) => {
    const selectedAuthProvider = auth();

    if ("doGoogleSignIn" in selectedAuthProvider) {
      await selectedAuthProvider.doGoogleSignIn(redirectURL);
    }

    throw new Error(
      "Google signin is not supported for the selected auth provider"
    );
  };

  const login = async (credentials: LoginCredentials, apiBaseUrl: string) => {
    const selectedAuthProvider = auth();

    // eslint-disable-next-line no-console
    console.log("store.ts", credentials);
    const response = await selectedAuthProvider.doLogin(
      credentials,
      apiBaseUrl
    );

    return response;
  };

  const logout = async (apiBaseUrl: string) => {
    const selectedAuthProvider = auth();

    await selectedAuthProvider.doLogout(apiBaseUrl).then(() => {
      user.value = undefined;

      // FIXME [SS 17 MARCH 2023]
      document.cookie =
        "sFrontToken=; Max-Age=0; path=/; domain=" + location.hostname;
    });

    removeUser();
  };

  const removeAuthTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const removeUser = () => {
    localStorage.removeItem(USER_KEY);
  };

  const requestPasswordReset = async (
    payload: PasswordResetRequestPayload
  ): Promise<boolean> => {
    const selectedAuthProvider = auth();

    if ("doRequestPasswordReset" in selectedAuthProvider) {
      return selectedAuthProvider.doRequestPasswordReset(payload);
    }

    throw new Error(
      "Request password reset is not supported for the selected auth provider"
    );
  };

  const resetPassword = async (
    payload: PasswordResetPayload
  ): Promise<boolean> => {
    const selectedAuthProvider = auth();

    if ("doResetPassword" in selectedAuthProvider) {
      return selectedAuthProvider.doResetPassword(payload);
    }

    throw new Error(
      "Reset password is not supported for the selected auth provider"
    );
  };

  const setUser = (userData: UserType | undefined) => {
    user.value = userData;

    localStorage.setItem(USER_KEY, JSON.stringify(userData));
  };

  const setAuthTokens = (authTokens: AuthTokens) => {
    console.log("setAuthTokens", authTokens);
    accessToken.value = authTokens.accessToken;
    refreshToken.value = authTokens.refreshToken as string | null;

    localStorage.setItem("accessToken", authTokens.accessToken as string);
    localStorage.setItem("refreshToken", authTokens.refreshToken as string);
  };

  const signup = async (credentials: LoginCredentials): Promise<void> => {
    const selectedAuthProvider = auth();

    if ("doSignup" in selectedAuthProvider) {
      const response = await selectedAuthProvider.doSignup(credentials);

      setUser(response);
    }

    throw new Error("Signup is not supported for the selected auth provider");
  };

  return {
    accessToken,
    changePassword,
    googleSignIn,
    getUser,
    login,
    logout,
    refreshToken,
    removeAuthTokens,
    removeUser,
    resetPassword,
    requestPasswordReset,
    setAuthTokens,
    setUser,
    signup,
    user,
  };
});

export default useUserStore;
