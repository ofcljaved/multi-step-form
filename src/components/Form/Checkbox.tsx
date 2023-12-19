import React, { useId } from 'react';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputVisible: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ inputVisible, children, className, ...props }, ref) => {
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
      </div>
    );
  }
);

export default Checkbox;
