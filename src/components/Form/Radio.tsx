import React, { useId } from 'react';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputVisible: boolean;
}
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ inputVisible, children, className, ...props }, ref) => {
    const id = useId();
    return (
      <div className='w-full'>
        <label className={className} htmlFor={id}>
          {children}
        </label>
        <input
          type='radio'
          className={inputVisible ? 'accent-primary' : 'hidden'}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    );
  }
);

export default Radio;
