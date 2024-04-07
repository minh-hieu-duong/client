import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@/types";

export interface AuthState {
  accessToken: string;
  refreshToken: string;
  user: User | null;
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<AuthState>) => {
      const { accessToken, refreshToken, user } = action.payload;
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
      state.user = user;
    },
    logOut: (state: AuthState) => {
      state.refreshToken = "";
      state.accessToken = "";
      state.user = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentRefreshToken = (state: { auth: AuthState }) =>
  state.auth.refreshToken;
export const selectCurrentAccessToken = (state: { auth: AuthState }) =>
  state.auth.accessToken;

export const selectCurrentUser = (state: { auth: AuthState }) =>
  state.auth.user;
