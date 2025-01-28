import { featureFlags } from '@/lib/constants';

export type FeatureFlags = keyof typeof featureFlags;

export const isFeatureEnabled = (feature: FeatureFlags) =>
  featureFlags[feature];

export interface FeatureFlagProps {
  name: FeatureFlags;
  children: React.ReactNode;
}

export const FeatureFlag: React.FC<FeatureFlagProps> = ({ name, children }) => {
  const isEnabled = isFeatureEnabled(name);

  if (isEnabled) {
    return <>{children}</>;
  }

  return null;
};
