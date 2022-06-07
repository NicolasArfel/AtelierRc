import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
});

export async function getAllProject() {
  try {
    const response = await axiosInstance.get("/project");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
