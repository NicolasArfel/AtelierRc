import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function getAllProjects() {
  try {
    const response = await axiosInstance.get("/api/projects");
    // console.log('requests response', response);

    return response.data;

  } catch (err) {
    console.error(err);
  }
}
