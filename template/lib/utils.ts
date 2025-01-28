/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from 'clsx';

import Identicon from 'identicon.js';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const middleEllipsis = (str: string, len: number) => {
  if (!str) {
    return '';
  }
  return `${str.substr(0, len)}...${str.substr(str.length - len, str.length)}`;
};

export const truncateEthAddress = (
  address: string,
  _sliceStart = [0, 6],
  sliceEnd = 4,
): string => {
  if (!address) {
    return '';
  }
  return (
    address.slice(_sliceStart[0], _sliceStart[1]) +
    '...' +
    address.slice(address.length - sliceEnd, address.length)
  );
};

export const bigIntToNumber = (value: bigint) =>
  Number.isSafeInteger(value) ? Number(value) : 0;

export function buildDataUrl(address: string): string {
  return 'data:image/png;base64,' + new Identicon(address, 420).toString();
}
