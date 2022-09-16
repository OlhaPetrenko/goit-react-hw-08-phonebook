import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from '../../shared/api/auth-api';

export const register = createAsyncThunk(
  'auth/register',
  async function (data, { rejectWithValue }) {
    try {
      const response = await registerUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async function (data, { rejectWithValue }) {
    try {
      const response = await loginUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async function (_, { rejectWithValue }) {
    try {
      const response = await logoutUser();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async function (_, { rejectWithValue, getState }) {
    try {
      const state = getState();
      const response = await currentUser(state.auth.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
