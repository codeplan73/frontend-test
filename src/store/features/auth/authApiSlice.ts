import { apiSlice } from "@/store/api/apiSlice";
import { LOGIN } from "@/store/constant";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
