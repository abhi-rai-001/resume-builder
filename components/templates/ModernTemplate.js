export default function ModernTemplate({ data }) {
    const { personalInfo, summary, experience, education, skills, projects } = data;
  
    return (
      <div className="p-8 flex flex-col h-full" style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Header */}
        <header className="mb-6 pb-6 border-b-2 border-blue-600">
          <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name || 'Your Name'}</h1>
          <p className="text-xl text-blue-600 mt-1">{personalInfo.title || 'Professional Title'}</p>
          
          <div className="flex flex-wrap mt-3 text-sm text-gray-600">
            {personalInfo.email && (
              <div className="mr-4 mb-1">
                <span className="font-medium">Email:</span> {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="mr-4 mb-1">
                <span className="font-medium">Phone:</span> {personalInfo.phone}
              </div>
              )}
              {personalInfo.location && (
                <div className="mr-4 mb-1">
                  <span className="font-medium">Location:</span> {personalInfo.location}
                </div>
              )}
              {personalInfo.linkedIn && (
                <div className="mr-4 mb-1">
                  <span className="font-medium">LinkedIn:</span> {personalInfo.linkedIn}
                </div>
              )}
              {personalInfo.website && (
                <div className="mb-1">
                  <span className="font-medium">Website:</span> {personalInfo.website}
                </div>
              )}
            </div>
          </header>
    
          {/* Summary */}
          {summary && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
              <p className="text-gray-700">{summary}</p>
            </section>
          )}
    
          {/* Experience */}
          {experience.some(exp => exp.company || exp.position) && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Work Experience</h2>
              
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800">{exp.position || 'Position'}</h3>
                    <p className="text-gray-600 text-sm">
                      {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                    </p>
                  </div>
                  <p className="text-blue-600 mb-1">{exp.company || 'Company'}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </section>
          )}
    
          {/* Education */}
          {education.some(edu => edu.institution || edu.degree) && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Education</h2>
              
              {education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800">{edu.institution || 'Institution'}</h3>
                    <p className="text-gray-600 text-sm">{edu.graduationDate || ''}</p>
                  </div>
                  <p className="text-blue-600">{edu.degree}{edu.field ? `, ${edu.field}` : ''}</p>
                  {edu.gpa && <p className="text-gray-700">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </section>
          )}
    
          {/* Skills */}
          {skills.some(skill => skill) && (
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-2">Skills</h2>
              <div className="flex flex-wrap">
                {skills.filter(skill => skill).map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
    
          {/* Projects */}
          {projects.some(project => project.title || project.description) && (
            <section>
              <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">Projects</h2>
              
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-800">{project.title || 'Project Title'}</h3>
                    {project.link && (
                      <a href={project.link} className="text-blue-600 text-sm" target="_blank" rel="noopener noreferrer">
                        View Project
                      </a>
                    )}
                  </div>
                  {project.technologies && (
                    <p className="text-blue-600 text-sm mb-1">{project.technologies}</p>
                  )}
                  <p className="text-gray-700">{project.description}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      );
    }