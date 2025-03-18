
export default function ClassicTemplate({ data }) {
    const { personalInfo, summary, experience, education, skills, projects } = data;
  
    return (
      <div className="p-8 flex flex-col h-full" style={{ fontFamily: 'Georgia, serif' }}>
        {/* Header */}
        <header className="mb-6 text-center border-b border-gray-300 pb-4">
          <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name || 'Your Name'}</h1>
          {personalInfo.title && <p className="text-xl mt-1">{personalInfo.title}</p>}
          
          <div className="flex flex-wrap justify-center mt-3 text-sm">
            {personalInfo.email && (
              <div className="mx-2 mb-1">
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="mx-2 mb-1">
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="mx-2 mb-1">
                {personalInfo.location}
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-1 text-sm">
            {personalInfo.linkedIn && (
              <div className="mx-2">
                {personalInfo.linkedIn}
              </div>
            )}
            {personalInfo.website && (
              <div className="mx-2">
                {personalInfo.website}
              </div>
            )}
          </div>
        </header>
  
        {/* Summary */}
        {summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Summary</h2>
            <p className="text-gray-700">{summary}</p>
          </section>
        )}
  
        {/* Experience */}
        {experience.some(exp => exp.company || exp.position) && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-3">Experience</h2>
            
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{exp.company || 'Company'}</h3>
                  <p className="text-gray-600">
                    {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                  </p>
                </div>
                <p className="italic mb-1">{exp.position || 'Position'}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>
        )}
  
        {/* Education */}
        {education.some(edu => edu.institution || edu.degree) && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-3">Education</h2>
            
            {education.map((edu, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between">
                  <h3 className="font-bold">{edu.institution || 'Institution'}</h3>
                  <p className="text-gray-600">{edu.graduationDate || ''}</p>
                </div>
                <p className="italic">{edu.degree}{edu.field ? `, ${edu.field}` : ''}</p>
                {edu.gpa && <p>GPA: {edu.gpa}</p>}
              </div>
            ))}
          </section>
        )}
  
        {/* Skills */}
        {skills.some(skill => skill) && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Skills</h2>
            <p className="text-center">
              {skills.filter(skill => skill).join(" • ")}
            </p>
          </section>
        )}
  
        {/* Projects */}
        {projects.some(project => project.title || project.description) && (
          <section>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-3">Projects</h2>
            
            {projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{project.title || 'Project Title'}</h3>
                  {project.link && (
                    <a href={project.link} className="text-blue-600" target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  )}
                </div>
                {project.technologies && (
                  <p className="italic mb-1">{project.technologies}</p>
                )}
                <p>{project.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    );
  }
  
 