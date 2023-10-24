import { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  disabled = false,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'flex items-center  rounded-xl border border-solid py-2.5 px-10 text-xl w-[214px]',
        className,
        {
          ['justify-center border-blue-600 bg-blue-600 text-white duration-300 hover:border-white focus:border-white']:
            !disabled,
          ['primary pointer-events-none justify-center border-gray-600 bg-gray-600 text-white']:
            disabled,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
