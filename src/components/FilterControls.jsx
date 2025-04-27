import React from 'react';
import { Filter } from 'lucide-react';

function FilterControls({ filter, setFilter }) {
  const severityOptions = ['All', 'Low', 'Medium', 'High'];
  
  return (
    <div className="flex items-center space-x-3">
      <Filter className="h-5 w-5 text-gray-400" />
      <select
        id="severity-filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-select"
      >
        {severityOptions.map(option => (
          <option key={option} value={option}>
            {option} Severity
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterControls;