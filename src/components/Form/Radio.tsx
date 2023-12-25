import React, { useId } from 'react';
import { FieldError } from 'react-hook-form';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputVisible: boolean;
  error?: FieldError;
}
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ inputVisible, children, className, error, ...props }, ref) => {
    const id = useId();

    return (
      <div className='relative w-full'>
        <input
          type='radio'
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

export default Radio;
