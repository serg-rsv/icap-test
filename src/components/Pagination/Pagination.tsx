'use client';
import { FC } from 'react';
import cn from 'classnames';

import { PaginationProps } from './Pagination.props';

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  next,
  prev,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <ul className="flex gap-2 flex-wrap justify-center">
        <li>
          <button
            className={cn('p-1 hover:bg-blue-500', {
              ['cursor-default hover:bg-inherit']: !prev,
            })}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={!prev}
          >
            &lt;
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li
            key={page}
            className={cn('hover:bg-blue-500', {
              ['bg-blue-600 ']: page === currentPage,
            })}
          >
            <button className="p-1" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className={cn('p-1 hover:bg-blue-500', {
              ['cursor-default hover:bg-inherit']: !next,
            })}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={!next}
          >
            &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
