import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

const ProjectsForm = () => {
  const { resumeData, addItem, updateItem, deleteItem } = useResume();
  const { projects } = resumeData;
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    current: false,
    url: ''
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
      updateItem('projects', editingId, formData);
    } else {
      addItem('projects', formData);
    }
    
    resetForm();
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingId(item.id);
    setFormData({
      name: item.name || '',
      description: item.description || '',
      startDate: item.startDate || '',
      endDate: item.endDate || '',
      current: item.current || false,
      url: item.url || ''
    });
  };

  const handleDelete = (id) => {
    deleteItem('projects', id);
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      current: false,
      url: ''
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Project Name"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Project URL"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="https://example.com"
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
                I am currently working on this project
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="form-label">Project Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project, technologies used, and your role..."
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
            {isEditing ? 'Update Project' : 'Add Project'}
          </Button>
        </div>
      </form>
      
      {projects.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-secondary-700 mb-3">Projects</h3>
          {projects.map((item) => (
            <Card key={item.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-800 text-sm"
                    >
                      {item.url}
                    </a>
                  )}
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

export default ProjectsForm;