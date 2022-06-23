import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});



// export async function deleteProject(furnitureId) {
//     try {
//       const response = await axiosInstance.delete(`api/admin/project/${projectId}`);
//       console.log(`le projet avec id ${furnitureId} est supprimé`);
//       return response
  
//     } catch (err) {
//       console.error(err)
//     }
//   }