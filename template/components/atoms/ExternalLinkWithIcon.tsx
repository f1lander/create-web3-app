'use client';
import React from 'react';
import { OpenInNewWindowIcon } from '@radix-ui/react-icons';

import { cn, truncateEthAddress } from '@/lib/utils';

type ExternalLinkWithIconProps = {
  address: string;
  url: string;
  className?: string;
};

const ExternalLinkWithIcon: React.FC<ExternalLinkWithIconProps> = ({
  address,
  url,
  className,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={cn('flex w-full items-center gap-2', className)}>
      <span
        onClick={handleClick}
        className="cursor-pointer hover:underline"
        role="link"
        tabIndex={0}
      >
        {truncateEthAddress(address)}
      </span>
      <OpenInNewWindowIcon />
    </div>
  );
};

export default ExternalLinkWithIcon;
