import { configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "../redux/reducers/authorizationReducer";
import centersReducer from "../redux/reducers/centersReducer";

export const store = configureStore({
  devTools: true,
  reducer: {
    centersReducer: centersReducer,
    authorizationReducer: authorizationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
