import React from 'react';
import { useResume } from '../../context/ResumeContext';
import Input from '../ui/Input';

const PersonalInfoForm = () => {
  const { resumeData, updateResumeData } = useResume();
  const { personalInfo } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateResumeData('personalInfo', {
      ...personalInfo,
      [name]: value
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          id="name"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
        <Input
          label="Job Title"
          id="title"
          name="title"
          value={personalInfo.title}
          onChange={handleChange}
          placeholder="Frontend Developer"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Email"
          type="email"
          id="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
        />
        <Input
          label="Phone"
          id="phone"
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Address"
          id="address"
          name="address"
          value={personalInfo.address}
          onChange={handleChange}
          placeholder="New York, NY"
        />
        <Input
          label="Website/LinkedIn"
          id="website"
          name="website"
          value={personalInfo.website}
          onChange={handleChange}
          placeholder="linkedin.com/in/johndoe"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;