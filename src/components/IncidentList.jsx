import React from 'react';
import IncidentItem from './IncidentItem';

function IncidentList({ incidents }) {
  if (incidents.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">No incidents found with the current filters.</p>
      </div>
    );
  }
  
  return (
    <ul className="divide-y divide-gray-200">
      {incidents.map(incident => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </ul>
  );
}

export default IncidentList;