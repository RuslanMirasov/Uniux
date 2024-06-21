import { BASE_URL } from 'api';
import axios from 'axios';

axios.defaults.baseURL = `${BASE_URL}api/`;

//-------------- GET ALL TASKS ------------------------
const getAll = async params => {
  try {
    const response = await axios.get(`tasks`, { params });
    return response.data;
  } catch (error) {
    return [];
  }
};

//-------------- ADD NEW TASK ------------------------
const addNew = async params => {
  const response = await axios.post(`tasks`, params);
  return response.data;
};

//-------------- UPDATE TASKNAME------------------------
const updateTask = async (id, field, params) => {
  const response = await axios.put(`tasks/${field}/${id}`, params);
  return response.data;
};

const TasksOperations = {
  getAll,
  addNew,
  updateTask,
};

export default TasksOperations;
