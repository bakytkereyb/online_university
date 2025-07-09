import './Paragraph.css';
import { ReactNode, CSSProperties } from 'react';

interface ParagraphProps {
  children: ReactNode;
  level?: 'p1' | 'p2';
  className?: string;
  style?: CSSProperties;
}

export default function Paragraph({ children, level = 'p1', className = '', style }: ParagraphProps) {
  const className_final = `paragraph paragraph--${level} ${className}`;
  
  return (
    <p className={className_final} style={style}>
      {children}
    </p>
  );
} 