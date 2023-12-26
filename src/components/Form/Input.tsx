import React, { useId } from 'react';
import { FieldError } from 'react-hook-form';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  Omit<InputField, 'field'> & {
    className?: string;
    error?: FieldError;
  };
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = 'text', className = '', ...props }, ref) => {
    const id = useId();

    return (
      <div className='grid w-full grid-cols-2'>
        {label && (
          <label
            className='inline-block text-sm text-secondary sm:mb-1 sm:text-base'
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {error && (
          <p className='text-right text-sm font-medium text-destructive sm:text-base'>
            {error.message}
          </p>
        )}
        <input
          type={type}
          className={`col-span-full w-full cursor-pointer rounded border border-gray-200 bg-white px-4 py-2 text-sm text-black outline-none duration-200 hover:border-primary focus:bg-gray-50 focus-visible:border-primary sm:rounded-lg sm:px-3 sm:py-3 sm:text-base ${
            error?.message ? 'border-destructive' : null
          } ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
