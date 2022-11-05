import { API } from "../../backend";

export const createDepartment = (userId, token, department) => {
    return fetch(`${API}/department/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(department)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
      
  };