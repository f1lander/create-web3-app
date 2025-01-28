export const truncateEthAddress = (
  address: `0x${string}` | 'none' | string,
  length = 6,
) => {
  if (!address) {
    return '';
  }
  return `${address.slice(0, length)}...${address.slice(-length)}`;
};
