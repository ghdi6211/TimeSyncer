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
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.username = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = undefined;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
