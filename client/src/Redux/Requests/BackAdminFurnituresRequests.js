import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function deleteFurniture(furnitureId) {
    try {
      const response = await axiosInstance.delete(`/api/admin/furniture/${furnitureId}`);
      // console.log(`lemobilier avec id ${furnitureId} est supprimé`);
      return response
  
    } catch (err) {
      console.error(err)
    }
  }


  export async function postNewFurniture(formData, config) {
    try {
      const response = await axiosInstance.post('/api/admin/add-furniture', formData, { config });
      return response;
    } catch (err) {
      console.error(err);
    }
  }

  export async function UpdateFurniture(furniture_id, newData) {
    try {
      const response = await axiosInstance.put(`/api/admin/furniture/${furniture_id}`, newData);
      return response;
    } catch (err) {
      console.error(err);
    }
  }