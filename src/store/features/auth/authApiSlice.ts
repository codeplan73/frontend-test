import { apiSlice } from "@/store/api/apiSlice";
import { LOGIN, REGISTER, VARIFY_OTP, RESEND_OTP } from "@/store/constant";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: REGISTER,
        method: "POST",
        body: userData,
      }),
    }),

    verifyOtp: builder.mutation({
      query: ({ otp, email }) => ({
        url: VARIFY_OTP,
        method: "POST",
        body: { otp, email },
      }),
    }),

    resendOtp: builder.mutation({
      query: (email) => ({
        url: RESEND_OTP,
        method: "POST",
        body: { email },
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useLoginMutation,
} = authApiSlice;
