import axios from "axios";
import { saveAuthorization } from "./Requests";

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

    saveAuthorization(token);
    const response = await axiosInstance.delete(`api/admin/project/${projectId}`);

    // console.log(`le projet avec id ${projectId} est supprimé`);
    return response

  } catch (err) {
    console.error(err)
  }
}

export async function deletePhotoProject(id) {
  try {

    saveAuthorization(token);
    const response = await axiosInstance.delete(`/api/admin/delete-images/${id}`);
    return response

  } catch (err) {
    console.error(err)
  }
}

export async function postNewProject(formData, config) {
  try {

    saveAuthorization(token);
    const response = await axiosInstance.post('/api/admin/add-project', formData, { config });
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function updateCoverPhotoProject(id) {
  try {

    saveAuthorization(token);
    const response = await axiosInstance.put(`/api/admin/project/${id}/coverphoto`);
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function uploadMorePhotoProject(project_id, formData, config) {
  try {

    saveAuthorization(token);
    const response = await axiosInstance.post(`/api/admin/add-images/${project_id}`, formData, { config });
    return response;

  } catch (err) {
    console.error(err);
  }
}

export async function UpdateProject(project_id, newData) {
  console.log(newData);
  try {

    saveAuthorization(token);
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