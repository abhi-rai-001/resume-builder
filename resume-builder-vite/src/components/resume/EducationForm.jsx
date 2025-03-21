import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const EducationForm = () => {
  const { resumeData, addItem, updateItem, deleteItem } = useResume();
  const { education } = resumeData;
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing && editingId) {
      updateItem('education', editingId, formData);
    } else {
      addItem('education', formData);
    }
    
    resetForm();
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingId(item.id);
    setFormData({
      institution: item.institution || '',
      degree: item.degree || '',
      field: item.field || '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      current: item.current || false,
      description: item.description || ''
    });
  };

  const handleDelete = (id) => {
    deleteItem('education', id);
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Institution"
            id="institution"
            name="institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
          <Input
            label="Degree"
            id="degree"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="field" className="form-label">Field of Study</label>
          <input
            type="text"
            id="field"
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="form-input"
            placeholder="Computer Science, Business, etc."
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Start Date"
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <div>
            <Input
              label="End Date"
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              disabled={formData.current}
            />
            <div className="flex items-center mt-1">
              <input
                type="checkbox"
                id="current"
                name="current"
                checked={formData.current}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
              />
              <label htmlFor="current" className="ml-2 block text-sm text-secondary-700">
                I am currently studying here
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your academic achievements, coursework, or any relevant projects..."
            rows="4"
            className="form-input"
          />
        </div>
        
        <div className="flex justify-end space-x-2">
          {isEditing && (
            <Button
              type="button"
              variant="secondary"
              onClick={resetForm}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
          >
            {isEditing ? 'Update Education' : 'Add Education'}
          </Button>
        </div>
      </form>
      
      {education.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-secondary-700 mb-3">Education</h3>
          {education.map((item) => (
            <Card key={item.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{item.degree}</h4>
                  <p className="text-secondary-600">{item.institution}</p>
                  <p className="text-sm text-secondary-500">
                    {item.startDate && new Date(item.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    {' - '}
                    {item.current ? 'Present' : item.endDate && new Date(item.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
                  {item.field && (
                    <p className="text-sm text-secondary-500 mt-1">Field: {item.field}</p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="text-primary-600 hover:text-primary-800"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {item.description && (
                <p className="text-sm mt-2 whitespace-pre-line">{item.description}</p>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;