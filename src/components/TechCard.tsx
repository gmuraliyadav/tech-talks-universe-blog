
import React from 'react';
import { cn } from '@/lib/utils';

interface TechCardProps {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
}

const TechCard = ({ title, description, className, icon }: TechCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100",
      className
    )}>
      {icon && <div className="mb-4 text-tech-purple">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2 text-tech-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TechCard;
