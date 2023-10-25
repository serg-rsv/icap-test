'use client';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { LoginFormProps } from './LoginForm.props';

type FormInputsType = {
  username: string;
  password: string;
};

const LoginForm: FC<LoginFormProps> = () => {
  const [errorAuth, setErrorAuth] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm<FormInputsType>({ mode: 'onChange' });
  const router = useRouter();

  const onSubmit = async (data: FormInputsType) => {
    setErrorAuth(null);
    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (response?.error) {
      setErrorAuth(
        'Sign in failed. Check the details you provided are correct.'
      );
    } else {
      router.refresh();
      router.push('/table');
    }
  };

  return (
    <form
      className="flex flex-col gap-12 mb-4 items-center w-[368px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {!!errorAuth && (
        <div className="bg-red-600 rounded-xl p-4">
          <p>{errorAuth}</p>
        </div>
      )}
      <Input
        label="Username"
        name="username"
        type="text"
        register={register('username', {
          required: 'This field is required',
          maxLength: {
            value: 150,
            message: 'Max length is 150 chars',
          },
        })}
        error={errors.username?.message}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        button
        register={register('password', {
          required: 'This field is required',
          maxLength: {
            value: 128,
            message: 'Max length is 128 symbols',
          },
        })}
        error={errors.password?.message}
      />
      <Button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
