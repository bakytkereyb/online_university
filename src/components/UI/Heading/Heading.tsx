import './Heading.css';
import { ReactNode, CSSProperties } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 's1' | 's2';
  className?: string;
  style?: CSSProperties;
}

export default function Heading({ children, level = 'h1', className = '', style }: HeadingProps) {
  const className_final = `heading heading--${level} ${className}`;
  
  if (level === 's1' || level === 's2') {
    return <p className={className_final} style={style}>{children}</p>;
  }
  
  if (level === 'h1') return <h1 className={className_final} style={style}>{children}</h1>;
  if (level === 'h2') return <h2 className={className_final} style={style}>{children}</h2>;
  if (level === 'h3') return <h3 className={className_final} style={style}>{children}</h3>;
  if (level === 'h4') return <h4 className={className_final} style={style}>{children}</h4>;
  if (level === 'h5') return <h5 className={className_final} style={style}>{children}</h5>;
  if (level === 'h6') return <h6 className={className_final} style={style}>{children}</h6>;
  
  return <h1 className={className_final} style={style}>{children}</h1>;
} 