import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

export interface CardItemProps {
  heading: string | React.ReactNode;
  contentHeading: string | React.ReactNode;
  contentSubHeading: string;
  icon: React.ReactNode;
  className?: string;
}

export default function CardItem({
  heading,
  contentHeading,
  contentSubHeading,
  icon,
  className,
}: CardItemProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{heading}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{contentHeading}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {contentSubHeading}
        </p>
      </CardContent>
    </Card>
  );
}
