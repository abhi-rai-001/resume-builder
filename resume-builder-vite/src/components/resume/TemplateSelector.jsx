import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { Modern, Classic, Minimal } from '../../templates';

const TemplateSelector = () => {
  const { resumeData, setTemplate } = useResume();
  const { selectedTemplate } = resumeData;

  const templates = [
    { id: 'modern', name: 'Modern', component: <Modern /> },
    { id: 'classic', name: 'Classic', component: <Classic /> },
    { id: 'minimal', name: 'Minimal', component: <Minimal /> }
  ];

  return (
    <div>
      <h3 className="text-lg font-medium text-secondary-700 mb-4">Select Template</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <div
            key={template.id}
            onClick={() => setTemplate(template.id)}
            className={`cursor-pointer border-2 rounded-lg p-4 transition-all ${
              selectedTemplate === template.id
                ? 'border-primary-500 shadow-lg'
                : 'border-secondary-200 hover:border-secondary-300'
            }`}
          >
            <div className="h-40 bg-secondary-100 rounded-md mb-2">
              {template.component}
            </div>
            <p className="text-center font-medium text-secondary-700">{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;