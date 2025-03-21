import React, { createContext, useState, useContext, useEffect } from 'react';

// Initial empty state
const initialState = {
  personalInfo: {
    name: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    website: ''
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  languages: [],
  selectedTemplate: 'modern'
};

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {
  // Try to load from localStorage first
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : initialState;
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  // Update any section of the resume
  const updateResumeData = (section, data) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  // Add item to a section array
  const addItem = (section, item) => {
    const newItem = {
      ...item,
      id: Date.now().toString() // Simple unique ID
    };
    
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
    
    return newItem;
  };

  // Update an item in a section array
  const updateItem = (section, id, updatedItem) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map(item => 
        item.id === id ? { ...item, ...updatedItem } : item
      )
    }));
  };

  // Delete an item from a section array
  const deleteItem = (section, id) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  // Reset the resume to initial state
  const resetResume = () => {
    setResumeData(initialState);
  };

  // Set template choice
  const setTemplate = (template) => {
    updateResumeData('selectedTemplate', template);
  };

  const value = {
    resumeData,
    updateResumeData,
    addItem,
    updateItem,
    deleteItem,
    resetResume,
    setTemplate
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};