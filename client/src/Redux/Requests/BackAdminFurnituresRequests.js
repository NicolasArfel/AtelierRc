import axios from "axios";

const token = localStorage.getItem('token');
// console.log('token =', token);

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
    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.post('/api/admin/add-furniture', formData, { config });
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function UpdateFurniture(furniture_id, newData) {
  try {
    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.put(`/api/admin/furniture/${furniture_id}`, newData);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function uploadMorePhotoFurniture(furniture_id, formData, config) {
  try {
    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.post(`/api/admin/add-images-furniture/${furniture_id}`, formData, { config });
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function deletePhotoFurniture(id) {
  try {
    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.delete(`/api/admin/delete-images-furniture/${id}`);
    return response

  } catch (err) {
    console.error(err)
  }
}

export async function updateCoverPhotoFurniture(id) {
  try {
    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.put(`/api/admin/furniture/${id}/coverphoto`);
    return response;
  } catch (err) {
    console.error(err);
  }
}