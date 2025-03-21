import React from 'react';
import { useResume } from '../../context/ResumeContext';

const SummaryForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { summary } = resumeData;

  const handleChange = (e) => {
    updateResumeData('summary', e.target.value);
  };

  return (
    <div>
      <label htmlFor="summary" className="form-label">Professional Summary</label>
      <textarea
        id="summary"
        name="summary"
        value={summary}
        onChange={handleChange}
        placeholder="A brief summary of your professional background, skills, and career goals..."
        rows="4"
        className="form-input"
      />
      <p className="text-sm text-secondary-500 mt-1">
        Write a short, compelling description of your professional background, key skills, and career goals. 
        This will appear at the top of your resume.
      </p>
    </div>
  );
};

export default SummaryForm;