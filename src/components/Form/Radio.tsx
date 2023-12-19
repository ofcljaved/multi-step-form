import React, { useId } from 'react';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputVisible: boolean;
}
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ inputVisible, children, className, ...props }, ref) => {
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
      </div>
    );
  }
);

export default Radio;
