import { API } from "../../backend";

export const getAllJobs = () => {
    return fetch(`${API}/jobs`, {
        method:"GET",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};

export const jobById = (jobId) => {
    return fetch (`${API}/job/${jobId}`, {
        method:"GET"
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
}

export const newJob = (job, userId, token) => {
    return fetch(`${API}/job/post/${userId}`, {
        method: "POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`   
        },
        body:JSON.stringify(job)
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
};

export const myJobs = (userId) => {
    return fetch(`${API}/myjobs/${userId}`, {
        method: "GET",
        headers:{
            Accept:"application/json",
        }
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
};


export const updateJob = (job, jobId, token) => {
    return fetch(`${API}/job/update/${jobId}`, {
        method: "PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`   
        },
        body:JSON.stringify(job)
    })
    .then((response) => {
        return response.json();
    })
    .catch((err) => {console.log(err)});
};

export const deleteJob = (jobId, next) => {
    return fetch(`${API}/job/delete/${jobId}`, {
        method:"DELETE",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};

export const addProposal = (userId, jobId) =>{
    return fetch(`${API}/proposals/${userId}/${jobId}`, {
        method:"PUT",
    })
    .then(response => {
        return response.json();
    })
    .catch((err) => console.log(err));
};