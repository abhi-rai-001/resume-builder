import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

const ExperienceForm = () => {
  const { resumeData, addItem, updateItem, deleteItem } = useResume();
  const { experience } = resumeData;
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
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
      updateItem('experience', editingId, formData);
    } else {
      addItem('experience', formData);
    }
    
    resetForm();
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingId(item.id);
    setFormData({
      company: item.company || '',
      position: item.position || '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      current: item.current || false,
      description: item.description || ''
    });
  };

  const handleDelete = (id) => {
    deleteItem('experience', id);
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      company: '',
      position: '',
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
            label="Company"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
          <Input
            label="Position"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
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
                I currently work here
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="form-label">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities and achievements..."
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
            {isEditing ? 'Update Experience' : 'Add Experience'}
          </Button>
        </div>
      </form>
      
      {experience.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-secondary-700 mb-3">Work Experience</h3>
          {experience.map((item) => (
            <Card key={item.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{item.position}</h4>
                  <p className="text-secondary-600">{item.company}</p>
                  <p className="text-sm text-secondary-500">
                    {item.startDate && new Date(item.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    {' - '}
                    {item.current ? 'Present' : item.endDate && new Date(item.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </p>
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

export default ExperienceForm;