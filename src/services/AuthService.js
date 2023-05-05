import axios from "axios";

export function SignUp(email, password) {
  const postData = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDP0lG8BKCvDwOQ_vF9g_YYP3JpnrmB9AE`,
    postData
  );
}

export function Login(email, password) {
  const loginData = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDP0lG8BKCvDwOQ_vF9g_YYP3JpnrmB9AE`,
    loginData
  );
}

export function formatError(errorResponse) { 
  switch (errorResponse.error.message) {
    case "EMAIL_EXISTS":
      return "Email already Exists";

    case "EMAIL_NOT_FOUND":
      return "Email not found";
    case "INVALID_PASSWORD":
      return "Invalid Password";
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}
