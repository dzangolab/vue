import client from "../api/axios";

const changeEmail = async (email: string, apiBaseUrl: string) => {
  try {
    const response = await client(apiBaseUrl).post(
      "/change-email",
      { email },
      {
        withCredentials: true,
      },
    );

    return response.data.status;
    /*eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (err: any) {
    if (err.response) {
      const { data } = err.response;

      return { status: data.status, message: data.message };
    }

    return { status: "ERROR", message: "Oops! Something went wrong" };
  }
};

export default changeEmail;
