import { BASE_URL } from 'api';
import axios from 'axios';

axios.defaults.baseURL = `${BASE_URL}api/`;

//-------------- GET ALL TASKS ------------------------
const getAll = async params => {
  const response = await axios.get(`sessions`, { params });
  return response.data;
};

//-------------- ADD NEW TASK ------------------------
const addNew = async params => {
  const response = await axios.post(`sessions`, params);
  return response.data;
};

//-------------- UPLOAD VIDEO ------------------------
const uploadVideo = async params => {
  const response = await axios.post(`sessions/video`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

const sessionsOperations = {
  getAll,
  addNew,
  uploadVideo,
};

export default sessionsOperations;
