'use client';
import { FC } from 'react';
import { signOut } from 'next-auth/react';

const Logout: FC = () => {
  return (
    <span
      className="cursor-pointer hover:underline p-3 block"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      LogOut
    </span>
  );
};

export default Logout;
