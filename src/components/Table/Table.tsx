'use client';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from '@/components/Row';
import Pagination from '@/components/Pagination';
import {
  getCurrentPage,
  getNextURL,
  getPrevURL,
  getTableData,
  getTotalPages,
} from '@/redux/selectors';
import { fetchData } from '@/redux/operations';
import { setCurrentPage } from '@/redux/slice';
import { AppDispatch } from '@/redux/store';
import { TableProps } from './Table.props';

const Table: FC<TableProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(getTableData);
  const currentPage = useSelector(getCurrentPage);
  const totalPages = useSelector(getTotalPages);
  const next = useSelector(getNextURL);
  const prev = useSelector(getPrevURL);

  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [dispatch, currentPage]);

  const onPageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="w-full">
      <table className="min-w-full border-b-2">
        <thead className="border-b-2 bg-slate-300">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">
              Birthday Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        next={next}
        prev={prev}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Table;
