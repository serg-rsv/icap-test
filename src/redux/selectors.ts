import { RootState } from './store';

export const getTableData = (state: RootState) => state.tableReducer.data;
export const getNextURL = (state: RootState) => state.tableReducer.nextURL;
export const getPrevURL = (state: RootState) => state.tableReducer.prevURL;
export const getCurrentPage = (state: RootState) =>
  state.tableReducer.currentPage;
export const getTotalPages = (state: RootState) =>
  state.tableReducer.totalPages;
export const getLoadingStatus = (state: RootState) =>
  state.tableReducer.loading;
export const getError = (state: RootState) => state.tableReducer.error;
