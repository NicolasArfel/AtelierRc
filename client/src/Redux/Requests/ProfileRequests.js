import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001"
  });

  export async function updateProfile(projectId, first_name, last_name, email, password) {
    try {
      console.log(projectId, first_name, last_name, email, password)
      const response = await axiosInstance.put(`/api/admin/profile/${projectId}`,
       {email: email,
        firstname:first_name, 
        lastname:last_name,
        password:password});
        console.log('response', response)
      console.log(`le profil avec id ${projectId} est mis à jour`);
      return response.data
     
    } catch (err) {
      console.error(err)
    }
  }