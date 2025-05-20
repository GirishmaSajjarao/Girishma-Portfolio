import React, { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Temperature Converter",
    description: "A user-friendly temperature conversion tool that allows users to convert between Celsius, Fahrenheit, and Kelvin. Features real-time conversion, input validation, and a clean, intuitive interface.",
    image: "https://res.cloudinary.com/doucdpnbn/image/upload/v1747740278/WhatsApp_Image_2025-05-20_at_16.42.59_145e80b2_xxts7z.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubLink: "https://github.com/GirishmaSajjarao/temperature-converter",
    liveLink: "https://temperature-converter-demo.netlify.app"
  },
  {
    id: 2,
    title: "Weather Website",
    description: "A modern weather application providing real-time weather updates, forecasts, and interactive weather maps. Features include location-based weather data, severe weather alerts, and detailed meteorological information.",
    image: "https://res.cloudinary.com/doucdpnbn/image/upload/v1747740278/WhatsApp_Image_2025-05-20_at_16.42.22_01f48d1d_yqcgnl.jpg",
    technologies: ["React", "Weather API", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/GirishmaSajjarao/weather-app",
    liveLink: "https://weather-app-demo.netlify.app"
  },
  {
    id: 3,
    title: "To-Do List Website",
    description: "A simple and responsive to-do list application for managing daily tasks. Features task addition, completion toggling, and deletion with persistent local storage.",
    image: "https://res.cloudinary.com/doucdpnbn/image/upload/v1747740277/WhatsApp_Image_2025-05-20_at_16.41.48_0f2d10f7_xsvhvt.jpg",
    technologies: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
    githubLink: "https://github.com/GirishmaSajjarao/todo-list",
    liveLink: "https://todo-list-demo.netlify.app"
  },
  {
    id: 4,
    title: "Expense Tracker",
    description: "A comprehensive expense management solution with features like budget planning, expense categorization, and financial reports. Helps users track spending patterns and manage finances effectively.",
    image: "https://res.cloudinary.com/doucdpnbn/image/upload/v1747740278/WhatsApp_Image_2025-05-20_at_16.42.39_772814b4_sdqkee.jpg",
    technologies: ["React", "Chart.js", "Local Storage", "Tailwind CSS"],
    githubLink: "https://github.com/GirishmaSajjarao/expense-tracker",
    liveLink: "https://expense-tracker-demo.netlify.app"
  },
  {
    id: 5,
    title: "Landing Page",
    description: "A modern and responsive landing page template with smooth animations, optimized performance, and conversion-focused design elements. Perfect for product launches and marketing campaigns.",
    image: "https://res.cloudinary.com/doucdpnbn/image/upload/v1747740278/WhatsApp_Image_2025-05-20_at_16.40.35_23ba3f92_m28q8n.jpg",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    githubLink: "https://github.com/GirishmaSajjarao/landing-page",
    liveLink: "https://landing-page-demo.netlify.app"
  },
  {
    id: 6,
    title: "Procrastination Timer",
    description: "A productivity tool designed to help users manage their time effectively using the Pomodoro technique. Features customizable work/break intervals, task tracking, and progress statistics.",
    image: "https://res.cloudinary.com/doucdpnbn/image/upload/v1747740277/WhatsApp_Image_2025-05-20_at_16.44.25_914efea4_a5at90.jpg",
    technologies: ["React", "TypeScript", "Local Storage", "Tailwind CSS"],
    githubLink: "https://github.com/GirishmaSajjarao/procrastination-timer",
    liveLink: "https://procrastination-timer-demo.netlify.app"
  }
];

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Code</span>
                </a>
                
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={18} className="ml-1" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;