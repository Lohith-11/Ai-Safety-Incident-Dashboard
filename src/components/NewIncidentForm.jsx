import React, { useState } from 'react';
import { AlertTriangle, Type, FileText, Shield } from 'lucide-react';

function NewIncidentForm({ onSubmit }) {
  const initialState = {
    title: '',
    description: '',
    severity: 'Medium'
  };
  
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      setFormData(initialState);
    }
  };
  
  return (
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <AlertTriangle className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900">Report New Incident</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Type className="h-4 w-4 mr-2" />
            Title <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`form-input ${errors.title ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter a descriptive title"
          />
          {errors.title && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              {errors.title}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="description" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <FileText className="h-4 w-4 mr-2" />
            Description <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            className={`form-input ${errors.description ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Provide detailed information about the incident"
          />
          {errors.description && (
            <p className="mt-1.5 text-sm text-red-600 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-1" />
              {errors.description}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="severity" className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Shield className="h-4 w-4 mr-2" />
            Severity Level <span className="text-red-500 ml-1">*</span>
          </label>
          <select
            id="severity"
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            className="form-select"
          >
            <option value="Low">Low - Minor Impact</option>
            <option value="Medium">Medium - Significant Impact</option>
            <option value="High">High - Critical Impact</option>
          </select>
        </div>
        
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="btn-primary"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewIncidentForm;