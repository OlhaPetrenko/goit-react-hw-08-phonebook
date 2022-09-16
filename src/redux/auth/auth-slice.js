import { createSlice } from '@reduxjs/toolkit';

import { register, login, logOut, current } from './auth-operations';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [register.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [login.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLogin = true;
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logOut.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = {};
      state.token = '';
      state.isLogin = false;
    },
    [logOut.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [current.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [current.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.isLogin = true;
    },
    [current.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.token = '';
    },
  },
});
