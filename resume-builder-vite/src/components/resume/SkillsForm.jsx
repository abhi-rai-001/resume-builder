import React, { useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Card from '../ui/Card';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

const SkillsForm = () => {
  const { resumeData, addItem, updateItem, deleteItem } = useResume();
  const { skills } = resumeData;
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    skill: '',
    level: 'Beginner'
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
      updateItem('skills', editingId, formData);
    } else {
      addItem('skills', formData);
    }
    
    resetForm();
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setEditingId(item.id);
    setFormData({
      skill: item.skill || '',
      level: item.level || 'Beginner'
    });
  };

  const handleDelete = (id) => {
    deleteItem('skills', id);
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setFormData({
      skill: '',
      level: 'Beginner'
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Skill"
            id="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="level" className="form-label">Proficiency Level</label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="form-input"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
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
            {isEditing ? 'Update Skill' : 'Add Skill'}
          </Button>
        </div>
      </form>
      
      {skills.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-secondary-700 mb-3">Skills</h3>
          {skills.map((item) => (
            <Card key={item.id} className="mb-3">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{item.skill}</h4>
                  <p className="text-sm text-secondary-500">Level: {item.level}</p>
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

export default SkillsForm;