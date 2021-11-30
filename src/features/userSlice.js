import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userInfo = action.payload
    },
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export const selectUser = (state) => state.user.userInfo;

export default userSlice.reducer;
