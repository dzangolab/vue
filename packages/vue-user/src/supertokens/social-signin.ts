import { getAuthorisationURLWithQueryParamsAndSetState } from "supertokens-web-js/recipe/thirdpartyemailpassword";

async function socialSignIn(providerId: string, redirectURL: string) {
  const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
    authorisationURL: redirectURL,
    providerId: providerId,
  });

  window.location.assign(authUrl);
}

export default socialSignIn;
