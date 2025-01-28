import { EXPLORER_BASE_URL } from '@/lib/constants';
import { isAddress, isHash } from 'viem';
import ExternalLinkWithIcon from './ExternalLinkWithIcon';

type ExplorerAddressProps =
  | {
      address: string;
      explorerPath?: string;
      skipValidation?: boolean;
      className?: string;
    }
  | {
      hash: string;
      explorerPath?: string;
      skipValidation?: boolean;
      className?: string;
    };

/**
 *
 * @param address string a valid ethereum address
 * @returns null if address is not valid or a link to the address on the explorer
 */
export const EtherscanExplorer: React.FC<ExplorerAddressProps> = (props) => {
  if ('hash' in props) {
    const {
      hash,
      explorerPath = '/tx',
      skipValidation = false,
      className,
    } = props;
    if (!isHash(hash) && !skipValidation && hash !== '') {
      console.warn('Invalid hash', hash);
      return null;
    }
    return (
      <ExternalLinkWithIcon
        className={className}
        address={hash}
        url={`${EXPLORER_BASE_URL}${explorerPath}/${hash}`}
      />
    );
  }
  const {
    address,
    explorerPath = '/address',
    skipValidation = false,
    className,
  } = props;

  if (!isAddress(address) && !skipValidation && address !== '') {
    console.warn('Invalid address', address);
    return null;
  }
  return (
    <ExternalLinkWithIcon
      className={className}
      address={address}
      url={`${EXPLORER_BASE_URL}${explorerPath}/${address}`}
    />
  );
};
