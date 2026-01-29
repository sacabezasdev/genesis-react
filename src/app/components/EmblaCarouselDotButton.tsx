'use client';

import * as React from 'react';

export type DotButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DotButton({ className = '', children, ...rest }: DotButtonProps) {
  return (
    <button type="button" className={className} {...rest}>
      {children}
    </button>
  );
}
