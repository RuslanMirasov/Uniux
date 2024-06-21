import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, refreshUser, logOut, updateAvatar, updateUser } from './operations';

const initialState = {
  user: { _id: null, name: null, email: null, avatarUrl: null, subscribe: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  loading: false,
  isAvatarLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      //-----------REGISTRATION------------
      .addCase(register.pending, state => {
        state.loading = true;
      })
      .addCase(register.fulfilled, state => {
        state.error = null;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //-----------UPDATE USER------------
      .addCase(updateUser.pending, state => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.subscribe = action.payload.subscribe;
        state.error = null;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      //------------LOGIN------------
      .addCase(logIn.pending, state => {
        state.loading = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.loading = false;
      })
      //------------REFRESH USER------------
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.token = null;
      })
      //------------LOGOUT------------
      .addCase(logOut.fulfilled, state => {
        state.user = { _id: null, name: null, email: null, avatarUrl: null, subscribe: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      //------------UPDATE AVATAR------------
      .addCase(updateAvatar.pending, state => {
        state.isAvatarLoading = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.isAvatarLoading = false;
        state.user.avatarUrl = action.payload.avatarUrl;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.error = action.payload;
        state.isAvatarLoading = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export const authReducer = authSlice.reducer;
