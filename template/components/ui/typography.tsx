import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const typeVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-5xl font-bold',
      h2: 'text-4xl font-bold',
      h3: 'text-3xl font-bold',
      h4: 'text-2xl font-bold',
      body: 'text-base',
      blockquote: 'pl-4 border-l-4 italic',
      inlineCode: 'font-mono bg-gray-200 px-1 py-0.5 rounded',
      lead: 'text-lg font-medium',
      large: 'text-xl',
      small: 'text-sm',
      muted: 'text-gray-500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typeVariants> {
  asChild?: boolean;
}

export const Typography = React.forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ variant, className, asChild, ...rest }, ref) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp
      ref={ref}
      className={typeVariants({ variant, className })}
      {...rest}
    />
  );
});

Typography.displayName = 'Typography';
