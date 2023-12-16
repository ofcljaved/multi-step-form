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
    {
      children,
      className = '',
      variant = 'Primary',
      type = 'button',
      ...props
    },
    ref
  ) => {
    const variantStyle: VariantStyles = {
      Primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      Secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      Destructive:
        'bg-destructive text-primary-foreground hover:bg-destructive/90',
      Outline: 'border bg-transparent shadow-sm hover:bg-muted-foreground',
      Ghost: 'hover:bg-muted-foreground',
    };

    return (
      <button
        type={type}
        className={`focus-visible:ring-ring disabled:opacity-50, inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
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
