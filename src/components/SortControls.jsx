import React from 'react';
import { ArrowUpDown } from 'lucide-react';

function SortControls({ sortOrder, setSortOrder }) {
  return (
    <div className="flex items-center space-x-3">
      <ArrowUpDown className="h-5 w-5 text-gray-400" />
      <select
        id="date-sort"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="form-select"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
    </div>
  );
}

export default SortControls;