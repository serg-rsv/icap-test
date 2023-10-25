import axios from 'axios';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api/';

export interface ITableRow {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address?: string;
}

interface ITableResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ITableRow[];
}

export const getTable = async (currentPage: number) => {
  return await axios.get<ITableResponse>(
    `table/?limit=10&offset=${(currentPage - 1) * 10}`
  );
};

export const updateRow = async (row: ITableRow) => {
  const { id, ...rest } = row;
  return await axios.patch<ITableRow>(`table/${id}/`, rest);
};

export const deleteRow = async (id: number) => {
  await axios.delete(`table/${id}/`);
  return id;
};
