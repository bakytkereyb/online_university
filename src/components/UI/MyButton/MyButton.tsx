import './MyButton.css';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  primary?: boolean;
  error?: boolean;
  rounded?: boolean;
}

export default function MyButton({ children, className = '', primary, error, rounded, ...props }: MyButtonProps) {
  let variantClass = 'my-button--default'; // default variant
  
  if (primary) {
    variantClass = 'my-button--primary';
  } else if (error) {
    variantClass = 'my-button--error';
  }
  
  const roundedClass = rounded ? 'my-button--rounded' : '';
  
  return (
    <button 
      className={`my-button ${variantClass} ${roundedClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 