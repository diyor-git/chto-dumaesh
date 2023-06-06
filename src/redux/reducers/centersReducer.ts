import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { centersApi } from "../../api/api";

// TYPES

type CenterStars = {
  star: any;
  userid: any;
  items: any;
};
type CenterDetailType = {
  id: number;
  title: string;
  price_from: string;
  price_to: string;
  district: string;
  avg_star: number;
  image: string | null;
  wallpaper: string | null;
  description: string;
  description_ru: string;
  description_uz: string;
  mydes: string;
  phone: string;
  email: string;
  location: string;
  working_time: string;
  website: string;
  tags: [
    {
      id: number;
      title: string;
      title_ru: string;
      title_uz: string;
    }
  ];
  category: [
    {
      id: number;
      title: string;
      title_ru: string;
      title_uz: string;
    }
  ];
};

// THUNK
export const getCenters = createAsyncThunk(
  "getCenters",
  async (__, thunkAPI) => {
    try {
      const response = await centersApi.getCenters();
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getCategoryList = createAsyncThunk(
  "getCategoryList",
  async (__, thunkAPI) => {
    try {
      const response = await centersApi.getCategoryList();
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getDetailCenter = createAsyncThunk(
  "getDetailCenter",
  async (id: any, thunkAPI) => {
    try {
      const response = await centersApi.getDetailCenter(id);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const searchCenters = createAsyncThunk(
  "searchCenters",
  async (search: string, thunkAPI) => {
    try {
      const response = await centersApi.searchCenters(search);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const postEmail = createAsyncThunk(
  "postEmail",
  async (data: any, thunkAPI) => {
    try {
      const response = await centersApi.postEmail(data);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const centerStars = createAsyncThunk(
  "centerStars",
  async (stars: CenterStars, thunkAPI) => {
    try {
      const response = await centersApi.centerStars(stars);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const filterCategory = createAsyncThunk(
  "filterCategory",
  async (category: string, thunkAPI) => {
    try {
      const response = await centersApi.filterCategory(category);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const filterDistrict = createAsyncThunk(
  "filterDistrict",
  async (stars: string, thunkAPI) => {
    try {
      const response = await centersApi.filterDistrict(stars);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const filterPrice = createAsyncThunk(
  "filterPrice",
  async (stars: string, thunkAPI) => {
    try {
      const response = await centersApi.filterPrice(stars);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
type initialStateType = {
  centers: [];
  searchCenters: [];
  centersCategory: [];
  centerDetail: CenterDetailType | null;
  clearSearch: boolean;
  openSearch: boolean;
  loadingCenters: boolean;
};

const initialState: initialStateType = {
  centers: [],
  searchCenters: [],
  centerDetail: null,
  centersCategory: [],
  openSearch: false,
  clearSearch: false,
  loadingCenters: true,
};

export const centersSlice = createSlice({
  name: "centers",
  initialState,
  reducers: {
    setOpenSearch: (state, action: any) => {
      state.openSearch = action.payload;
    },
    setClearSearch: (state, action) => {
      state.clearSearch = action.payload;
    },
  },
  extraReducers: {
    [getCenters.fulfilled.type]: (state, action: any) => {
      state.centers = action.payload;
      state.loadingCenters = false;
    },
    [getCenters.rejected.type]: (state, action: any) => {
      state.loadingCenters = true;
    },
    [getCenters.pending.type]: (state, action: any) => {
      state.loadingCenters = true;
    },
    [getCategoryList.fulfilled.type]: (state, action: any) => {
      state.centersCategory = action.payload;
    },
    [getDetailCenter.fulfilled.type]: (state, action: any) => {
      state.centerDetail = action.payload;
    },
    [searchCenters.fulfilled.type]: (state, action: any) => {
      state.searchCenters = action.payload;
    },
    [filterCategory.fulfilled.type]: (state, action: any) => {
      state.centers = action.payload;
    },
    [filterDistrict.fulfilled.type]: (state, action: any) => {
      state.centers = action.payload;
    },
    [filterPrice.fulfilled.type]: (state, action: any) => {
      state.centers = action.payload;
    },
  },
});

export const { setClearSearch, setOpenSearch } = centersSlice.actions;
export default centersSlice.reducer;
