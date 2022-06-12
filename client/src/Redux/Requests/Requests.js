import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function getAllProject() {
  try {
    const response = await axiosInstance.get("/projects");
    console.log('response', response);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
