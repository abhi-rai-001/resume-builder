export default function ModernGridTemplate({ data }) {
    const { personalInfo, summary, experience, education, skills, projects } = data;
  
    return (
      <div className="p-10 bg-white text-gray-900 rounded-lg shadow-lg" style={{ fontFamily: 'Helvetica, sans-serif' }}>
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">{personalInfo.name || "Your Name"}</h1>
          <p className="text-lg text-gray-600">{personalInfo.title || "Job Title"}</p>
        </header>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            {summary && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Summary</h2>
                <p>{summary}</p>
              </section>
            )}
  
            {skills.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}
  
            {education.map((edu, index) => (
              <section key={index} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <h3 className="font-bold">{edu.institution}</h3>
                <p>{edu.degree} in {edu.field}</p>
                <p className="text-gray-500">{edu.graduationDate}</p>
              </section>
            ))}
          </div>
  
          {/* Right Section */}
          <div>
            {experience.map((exp, index) => (
              <section key={index} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                <h3 className="font-bold">{exp.company}</h3>
                <p>{exp.position} | {exp.startDate} - {exp.endDate}</p>
                <p>{exp.description}</p>
              </section>
            ))}
  
            {projects.map((project, index) => (
              <section key={index} className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Projects</h2>
                <h3 className="font-bold">{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a href={project.link} className="text-blue-500 hover:underline">
                    View Project
                  </a>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    );
  }