import { FC } from 'react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

import Logout from '@/components/Logout';

const NavBar: FC = async () => {
  const session = await getServerSession();

  return (
    <header>
      <nav>
        <ul className="flex gap-4 justify-center py-4">
          <li>
            <Link className="hover:underline p-3 block" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline p-3 block" href="/table">
              Table
            </Link>
          </li>
          {!session && (
            <li>
              <Link className="hover:underline p-3 block" href="/login">
                LogIn
              </Link>
            </li>
          )}
          {!!session && (
            <li>
              <Logout />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
