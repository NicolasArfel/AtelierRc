import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function postNewProject(project_name,
  location,
  date,
  program,
  surface,
  type,
  client,
  design,
  project_photo_credit) {
  try {
    const response = await axiosInstance.post('/api/admin/project', {
      project_name,
      location,
      date,
      program,
      surface,
      type,
      client,
      design,
      project_photo_credit
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
}