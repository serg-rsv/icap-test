import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  button?: boolean;
  className?: string;
  type?: 'text' | 'password';
  error?: string | undefined;
}
