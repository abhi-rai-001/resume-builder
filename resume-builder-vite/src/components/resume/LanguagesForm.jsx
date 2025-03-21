import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

const LanguagesForm = () => {
  const { resumeData, addItem, updateItem, deleteItem } = useResume();
  const { languages } = resumeData;
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    language: '',
    proficiency: 'Basic'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing && editingId) {
      updateItem('languages', editingId, formData);
    } else {
      addItem('languages', formData);
    }
    
    resetForm();
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingId(item.id);
    setFormData({
      language: item.language || '',
      proficiency: item.proficiency || 'Basic'
    });
  };

  const handleDelete = (id) => {
    deleteItem('languages', id);
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      language: '',
      proficiency: 'Basic'
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Language"
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="proficiency" className="form-label">Proficiency Level</label>
            <select
              id="proficiency"
              name="proficiency"
              value={formData.proficiency}
              onChange={handleChange}
              className="form-input"
            >
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Fluent">Fluent</option>
              <option value="Native">Native</option>
            </select>
          </div>
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
            {isEditing ? 'Update Language' : 'Add Language'}
          </Button>
        </div>
      </form>
      
      {languages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-secondary-700 mb-3">Languages</h3>
          {languages.map((item) => (
            <Card key={item.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{item.language}</h4>
                  <p className="text-sm text-secondary-500">Proficiency: {item.proficiency}</p>
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
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguagesForm;