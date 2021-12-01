import React from 'react';

export type ColorProps = {
  /**
   * text color
   */
  textColor?: 'red' | 'black' 
  /**
   * child props
   */
  children?: JSX.Element | string
  /**
   * background color
   */
  backgroundColor?: 'white' | 'blue' | 'pink'
  /**
   * className
   */
  className?: string
};

export function Color({ textColor, children, backgroundColor, className }: ColorProps) {
  return (
    <div className={className} style={{color:textColor, backgroundColor:backgroundColor}}>
      {children}
    </div>
  );
}
