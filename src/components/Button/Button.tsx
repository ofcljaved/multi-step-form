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
      Ghost: 'hover:bg-muted-foreground/20',
    };

    return (
      <button
        type={type}
        className={`whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 ${variantStyle[variant]} ${className}`}
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
