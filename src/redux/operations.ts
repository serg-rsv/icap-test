import { createAsyncThunk } from '@reduxjs/toolkit';

import { getTable, updateRow, deleteRow, ITableRow } from '@/services/icap-api';

export const fetchData = createAsyncThunk(
  'table/fetchData',
  async (currentPage: number, { rejectWithValue }) => {
    try {
      const { data } = await getTable(currentPage);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateData = createAsyncThunk(
  'table/updateData',
  async (row: ITableRow, { rejectWithValue }) => {
    try {
      const { data } = await updateRow(row);
      return data;
    } catch (error) {
      return rejectWithValue('update error');
    }
  }
);

export const deleteData = createAsyncThunk(
  'table/deleteData',
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteRow(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
