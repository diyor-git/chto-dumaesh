import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authorizationApi } from "../../api/api";

// TYPES

type TelegramAuth = {
  auth_date: number;
  first_name: string;
  gender: null;
  id: number;
  password: string;
  photo_url: string;
  username: string;
};

type Profile = {
  dob?: string;
  email?: string;
  first_name?: string;
  gender?: string;
  id: number;
  last_name?: string;
  phone?: string;
  username?: string;
  photo_url?: string;
  created_at?: string;
};

// THUNK

export const telegramAuth = createAsyncThunk(
  "telegramAuth",
  async (data: TelegramAuth, thunkAPI) => {
    try {
      const response = await authorizationApi.telegramAuth(data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getProfile = createAsyncThunk(
  "getProfile",
  async (__, thunkAPI) => {
    try {
      const response = await authorizationApi.getProfile();
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const updateProfile = createAsyncThunk(
  "updateProfile",
  async (data: any, thunkAPI) => {
    try {
      const response = await authorizationApi.updateProfile(data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const refreshToken = createAsyncThunk(
  "refreshToken",
  async (data: any, thunkAPI) => {
    try {
      const response = await authorizationApi.refreshToken(data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const logOut = createAsyncThunk("logOut", async (__, thunkAPI) => {
  try {
    const response = await authorizationApi.logOut();
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.response);
  }
});

type AuthorizationInitialState = {
  telegramAuth: {
    email: string;
    name: string;
    refresh: string;
    token: string;
  };
  isAuth: boolean;
  profile: Profile | null;
  profileLoad: boolean;
  registerModal: boolean;
};

const initialState: AuthorizationInitialState = {
  telegramAuth: {
    email: "",
    name: "",
    refresh: "",
    token: "",
  },
  isAuth: false,
  profile: null,
  registerModal: false,
  profileLoad: false,
};

export const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setRegisterModal: (
      state: { registerModal: any },
      action: { payload: any }
    ) => {
      state.registerModal = action.payload;
    },
    setAuthStatus: (state: { isAuth: any }, action: { payload: any }) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: {
    [telegramAuth.fulfilled.type]: (state, action: any) => {
      state.telegramAuth = action.payload;
      state.isAuth = true;
      localStorage.setItem("Refresh", action.payload.refresh);
      localStorage.setItem("Token", action.payload.token);
      state.registerModal = false;
    },
    [getProfile.fulfilled.type]: (state, action: any) => {
      state.profile = action.payload;
      state.isAuth = true;
      state.profileLoad = true;
    },
    [getProfile.pending.type]: (state, action: any) => {
      state.profile = action.payload;
      state.isAuth = true;
      state.profileLoad = false;
    },
    [getProfile.rejected.type]: (state, action: any) => {
      state.isAuth = false;
      state.profileLoad = true;
      localStorage.setItem("Token", action.payload.token);
      getProfile();
    },
    [logOut.fulfilled.type]: (state, action: any) => {
      state.isAuth = false;
      localStorage.removeItem("Token");
    },
    [refreshToken.fulfilled.type]: (state, action: any) => {
      state.isAuth = true;
      localStorage.setItem("Token", action.payload.token);
    },
    [updateProfile.fulfilled.type]: (state, action: any) => {
      state.profile = action.payload;
      getProfile();
    },
  },
});

export const { setRegisterModal, setAuthStatus } = authorizationSlice.actions;
export default authorizationSlice.reducer;
