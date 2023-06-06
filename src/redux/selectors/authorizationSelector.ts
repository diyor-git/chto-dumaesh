import { RootState } from "../../store/store";

export const getAuthStatus = (state: RootState) => {
  return state.authorizationReducer.isAuth;
};
export const getRegisterModal = (state: RootState) => {
  return state.authorizationReducer.registerModal;
};

export const getUser = (state: RootState) => {
  return state.authorizationReducer.profile;
};
export const getProfileLoad = (state: RootState) => {
  return state.authorizationReducer.profileLoad;
};
