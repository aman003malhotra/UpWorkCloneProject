import { API } from "../../backend";

export const getAllProfiles = () => {
    return fetch(`${API}/profiles`, {
        method:"GET",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};

export const newProfile = (profile, userId, token) => {
    return fetch(`${API}/profile/post/${userId}`, {
        method: "POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`   
        },
        body:JSON.stringify(profile)
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
};

export const deleteProfile = (profileId, next) => {
    return fetch(`${API}/profile/delete/${profileId}`, {
        method:"DELETE",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};

export const myProfile = (userId) => {
    return fetch(`${API}/profile/${userId}`, {
        method: "GET",
        headers:{
            Accept:"application/json",
        }
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
}

export const profileById = (profileId) => {
    return fetch (`${API}/myprofile/${profileId}`, {
        method:"GET",
        headers:{
            Accept:"application/json",
        }
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
}

export const updateProfile = (profile, profileId, token) => {
    return fetch(`${API}/profile/update/${profileId}`, {
        method: "PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`   
        },
        body:JSON.stringify(profile)
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
};

export const addOffer = (userId, profileId) =>{
    return fetch(`${API}/offer/${userId}/${profileId}`, {
        method:"PUT",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};