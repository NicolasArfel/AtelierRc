import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function deleteProject(projectId) {
  try {
    const response = await axiosInstance.delete(`api/admin/project/${projectId}`);
    console.log(`le projet avec id ${projectId} est supprimé`);
    return response
   
  } catch (err) {
    console.error(err)
  }
}

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