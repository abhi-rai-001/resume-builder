export default function DarkTemplate({ data }) {
  const { personalInfo, summary, experience, education, skills, projects } = data;

  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen py-10 px-6 md:px-16">
      
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-white">{personalInfo.name || "Your Name"}</h1>
        <p className="text-lg text-gray-400">{personalInfo.title || "Your Title"}</p>
        
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
          {personalInfo.email && <span>📧 {personalInfo.email}</span>}
          {personalInfo.phone && <span>📞 {personalInfo.phone}</span>}
          {personalInfo.location && <span>📍 {personalInfo.location}</span>}
        </div>

        <div className="flex justify-center gap-4 mt-2 text-sm">
          {personalInfo.linkedIn && (
            <a href={personalInfo.linkedIn} className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          )}
          {personalInfo.website && (
            <a href={personalInfo.website} className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">🌐 Website</a>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Column */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          
          {/* Summary */}
          {summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
              <p className="text-gray-400">{summary}</p>
            </section>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Right Column */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8">
          
          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">{exp.company || "Company"}</h3>
                  <p className="text-gray-400 italic">{exp.position} | {exp.startDate} - {exp.endDate}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* Education */}
          {education.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">{edu.institution || "Institution"}</h3>
                  <p className="text-gray-400 italic">{edu.degree} | {edu.graduationDate}</p>
                  <p>{edu.field} {edu.gpa && `• GPA: ${edu.gpa}`}</p>
                </div>
              ))}
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 italic">{project.technologies}</p>
                  <p>{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </section>
          )}

        </div>
      </main>
    </div>
  );
}