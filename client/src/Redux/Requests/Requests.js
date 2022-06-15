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

export async function getAllProjectsPictures(project_id) {
  // console.log('project_id', project_id);
  try {
    const response = await axiosInstance.get(`/api/project/${project_id}`);
    // console.log('requests response', response);

    return response.data;

  } catch (err) {
    console.error(err);
  }
}

export async function requestLogin(email, password) {
  try {
    const response = await axiosInstance.post('/api/login', {email, password});
    console.log('je suis dans requestLogin');
    return response.data;
    
  } catch (err) {
    console.error(err);
  }
}