import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function deleteFurniture(furnitureId) {
    try {
      const response = await axiosInstance.delete(`/api/admin/furniture/${furnitureId}`);
      console.log(`lemobilier avec id ${furnitureId} est supprimé`);
      return response
  
    } catch (err) {
      console.error(err)
    }
  }