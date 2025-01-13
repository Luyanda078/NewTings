import React from 'react';

export default function SkillsMatrix() {
  const skills = [
    { name: 'HTML', level: 'Intermediate', notes: 'Proficient in semantic markup for modern web development.' },
    { name: 'CSS', level: 'Advanced', notes: 'Expert in responsive design, animations, and modern frameworks like Tailwind CSS.' },
    { name: 'JavaScript', level: 'Intermediate', notes: 'Solid understanding of ES6+ features and DOM manipulation.' },
    { name: 'React', level: 'Intermediate', notes: 'Developed scalable components and dynamic SPAs.' },
    { name: 'TypeScript', level: 'Beginner', notes: 'Implemented type safety in React and Node.js projects.' },
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'Developed a fully responsive e-commerce platform featuring product listing, user authentication, and order management.',
      techStack: ['React.js', 'Node.js', 'MongoDB'],
      features: ['User authentication', 'Real-time cart updates', 'Admin dashboard for inventory management'],
      challenges: 'Optimized database queries to reduce API latency by 30%.',
      demoLink: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Built a cross-platform task management app with advanced features like drag-and-drop and push notifications.',
      techStack: ['React Native', 'SQLite', 'Redux Toolkit'],
      features: ['Drag-and-drop task prioritization', 'Push notifications', 'Offline mode support'],
      challenges: 'Implemented efficient state management for offline data synchronization.',
      demoLink: '#',
    },
  ];

  const assessments = [
    { name: 'HTML & CSS Assessment', date: 'June 2024', score: '92%', notes: 'Demonstrated expertise in responsive design.' },
    { name: 'JavaScript Fundamentals', date: 'July 2024', score: '89%', notes: 'Strong grasp of core JavaScript concepts.' },
    { name: 'React.js Proficiency', date: 'August 2024', score: '95%', notes: 'Excelled in creating modular and scalable components.' },
  ];

  return (
    <section id="skills-matrix" className="p-12 bg-gray-900 text-white">
      <div className="container mx-auto space-y-16">
        {/* Skills Section */}
        <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="skills-matrix"
      className="relative overflow-hidden flex flex-col text-white body-font bg-gray-900 py-24"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out bg-gray-800"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-2">{skill.name}</h3>
              <p className="text-lg text-gray-300 mb-2">
                <strong>Proficiency Level:</strong> {skill.level}
              </p>
              <p className="text-gray-400">{skill.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Projects Section */}
        <div>
          <h2 className="text-4xl font-semibold text-orange-500 mb-8">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="mb-2">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
              <ul className="list-disc list-inside mb-4">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="mb-4">
                <strong>Challenges Faced:</strong> {project.challenges}
              </p>
              <a
                href={project.demoLink}
                className="text-orange-500 hover:text-orange-400 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Assessments Section */}
        <div>
          <h2 className="text-4xl font-semibold text-orange-500 mb-8">Assessments</h2>
          <table className="table-auto w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 border border-gray-700 text-left">Assessment</th>
                <th className="p-4 border border-gray-700 text-left">Date Completed</th>
                <th className="p-4 border border-gray-700 text-left">Grade/Score</th>
                <th className="p-4 border border-gray-700 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((assessment, index) => (
                <tr key={index} className="hover:bg-gray-800">
                  <td className="p-4 border border-gray-700">{assessment.name}</td>
                  <td className="p-4 border border-gray-700">{assessment.date}</td>
                  <td className="p-4 border border-gray-700">{assessment.score}</td>
                  <td className="p-4 border border-gray-700">{assessment.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
