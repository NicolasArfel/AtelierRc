import axios from "axios";

const token = localStorage.getItem('token');
// console.log('token =', token);


const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function deleteFurniture(furnitureId) {
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.delete(`/api/admin/furniture/${furnitureId}`);
    // console.log(`lemobilier avec id ${furnitureId} est supprimé`);
    return response

  } catch (err) {
    console.error(err)
  }
}