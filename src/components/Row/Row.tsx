'use client';
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateData, deleteData } from '@/redux/operations';
import { AppDispatch } from '@/redux/store';
import { ITableRow } from '@/services/icap-api';
import { convertDateFormat } from '@/utils/convertDataFormat';
import { RowProps } from './Row.props';

const Row: FC<RowProps> = ({ row }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [rowData, setRowData] = useState<ITableRow>(row);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRowData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedRow: ITableRow) => {
    const newData: ITableRow = {
      ...updatedRow,
      birthday_date: convertDateFormat(updatedRow.birthday_date),
    };
    dispatch(updateData(newData));
    setIsEditing(false);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteData(id));
  };

  return (
    <tr className="grid-cols-6 even:bg-gray-300">
      <td>
        <input
          className="p-2 rounded w-full bg-inherit"
          name="name"
          onChange={handleInputChange}
          value={rowData.name}
          type="text"
          readOnly={!isEditing}
        />
      </td>

      <td>
        <input
          className="p-2 rounded w-full bg-inherit"
          name="email"
          onChange={handleInputChange}
          value={rowData.email}
          type="text"
          readOnly={!isEditing}
        />
      </td>

      <td>
        <input
          className="p-2 rounded w-full bg-inherit"
          name="birthday_date"
          onChange={handleInputChange}
          value={rowData.birthday_date}
          type="text"
          readOnly={!isEditing}
        />
      </td>

      <td>
        <input
          className="p-2 rounded w-full bg-inherit"
          name="phone_number"
          onChange={handleInputChange}
          value={rowData.phone_number}
          type="text"
          readOnly={!isEditing}
        />
      </td>

      <td>
        <input
          className="p-2 rounded w-full bg-inherit"
          name="address"
          onChange={handleInputChange}
          value={rowData.address}
          type="text"
          readOnly={!isEditing}
        />
      </td>

      <td className="flex gap-2 py-2 justify-center">
        {isEditing ? (
          <button onClick={() => handleSave(rowData)}>Save</button>
        ) : (
          <button onClick={() => handleEdit()}>Edit</button>
        )}
        <button onClick={() => handleDelete(row.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
