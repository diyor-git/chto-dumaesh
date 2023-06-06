import { RootState } from "../../store/store";

export const getAllCenters = (state: RootState) => {
  return state.centersReducer.centers;
};
export const getSearchCenters = (state: RootState) => {
  return state.centersReducer.searchCenters;
};
export const getClearSearch = (state: RootState) => {
  return state.centersReducer.clearSearch;
};
export const getOpenSearch = (state: RootState) => {
  return state.centersReducer.openSearch;
};
export const categoryList = (state: RootState) => {
  return state.centersReducer.centersCategory;
};
export const getCenterDetail = (state: RootState) => {
  return state.centersReducer.centerDetail;
};
export const getLoadingCenters = (state: RootState) => {
  return state.centersReducer.loadingCenters;
};
