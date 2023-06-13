const login = async (username: string, password: string) => {
  console.log("login", username, password);
};

const logout = async () => {
  console.log("logout");
};

const signup = async (username: string, password: string) => {
  console.log("signup", username, password);
};

const authenticator = {
  login,
  logout,
  signup,
};

export default authenticator;
