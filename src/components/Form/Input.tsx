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
          <label className='mb-1 inline-block text-secondary' htmlFor={id}>
            {label}
          </label>
        )}
        {error && (
          <p className='text-right font-semibold text-destructive'>
            {error.message}
          </p>
        )}
        <input
          type={type}
          className={`col-span-full w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-3 text-black outline-none duration-200 hover:border-primary focus:bg-gray-50 focus-visible:border-primary ${
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
