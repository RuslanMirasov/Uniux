import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'api';

axios.defaults.baseURL = `${BASE_URL}api/`;

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

//REGISTRATION
export const register = createAsyncThunk('auth/register', async (newData, thunkAPI) => {
  try {
    const res = await axios.post('/auth/register', newData);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

//LOGIN
export const logIn = createAsyncThunk('auth/login', async (newData, thunkAPI) => {
  try {
    const res = await axios.post('/auth/login', newData);
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

//REFRESH USER
export const refreshUser = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('/auth/current');
    return res.data;
  } catch (error) {
    console.log('Поймали ошибку в redux/auth/operations/refreshUser');
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

//LOGOUT
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

//UPDATE AVATAR
export const updateAvatar = createAsyncThunk('auth/updateAvatar', async (file, thunkApi) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);
    const res = await axios.patch('auth/avatar', formData);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});

//UPDATE USER
export const updateUser = createAsyncThunk('auth/updateUser', async (newData, thunkApi) => {
  try {
    const res = await axios.patch('auth/update', newData);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
