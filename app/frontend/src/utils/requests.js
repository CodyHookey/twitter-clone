import { safeCredentials, handleErrors } from "./fetchHelper";

// User SignUp
export const userSignUp = (email, username, password) => {
  return fetch(
    "/api/signup",
    safeCredentials({
      method: "POST",
      body: JSON.stringify({
        user: {
          email: email,
          username: username,
          password: password,
        },
      }),
    })
  )
    .then(handleErrors)
    .then((response) => {
      return response;
    });
};

// User Login
export const userLogin = (username, password) => {
  return fetch(
    "/api/login",
    safeCredentials({
      method: "POST",
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    })
  )
    .then(handleErrors)
    .then((response) => {
      return response;
    });
};
