import axios from "axios";

const token = localStorage.getItem('token');
// console.log('token =', token);

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001"
});

export async function findAllProjects() {
  try {
    const response = await axiosInstance.get(`/api/getOnlyProjects`);
    return response

  } catch (err) {
    console.error(err)
  }
}

export async function deleteProject(projectId) {
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.delete(`api/admin/project/${projectId}`);
    return response

  } catch (err) {
    console.error(err)
  }
}

export async function deletePhotoProject(id) {
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.delete(`/api/admin/delete-images/${id}`);
      return response

  } catch (err) {
    console.error(err)
  }
}

export async function postNewProject(formData, config) {
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.post('/api/admin/add-project', formData, { config });
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function updateCoverPhotoProject(id) {
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.put(`/api/admin/project/${id}/coverphoto`);
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function uploadMorePhotoProject(project_id, formData, config) {
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.post(`/api/admin/add-images/${project_id}`, formData, { config });
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function UpdateProject(project_id, newData) {
  console.log(newData);
  try {

    axiosInstance.defaults.headers.common.authorization = `${token}`;
    const response = await axiosInstance.put(`/api/admin/project/${project_id}`, newData);
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function getLabelProject() {
  try {
    const response = await axiosInstance.get('/api/status');
    return response.data;
  } catch (err) {
    console.error(err);
  }
}