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

export const logout = () => {
  return fetch(
    "/api/logout",
    safeCredentials({
      method: "DELETE",
    })
  )
    .then(handleErrors)
    .then((response) => response);
};

export const fetchTweets = () => {
  return fetch(
    "/api/tweets",
    safeCredentials({
      method: "GET",
    })
  )
    .then(handleErrors)
    .then((response) => {
      return response;
    });
};

export const deleteTweet = (id) => {
  return fetch(
    `/api/tweets/${id}`,
    safeCredentials({
      method: "DELETE",
    })
  )
    .then(handleErrors)
    .then((response) => {
      return response;
    });
};

export const authenticated = () => {
  return fetch(
    "/api/authenticated",
    safeCredentials({
      method: "GET",
    })
  )
    .then(handleErrors)
    .then((response) => {
      return response;
    });
};

export const fetchTweetsByUser = (username) => {
  return fetch(
    `/api/users/${username}/tweets`,
    safeCredentials({
      method: "GET",
    })
  )
    .then(handleErrors)
    .then((response) => response);
};
