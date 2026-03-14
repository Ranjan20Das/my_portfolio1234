import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from 'react';
const projects = [
  {
    id: 1,
    title: "Network Saas Project",
    description: "A beautiful cloud-based software platform for network management and monitoring across different regions.",
    image: "/projects/project1.png",
    tags: ["Nodejs", "AWS", "mongodb", "Express"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ranjan20Das/Network_health_detection_saas_app",
  },
  {
    id: 2,
    title: "Vision Language Model",
    description:
      "An AI model that can understand both images and text together to analyze & generate meaningful responses.",
    image: "/projects/project2.png",
    tags: ["Python", "Tensorflow", "CLIP", "SVM", "Huggingface"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ranjan20Das/VLM-project",
  },
  {
    id: 3,
    title: "AI-Server Monitoring System",
    description:
      "A comprehensive monitoring solution for managing and analyzing AI server performance and health.",
    image: "/projects/project3.png",
    tags: ["Python","AWS", "Docker", "Nginx", "Grafana", "Ubuntu"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ranjan20Das/AI_Server_monitoring",
  },
  {
    id: 4,
    title: "Crop Recommendation System",
    description:
      "A ML Based application used to predict crops based on given parameters",
    image: "/projects/project4.png",
    tags: ["Python","Pandas", "Numpy", "Scikit-learn", "Streamlit"],
    demoUrl: "https://croprecommendationibm1234-ezydkje8jp5cdcprphteyq.streamlit.app/",
    githubUrl: "https://github.com/Ranjan20Das/crop_recommendation_IBM1234",
  },
  {
    id: 5,
    title: "Water Health & Conductivity Check",
    description:
      "A ML Based application used to check Water health like it is drinkable or not & also checks its conductivity. ",
    image: "/projects/project5.png",
    tags: ["Python","Pandas", "Numpy", "Scikit-learn","Joblib", "Streamlit"],
    demoUrl: "https://waterqualityandconductancecheck-dhpdkhmn8prk435wrqc26f.streamlit.app/",
    githubUrl: "https://github.com/Ranjan20Das/Water_quality_and_Conductance_Check",
  },
  {
    id: 6,
    title: "Cricket WC Insights Dashboard",
    description:
      "An interactive data analytics dashboard built using Google Looker studio with datsets from Kaggle to visualize team performance , player statistics, and historical trends in WC ",
    image: "/projects/project6.png",
    tags: ["Google Looker Studio","Kaggle", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "https://github.com/Ranjan20Das/Cricket_WC_Insights",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Ranjan20Das"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
