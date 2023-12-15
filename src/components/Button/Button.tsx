import React from 'react';

type Variants = 'Primary' | 'Secondary' | 'Destructive' | 'Outline' | 'Ghost';
type ButtonType = 'button' | 'submit' | 'reset';
type VariantStyles = { [K in Variants]: string };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variants;
  type?: ButtonType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, variant = 'Primary', type = 'button', ...props },
    ref
  ) => {
    const variantStyle: VariantStyles = {
      Primary: 'bg-primary',
      Secondary: '',
      Destructive: '',
      Outline: '',
      Ghost: '',
    };

    return (
      <button
        type={type}
        className={`"inline-flex focus-visible:ring-ring disabled:opacity-50", items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none ${variantStyle[variant]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
