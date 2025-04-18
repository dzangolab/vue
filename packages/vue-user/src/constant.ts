const API_PATH_CHANGE_PASSWORD = "/api/user/change-password";
const API_PATH_LOGIN = "/api/login";
const API_PATH_LOGOUT = "/api/logout";
const API_PATH_REFRESH = "/api/login/refresh";
const API_PATH_SIGNUP = "/api/signup";

enum EMAIL_VERIFICATION {
  EMAIL_ALREADY_VERIFIED = "EMAIL_ALREADY_VERIFIED",
  EMAIL_ALREADY_VERIFIED_ERROR = "EMAIL_ALREADY_VERIFIED_ERROR",
  EMAIL_VERIFICATION_INVALID_TOKEN_ERROR = "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR",
  ERROR = "ERROR",
  OK = "OK",
}

const ERROR_NOT_FOUND = 404;
const ERROR_ROLE_ALREADY_EXISTS = "ROLE_ALREADY_EXISTS";

const LOGIN_TYPE_EMAIL = "email";
const LOGIN_TYPE_USERNAME = "username";

const ROLE_ADMIN = "ADMIN";

const STATUS_ERROR = "ERROR";

const STATUS_OK = "OK";

const SUPERTOKENS_API_BASE_PATH_DEFAULT = "/auth";

export {
  API_PATH_CHANGE_PASSWORD,
  API_PATH_LOGIN,
  API_PATH_LOGOUT,
  API_PATH_REFRESH,
  API_PATH_SIGNUP,
  EMAIL_VERIFICATION,
  ERROR_NOT_FOUND,
  ERROR_ROLE_ALREADY_EXISTS,
  LOGIN_TYPE_EMAIL,
  LOGIN_TYPE_USERNAME,
  ROLE_ADMIN,
  STATUS_ERROR,
  STATUS_OK,
  SUPERTOKENS_API_BASE_PATH_DEFAULT
};
