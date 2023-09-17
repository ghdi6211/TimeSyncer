import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  username?: string;
}

const initialState: AuthState = {
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.username = undefined;
    }
  }
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
