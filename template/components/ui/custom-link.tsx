'use client';
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

// Define link variants using class-variance-authority
const linkVariants = cva('flex items-center transition-colors', {
  variants: {
    selected: {
      true: 'text-foreground dark:text-white hover:text-drosera',
      false: 'text-muted-foreground hover:text-drosera',
    },
  },
  defaultVariants: {
    selected: false,
  },
});

const iconVariants = cva(
  'icon flex h-9 w-9 items-center justify-center md:h-8 md:w-8',
  {
    variants: {
      selected: {
        true: 'rounded-full bg-drosera text-white',
        false: 'rounded-lg',
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

export interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  asChild?: boolean;
  label?: string;
}

const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ href, children, className, asChild = false, label, ...props }, ref) => {
    const pathname = usePathname();
    const Comp = asChild ? Slot : Link;
    const isSelected =
      pathname === href || (pathname.startsWith(`/trap`) && href === '/');

    return (
      <Comp
        href={href}
        ref={ref}
        className={cn(linkVariants({ selected: isSelected }), className)}
        {...props}
      >
        <span className={cn(iconVariants({ selected: isSelected }))}>
          {children}
        </span>
        {label && <span className="ml-2 text-sm">{label}</span>}
      </Comp>
    );
  },
);

CustomLink.displayName = 'CustomLink';

export { CustomLink, linkVariants };
