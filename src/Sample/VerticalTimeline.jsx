import React from 'react';
import './VerticalTimeline.css'; 

const experiences = [
  {
    id: 1,
    date: 'March 2024 - Present',
    title: 'Full-Stack Developer Trainee',
    company: 'Credo Systemz',
    description: 'Learning web development and intrested to build innovative websites/projects as an intern.Trying to establish a career as web developer in IT industry.'
  },
  {
    id: 2,
    date: 'Apr 2021 - December 2022',
    title: 'Senior Processing Officer',
    company: 'CAMS',
    description: 'Worked on building scalable solutions to Mutual fund clients. Addressed all social media escalations and CEO escalations on time.'
  },
  {
    id: 3,
    date: 'May 2014 - June 2015',
    title: 'Tech Support Engineer',
    company: 'CSS CORP',
    description: 'Assisted in technical support to clients and troubleshooting VOIP devices. Achieved KRA metrics as per the SLA and clients requirements'
  }
];

const VerticalTimeline = () => {
  return (
    <div className="timeline">
      {experiences.map(exp => (
        <div key={exp.id} className="timeline-item">
          <div className="timeline-date">{exp.date}</div>
          <div className="timeline-content">
            <h3 className="timeline-title">{exp.title}</h3>
            <h4 className="timeline-company">{exp.company}</h4>
            <p className="timeline-description">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
