const SUPERTOKENS_API_BASE_PATH_DEFAULT = "/auth";

enum EMAIL_VERIFICATION {
  EMAIL_ALREADY_VERIFIED = "EMAIL_ALREADY_VERIFIED",
  EMAIL_ALREADY_VERIFIED_ERROR = "EMAIL_ALREADY_VERIFIED_ERROR",
  EMAIL_VERIFICATION_INVALID_TOKEN_ERROR = "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR",
  ERROR = "ERROR",
  OK = "OK",
}

export { EMAIL_VERIFICATION, SUPERTOKENS_API_BASE_PATH_DEFAULT };
