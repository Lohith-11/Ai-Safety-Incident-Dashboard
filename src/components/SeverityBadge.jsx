import React from 'react';
import { AlertOctagon, AlertTriangle, AlertCircle } from 'lucide-react';

function SeverityBadge({ severity }) {
  const getBadgeConfig = () => {
    switch (severity) {
      case 'Low':
        return {
          classes: 'bg-green-50 text-green-700 ring-green-600/20',
          icon: AlertCircle
        };
      case 'Medium':
        return {
          classes: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
          icon: AlertTriangle
        };
      case 'High':
        return {
          classes: 'bg-red-50 text-red-700 ring-red-600/20',
          icon: AlertOctagon
        };
      default:
        return {
          classes: 'bg-gray-50 text-gray-700 ring-gray-600/20',
          icon: AlertCircle
        };
    }
  };

  const { classes, icon: Icon } = getBadgeConfig();

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ring-1 ring-inset ${classes}`}>
      <Icon className="h-3.5 w-3.5" />
      {severity}
    </span>
  );
}

export default SeverityBadge;