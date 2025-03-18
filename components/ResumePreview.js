"use client";
import { useRef } from 'react';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import DarkTemplate from './templates/DarkTemplate';
import ModernGridTemplate from './templates/ModernGridTemplate';

const templateMap = {
  "modern": ModernTemplate,
  "classic": ClassicTemplate,
  "minimal": MinimalTemplate,
  "modern-grid": ModernGridTemplate,
  "dark": DarkTemplate
};

export default function ResumePreview({ resumeData, template }) {
  const containerRef = useRef(null);


  const TemplateComponent = templateMap[template.id] || ModernTemplate;

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <div 
        ref={containerRef}
        className="bg-white w-full max-w-3xl mx-auto shadow-lg min-h-screen"
        style={{ maxWidth: '8.5in' }}
      >
        <TemplateComponent data={resumeData} />
      </div>
    </div>
  );
}