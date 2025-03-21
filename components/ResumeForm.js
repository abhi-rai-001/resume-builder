"use client"
import { useState } from 'react';

export default function ResumeForm({ resumeData, updateResumeData, onNext }) {
  const [activeSection, setActiveSection] = useState('personalInfo');
  // State to handle mobile navigation menu
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    updateResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value
      }
    });
  };

  const handleSummaryChange = (e) => {
    updateResumeData({
      ...resumeData,
      summary: e.target.value
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value
    };
    
    updateResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  const addExperience = () => {
    const newId = resumeData.experience.length > 0 
      ? Math.max(...resumeData.experience.map(item => item.id)) + 1 
      : 1;
    
    updateResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { id: newId, company: '', position: '', startDate: '', endDate: '', description: '' }
      ]
    });
  };

  const removeExperience = (id) => {
    if (resumeData.experience.length <= 1) return;
    
    updateResumeData({
      ...resumeData,
      experience: resumeData.experience.filter(item => item.id !== id)
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    
    updateResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  const addEducation = () => {
    const newId = resumeData.education.length > 0 
      ? Math.max(...resumeData.education.map(item => item.id)) + 1 
      : 1;
    
    updateResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { id: newId, institution: '', degree: '', field: '', graduationDate: '', gpa: '' }
      ]
    });
  };

  const removeEducation = (id) => {
    if (resumeData.education.length <= 1) return;
    
    updateResumeData({
      ...resumeData,
      education: resumeData.education.filter(item => item.id !== id)
    });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;
    
    updateResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

  const addSkill = () => {
    updateResumeData({
      ...resumeData,
      skills: [...resumeData.skills, '']
    });
  };

  const removeSkill = (index) => {
    if (resumeData.skills.length <= 1) return;
    
    const updatedSkills = [...resumeData.skills];
    updatedSkills.splice(index, 1);
    
    updateResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    
    updateResumeData({
      ...resumeData,
      projects: updatedProjects
    });
  };

  const addProject = () => {
    const newId = resumeData.projects.length > 0 
      ? Math.max(...resumeData.projects.map(item => item.id)) + 1 
      : 1;
    
    updateResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { id: newId, title: '', description: '', technologies: '', link: '' }
      ]
    });
  };

  const removeProject = (id) => {
    if (resumeData.projects.length <= 1) return;
    
    updateResumeData({
      ...resumeData,
      projects: resumeData.projects.filter(item => item.id !== id)
    });
  };

  // Function to handle section navigation
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setShowNavMenu(false); // Close menu on section change
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-6">
      <div className="mb-6">
        {/* Mobile Navigation Menu Button */}
        <div className="md:hidden mb-4">
          <button
            className="flex items-center justify-between w-full bg-gray-50 p-3 rounded-lg border border-gray-200"
            onClick={() => setShowNavMenu(!showNavMenu)}
          >
            <span className="font-medium">
              {activeSection === 'personalInfo' && 'Personal Info'}
              {activeSection === 'experience' && 'Experience'}
              {activeSection === 'education' && 'Education'}
              {activeSection === 'skills' && 'Skills'}
              {activeSection === 'projects' && 'Projects'}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showNavMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Mobile Navigation Menu */}
          {showNavMenu && (
            <div className="bg-white border border-gray-200 rounded-lg mt-1 overflow-hidden shadow-lg absolute z-10 w-[calc(100%-1.5rem)] max-w-md">
              <button
                className={`w-full text-left py-3 px-4 ${activeSection === 'personalInfo' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => handleSectionChange('personalInfo')}
              >
                Personal Info
              </button>
              <button
                className={`w-full text-left py-3 px-4 ${activeSection === 'experience' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => handleSectionChange('experience')}
              >
                Experience
              </button>
              <button
                className={`w-full text-left py-3 px-4 ${activeSection === 'education' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => handleSectionChange('education')}
              >
                Education
              </button>
              <button
                className={`w-full text-left py-3 px-4 ${activeSection === 'skills' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => handleSectionChange('skills')}
              >
                Skills
              </button>
              <button
                className={`w-full text-left py-3 px-4 ${activeSection === 'projects' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                onClick={() => handleSectionChange('projects')}
              >
                Projects
              </button>
            </div>
          )}
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex flex-wrap border-b border-gray-200 mb-4">
          <button
            className={`py-2 px-4 font-medium ${activeSection === 'personalInfo' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveSection('personalInfo')}
          >
            Personal Info
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeSection === 'experience' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeSection === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeSection === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveSection('skills')}
          >
            Skills
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeSection === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
        </div>

        {activeSection === 'personalInfo' && (
          <div>
            <h3 className="text-xl font-medium mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={resumeData.personalInfo.name}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={resumeData.personalInfo.title}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={resumeData.personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={resumeData.personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={resumeData.personalInfo.location}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">LinkedIn</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={resumeData.personalInfo.linkedIn}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-700 mb-1">Website/Portfolio</label>
                <input
                  type="url"
                  name="website"
                  value={resumeData.personalInfo.website}
                  onChange={handlePersonalInfoChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-700 mb-1">Professional Summary</label>
                <textarea
                  value={resumeData.summary}
                  onChange={handleSummaryChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 h-32"
                  placeholder="Write a brief summary of your professional background and career goals..."
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'experience' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Work Experience</h3>
              <button
                onClick={addExperience}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
              >
                + Add Experience
              </button>
            </div>
            
            {resumeData.experience.map((exp, index) => (
              <div key={exp.id} className="border border-gray-200 rounded p-3 sm:p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Experience {index + 1}</h4>
                  {resumeData.experience.length > 1 && (
                    <button
                      onClick={() => removeExperience(exp.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Company/Organization</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Position/Title</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Start Date</label>
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., Jan 2020"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">End Date</label>
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., Present"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-gray-700 mb-1">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 h-32"
                      placeholder="Describe your responsibilities and achievements..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'education' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Education</h3>
              <button
                onClick={addEducation}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
              >
                + Add Education
              </button>
            </div>
            
            {resumeData.education.map((edu, index) => (
              <div key={edu.id} className="border border-gray-200 rounded p-3 sm:p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Education {index + 1}</h4>
                  {resumeData.education.length > 1 && (
                    <button
                      onClick={() => removeEducation(edu.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., Bachelor of Science"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Field of Study</label>
                    <input
                      type="text"
                      value={edu.field}
                      onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Graduation Date</label>
                    <input
                      type="text"
                      value={edu.graduationDate}
                      onChange={(e) => handleEducationChange(index, 'graduationDate', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., May 2022"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">GPA (optional)</label>
                    <input
                      type="text"
                      value={edu.gpa}
                      onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., 3.8/4.0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'skills' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Skills</h3>
              <button
                onClick={addSkill}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
              >
                + Add Skill
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="e.g., JavaScript"
                  />
                  {resumeData.skills.length > 1 && (
                    <button
                      onClick={() => removeSkill(index)}
                      className="ml-2 text-red-600 hover:text-red-800"
                      aria-label="Remove skill"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Projects</h3>
              <button
                onClick={addProject}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
              >
                + Add Project
              </button>
            </div>
            
            {resumeData.projects.map((project, index) => (
              <div key={project.id} className="border border-gray-200 rounded p-3 sm:p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">Project {index + 1}</h4>
                  {resumeData.projects.length > 1 && (
                    <button
                      onClick={() => removeProject(project.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Project Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Technologies Used</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => handleProjectChange(index, 'technologies', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="e.g., React, Node.js, MongoDB"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-gray-700 mb-1">Project Link (optional)</label>
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="https://github.com/yourusername/project"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-gray-700 mb-1">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2 h-32"
                      placeholder="Describe the project and your role..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-right mt-6">
        <button
          onClick={onNext}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
        >
          Continue to Preview
        </button>
      </div>
    </div>
  );
}