import React, { useState } from 'react';
import { AlertTriangle, Shield } from 'lucide-react';
import IncidentList from './components/IncidentList';
import FilterControls from './components/FilterControls';
import SortControls from './components/SortControls';
import NewIncidentForm from './components/NewIncidentForm';
import { initialIncidents } from './data/mockData';

function App() {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [showForm, setShowForm] = useState(false);

  const filteredIncidents = filter === 'All' 
    ? incidents 
    : incidents.filter(incident => incident.severity === filter);

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const addIncident = (newIncident) => {
    const incidentWithId = {
      ...newIncident,
      id: incidents.length + 1,
      reported_at: new Date().toISOString()
    };
    setIncidents([...incidents, incidentWithId]);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pb-12">
      <header className="bg-white shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Safety Incident Dashboard</h1>
                <p className="text-sm text-gray-500 mt-1">Monitor and report AI safety incidents</p>
              </div>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              {showForm ? 'Cancel Report' : 'Report Incident'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {showForm && (
          <div className="card animate-slideDown">
            <NewIncidentForm onSubmit={addIncident} />
          </div>
        )}

        <div className="card">
          <div className="px-6 py-5 border-b border-gray-100 bg-white rounded-t-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-semibold text-gray-900">Active Incidents</h2>
                <span className="px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {sortedIncidents.length}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <FilterControls filter={filter} setFilter={setFilter} />
                <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
              </div>
            </div>
          </div>
          
          <IncidentList incidents={sortedIncidents} />
        </div>
      </main>
    </div>
  );
}

export default App;