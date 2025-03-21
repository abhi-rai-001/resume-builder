import React from 'react';
import { useResume } from '../context/ResumeContext';

const Minimal = () => {
  const { resumeData } = useResume();
  const { personalInfo, summary, experience, education, skills, projects, languages } = resumeData;

  return (
    <div className="p-6 bg-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-700">{personalInfo.name}</h1>
        <p className="text-secondary-600">{personalInfo.title}</p>
        <div className="flex justify-center space-x-4 mt-2">
          <p className="text-sm text-secondary-500">{personalInfo.email}</p>
          <p className="text-sm text-secondary-500">{personalInfo.phone}</p>
          <p className="text-sm text-secondary-500">{personalInfo.website}</p>
        </div>
      </div>

      {summary && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-primary-700 mb-2">Summary</h2>
          <p className="text-secondary-600">{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-primary-700 mb-2">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <h3 className="font-semibold text-secondary-800">{exp.position}</h3>
              <p className="text-secondary-600">{exp.company}</p>
              <p className="text-sm text-secondary-500">
                {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                {' - '}
                {exp.current ? 'Present' : exp.endDate && new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </p>
              {exp.description && (
                <p className="text-sm text-secondary-600 mt-1">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-primary-700 mb-2">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="font-semibold text-secondary-800">{edu.degree}</h3>
              <p className="text-secondary-600">{edu.institution}</p>
              <p className="text-sm text-secondary-500">
                {edu.startDate && new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                {' - '}
                {edu.current ? 'Present' : edu.endDate && new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </p>
              {edu.description && (
                <p className="text-sm text-secondary-600 mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-primary-700 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.id} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                {skill.skill} ({skill.level})
              </span>
            ))}
          </div>
        </div>
      )}

      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-primary-700 mb-2">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <h3 className="font-semibold text-secondary-800">{project.name}</h3>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-800 text-sm"
                >
                  {project.url}
                </a>
              )}
              <p className="text-sm text-secondary-500">
                {project.startDate && new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                {' - '}
                {project.current ? 'Present' : project.endDate && new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </p>
              {project.description && (
                <p className="text-sm text-secondary-600 mt-1">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-primary-700 mb-2">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang.id} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                {lang.language} ({lang.proficiency})
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Minimal;