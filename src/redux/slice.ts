import { createSlice } from '@reduxjs/toolkit';

import { fetchData, updateData, deleteData } from './operations';
import { ITableRow } from '@/services/icap-api';

interface IInitialState {
  data: ITableRow[];
  totalPages: number;
  currentPage: number;
  prevURL: string | null;
  nextURL: string | null;
  loading: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: any;
}

const initialState: IInitialState = {
  data: [],
  totalPages: 1,
  currentPage: 1,
  prevURL: null,
  nextURL: null,
  loading: 'idle',
  error: null,
};

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        const { count, next, previous, results } = action.payload;
        state.data = results;
        state.totalPages = Math.ceil(count / 10);
        state.nextURL = next;
        state.prevURL = previous;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
      })
      .addCase(updateData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = state.data.map((row) =>
          row.id === action.payload.id ? (row = action.payload) : row
        );
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.data = state.data.filter((row) => row.id !== action.payload);
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage } = tableSlice.actions;
export default tableSlice.reducer;
