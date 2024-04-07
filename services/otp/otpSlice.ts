import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OtpState {
  email: string;
}

const initialState: OtpState = {
  email: "",
};

const otpSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    setEmail: (state: OtpState, action: PayloadAction<OtpState>) => {
      const { email } = action.payload;
      state.email = email;
    },
  },
});

export const { setEmail } = otpSlice.actions;
export const selectCurrentRefreshToken = (state: { otp: OtpState }) =>
  state.otp.email;
