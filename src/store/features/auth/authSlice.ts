import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface User {
  id: number;
  slug: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  userAvatar: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "buddyUser",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      Cookies.set("buddy_token", token, { expires: 7 });
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("buddy_token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
