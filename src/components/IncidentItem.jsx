import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, AlertCircle } from 'lucide-react';
import SeverityBadge from './SeverityBadge';

function IncidentItem({ incident }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <li className="border-b border-gray-100 last:border-b-0">
      <div className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-gray-400 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 leading-6">{incident.title}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <SeverityBadge severity={incident.severity} />
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {formatDate(incident.reported_at)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 sm:mt-0 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {isExpanded ? (
              <>
                <span>Hide Details</span>
                <ChevronUp className="ml-1.5 h-4 w-4" />
              </>
            ) : (
              <>
                <span>View Details</span>
                <ChevronDown className="ml-1.5 h-4 w-4" />
              </>
            )}
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-4 bg-gray-50 p-4 rounded-lg text-sm text-gray-700 leading-relaxed animate-fadeIn">
            <p>{incident.description}</p>
          </div>
        )}
      </div>
    </li>
  );
}

export default IncidentItem;