import React from 'react';
import AWS_Offer_Letter from "../assets/AWS_Offer_Letter.pdf";
import Code_Alpha from "../assets/Code_Alpha.pdf";
import Intel_Certificate from "../assets/Intel_Certificate.pdf";
export default function WorkExperience() {


  const experiences = [
    {
      id: 1,
      role: "Cloud & Network Security Engineer",
      company: "Amazon Web Services (AWS)",
      duration: "2025 - Present",
      description:
        "Working with AWS cloud infrastructure to deploy and manage secure servers and provide cybersecurity solutions.",
      certificate: AWS_Offer_Letter,
    },
    {
      id: 2,
      role: "Data Analyst Intern",
      company: "Code Alpha",
      duration: "10th Aug, 2025 - 10th Sept, 2025",
      description:
        "Analyzing datasets, creating insights, and supporting data-driven decision making using analytical tools and technologies.",
      certificate: Code_Alpha,
    },
    {
      id: 3,
      role: "AIML Intern",
      company: "Intel Unnati",
      duration: "28th Feb, 2025 - 15th Apr, 2025",
      description:
        "During Internship at Intel I have developed a Vision-Language Model (VLM) project by integrating computer vision and natural language processing for intelligent data understanding.",
      certificate: Intel_Certificate,
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`card-hover bg-card border border-border rounded-lg p-4 text-left ${exp.id === 3 ? "md:col-span-2 mx-auto max-w-md" : ""}`}
            >

              <h3 className="text-lg font-semibold mb-1">
                {exp.role}
              </h3>

              <p className="text-primary text-sm">
                {exp.company}
              </p>

              <p className="text-xs text-gray-400 mb-2">
                {exp.duration}
              </p>

              <p className="text-sm text-gray-400 mb-3">
                {exp.description}
              </p>

              <a
                href={exp.certificate}
                target="_blank"
                className="cosmic-button text-xs px-3 py-1"
              >
                Certificate
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
