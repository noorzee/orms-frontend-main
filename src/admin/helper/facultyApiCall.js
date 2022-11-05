import { API } from "../../backend";

export const createFaculty = (userId, token, faculty) => {
    return fetch(`${API}/faculty/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(faculty)
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
      
  };
  

  export const getAllFaculty = () => {
    return fetch(`${API}/faculty`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };
  
