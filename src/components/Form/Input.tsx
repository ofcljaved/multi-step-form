import React, { useId } from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = 'text', className = '', ...props }, ref) => {
    const id = useId();
    return (
      <div className='w-full'>
        {label && (
          <label className='mb-1 inline-block text-secondary' htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`w-full cursor-pointer rounded-lg border border-gray-200 bg-white px-3 py-3 text-black outline-none duration-200 invalid:border-destructive hover:border-primary focus:bg-gray-50 focus-visible:border-primary ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Input;
