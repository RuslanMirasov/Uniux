import { BASE_URL } from 'api';
import axios from 'axios';

axios.defaults.baseURL = `${BASE_URL}api/`;

//-------------- GET ALL PROJECTS ------------------------
const getAll = async (page, limit, searchQuery, sort) => {
  const response = await axios.get(`projects?page=${page}&limit=${limit}&q=${searchQuery}&sort=${sort}`);
  return response.data;
};

//-------------- GET PROJECT BY ID ------------------------
const getById = async id => {
  const response = await axios.get(`projects/${id}`);
  return response.data;
};

//-------------- UPDATE VIEWS ------------------------
const updateViews = async (id, params) => {
  const response = await axios.put(`projects/view/${id}`, params);
  return response.data;
};

//-------------- UPDATE NAME ------------------------
const updateName = async (id, params) => {
  const response = await axios.put(`projects/name/${id}`, params);
  return response.data;
};

//-------------- ADD NEW PROJECT ------------------------
const addNew = async params => {
  const response = await axios.post(`projects`, params);
  return response.data.results;
};

const projectOperation = {
  getAll,
  addNew,
  getById,
  updateViews,
  updateName,
};

export default projectOperation;
