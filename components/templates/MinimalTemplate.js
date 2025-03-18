export default function MinimalTemplate({ data }) {
  const { personalInfo, summary, experience, education, skills, projects } = data;

  return (
    <div className="p-10 bg-gray-50 text-gray-900 rounded-lg shadow-md" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header className="text-center border-b-2 border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl font-bold">{personalInfo.name || 'Your Name'}</h1>
        <p className="text-lg text-gray-600">{personalInfo.title || 'Job Title'}</p>
        
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.some(exp => exp.company || exp.position) && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-lg">{exp.company || 'Company'}</h3>
              <p className="text-gray-600 italic">{exp.position} | {exp.startDate} - {exp.endDate}</p>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.some(edu => edu.institution) && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-bold text-lg">{edu.institution}</h3>
              <p className="text-gray-600">{edu.degree}, {edu.field}</p>
              <p className="text-gray-500">{edu.graduationDate} - GPA: {edu.gpa}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <p className="italic text-gray-600">{project.technologies}</p>
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
}