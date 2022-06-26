import axios from "axios";
import { saveAuthorization } from "./Requests";

const token = localStorage.getItem('token');
// console.log('token =', token);

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function updateProfile(userId, first_name, last_name, email, password) {
  try {

    saveAuthorization(token);
    // console.log('profilerequest',userId, first_name, last_name, email, password)
    const response = await axiosInstance.put(`/api/admin/profile/${userId}`,
      {
        firstname: first_name,
        lastname: last_name,
        email: email,
        password: password
      });
    //   console.log('response', response)
    // console.log(`le profil avec id ${userId} est mis à jour`);
    return response

  } catch (err) {
    console.error(err)
  }
}