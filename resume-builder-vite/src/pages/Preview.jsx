import React, { useRef } from 'react';
import { useResume } from '../context/ResumeContext';
import { Modern, Classic, Minimal } from "../templates";
import Button from '../components/ui/Button';
import { exportToPDF } from '../utils/pdfExport';

const Preview = () => {
  const { resumeData } = useResume();
  const { selectedTemplate } = resumeData;
  const resumeRef = useRef(null);

  const templates = {
    modern: <Modern />,
    classic: <Classic />,
    minimal: <Minimal />
  };

  const handleDownload = () => {
    exportToPDF('resume-preview', 'resume');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <Button onClick={handleDownload}>Download as PDF</Button>
      </div>
      <div id="resume-preview" ref={resumeRef} className="bg-white shadow-lg">
        {templates[selectedTemplate]}
      </div>
    </div>
  );
};

export default Preview;