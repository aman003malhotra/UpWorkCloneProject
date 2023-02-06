import { API } from "../../backend";

export const signup = (user) => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
};

export const signin = (user) => {
    return fetch(`${API}/signin`, {
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            
        },
        body:JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUserDetail = (userId) => {
    return fetch(`${API}/user/${userId}`, {
        method:"GET",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};


export const authenticate = (data,next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");

  
      return fetch(`${API}/signout`, {
        method: "GET"
      })
        .then(response => console.log("signout success"))
        .catch(err => console.log(err));
    }
  };

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
};


export const updateRole = (userId, roleNum, token, next) => {
  return fetch(`${API}/user/updaterole/${userId}`, {
      method:"PUT",
      headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization: `Bearer ${token}`
      },
    body:JSON.stringify({role:roleNum})
  })
  .then(response => {
      return response.json();
  })
  .catch((err) => console.log(err));
  next();
};
  