import { useState } from "react";
import { cn } from "@/lib/utils";
import React from 'react';

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React Js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Streamlit", level: 90, category: "frontend" },


  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express Js", level: 85, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "Spring-Boot", level: 80, category: "backend" },
  { name: "Flask", level: 87, category: "backend" },


  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "GitLab", level: 90, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Kubernetes", level: 98, category: "tools" },
  { name: "Genkins", level: 96, category: "tools" },
  { name: "Tomcat", level: 97, category: "tools" },
  { name: "Maven", level: 92, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "AWS", level: 98, category: "tools" },
  
  //all
   { name: "C", level: 80, category: "all" },
  { name: "Java", level: 90, category: "all" },
  { name: "Python", level: 85, category: "all" },
  { name: "SQL", level: 85, category: "all" },
  { name: "J-query", level: 87, category: "all" },

  //AIML
   { name: "Numpy", level: 90, category: "AIML" },
  { name: "Pandas", level: 86, category: "AIML" },
  { name: "Tensorflow", level: 85, category: "AIML" },
  { name: "Pytorch", level: 92, category: "AIML" },
  { name: "Scikit-learn", level: 87, category: "AIML" },
  { name: "Nltk", level: 88, category: "AIML" },
  { name: "Opencv", level: 87, category: "AIML" },
  { name: "keras", level: 90, category: "AIML" },
  { name: "Mx-net (Apache)", level: 85, category: "AIML" },

];

const categories = ["all", "frontend", "backend", "AIML", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
