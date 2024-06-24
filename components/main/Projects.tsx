import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <a href="https://github.com/Amisha20223/FINIUS" target="_blank" rel="noopener noreferrer">
        <ProjectCard
          src="/finius.png"
          title="Finius"
          description="• Developed educational solutions aimed at enhancing financial literacy.
• Created interactive courses and resources covering budgeting, saving, investing, debt management, and retirement
planning.
• Implemented budget calculators, investment simulators, and retirement planning tools.
• Enhanced user engagement through interactive financial education tools and resources."
        />
          </a>
        <ProjectCard
          src="/billing.png"
          title="Billing System"
          description="• Constructed a comprehensive billing system using JavaScript and React..
• Designed and implemented user-friendly interfaces for efficient billing and invoicing.
• Integrated real-time data updates and responsive design to enhance user experience"
        />
        <ProjectCard
          src="/porti.png"
          title="Portfolio"
          description=""
        />
         <ProjectCard
          src="/foodi.png"
          title="OrderMeal"
          description=""
        />
      </div>
    </div>
  );
};

export default Projects;
