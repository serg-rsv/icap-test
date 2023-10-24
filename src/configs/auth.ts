import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          return null;
        }

        const res = await fetch(
          'https://technical-task-api.icapgroupgmbh.com/api/login/',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
          }
        );
        const data = await res.json();

        if (res.ok && data.message === 'Authentication successful.') {
          return data.message;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};
