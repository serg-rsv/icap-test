'use client';
import { FC, useState } from 'react';
import cn from 'classnames';

import { ICONS } from '@/components/icons/icons.const';
import { InputProps } from './Input.props';

const Input: FC<InputProps> = ({
  label,
  name,
  register,
  error,
  button = false,
  className = '',
  type = 'text',
  ...rest
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    inputType === 'text' ? setInputType('password') : setInputType('text');
  };

  return (
    <div className={cn('relative w-full', className)}>
      <input
        id={name}
        className={cn(
          'h-12 peer placeholder:text-transparent rounded-xl px-6 py-2 w-full text-xl dark:text-black',
          {
            ['pr-14']: button,
            ['border border-red-700 text-red-700 dark:text-red-700']: error,
          }
        )}
        placeholder={label}
        type={inputType}
        {...register}
        {...rest}
      />
      {button && (
        <button
          className="absolute right-6 top-3"
          type="button"
          onClick={togglePassword}
          aria-label={
            inputType === 'password' ? 'Show password' : 'Hide password'
          }
        >
          {inputType === 'password' ? (
            <ICONS.EYE_CLOSE
              width="24px"
              height="24px"
              className="transition-all stroke-black hover:stroke-gray-500"
            />
          ) : (
            <ICONS.EYE_OPEN
              width="24px"
              height="24px"
              className="transition-all stroke-black hover:stroke-slate-600"
            />
          )}
        </button>
      )}
      <label
        className={cn(
          'absolute transition-all -top-6 left-4 peer-focus:-top-6 peer-focus:left-4 peer-placeholder-shown:top-2 peer-placeholder-shown:left-6 text-base peer-focus:text-base peer-placeholder-shown:text-xl text-black dark:text-white peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:text-black ',
          {
            ['peer-placeholder-shown:text-red-700']: error,
          }
        )}
        htmlFor={name}
      >
        {label}
      </label>
      {error && (
        <p
          className="
          absolute
          px-1
          flex
          items-center
          gap-2
          text-red-700
          w-full"
        >
          <ICONS.EXCLAMATION_MARK width="14px" height="14px" />
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
