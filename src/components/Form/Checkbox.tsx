import React, { useId } from 'react';
import { FieldError } from 'react-hook-form';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputVisible: boolean;
  error?: FieldError;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ inputVisible, children, className, error, ...props }, ref) => {
    const id = useId();
    return (
      <div className='relative w-full'>
        <input
          type='checkbox'
          className={`peer ${inputVisible ? 'accent-primary' : 'hidden'}`}
          ref={ref}
          {...props}
          id={id}
        />
        <label className={className} htmlFor={id}>
          {children}
        </label>
        {error && error.message}
      </div>
    );
  }
);

export default Checkbox;
