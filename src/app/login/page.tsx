import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import LoginForm from '@/components/LoginForm';

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-12 text-2xl">Please login</h1>
      <LoginForm />
    </main>
  );
}
