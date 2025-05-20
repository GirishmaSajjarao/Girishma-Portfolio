import React from 'react';
import Section from '../ui/Section';
import SkillBar from '../ui/SkillBar';
import { Code, Layout, Database, Terminal, Figma, Github, Bug } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'bg-yellow-500' },
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'HTML/CSS', level: 85, color: 'bg-red-500' },
    { name: 'Node.js', level: 75, color: 'bg-green-600' },
    { name: 'UI/UX Design', level: 70, color: 'bg-purple-500' },
    { name: 'SQL/NoSQL Databases', level: 65, color: 'bg-indigo-500' },
  ];

  const technologies = [
    { name: 'Frontend', icon: <Layout size={24} />, description: 'Creating responsive and interactive user interfaces with modern frameworks' },
    { name: 'Backend', icon: <Code size={24} />, description: 'Building robust APIs and server-side applications' },
    { name: 'Database', icon: <Database size={24} />, description: 'Designing and implementing efficient data storage solutions' },
    { name: 'Problem-Solving & Debugging', icon: <Bug size={24} />, description: 'Identifying, analyzing, and resolving complex technical issues efficiently' },
    { name: 'Design', icon: <Figma size={24} />, description: 'Creating intuitive user experiences and visually appealing interfaces' },
    { name: 'Version Control', icon: <Github size={24} />, description: 'Managing code changes and collaborating with other developers' },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about my background, skills, and what I do"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300">
            I'm a passionate frontend developer with a strong focus on creating intuitive and performant web applications.
            With 1 year of experience in the field, I've worked on a variety of projects ranging from small business websites
            to complex enterprise applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            My journey began with HTML, CSS, and JavaScript, and has evolved to include modern frameworks like React,
            along with TypeScript for type safety. I'm dedicated to writing clean, maintainable code and constantly learning
            new technologies to stay at the forefront of web development.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me exploring the outdoors, reading about new technologies, or contributing
            to open-source projects.
          </p>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Skills</h3>
          <div className="space-y-4">
            {skills.map((skill) => (
              <SkillBar 
                key={skill.name} 
                skill={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Technologies I Work With
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 dark:text-blue-400 mr-3">
                  {tech.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {tech.name}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;