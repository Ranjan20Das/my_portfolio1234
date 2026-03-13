import { Briefcase, Code, User } from "lucide-react";
import React from 'react';
import mycv from "../assets/mycv.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Cyber Security & Network Engineer
              Working in AWS
            </h3>

            <p className="text-muted-foreground">
              I am specialize in Cloud Computing, Cyber Security, and Advanced Networking Intelligence through AWS Skill Builder, academic training, and Cisco courses. I deliver secure, scalable server and Cyber security solutions, contributing to projects like NVIDIA’s WALL-E and supporting Formula 1 race program server infrastructure with high-performance hosting.
            </p>

            <h4 className="text-2xl font-semibold">
              Aspiring Full Stack Devloper & AIML Enthusiast
            </h4>

            <p className="text-muted-foreground">
              I’m an aspiring Full Stack Developer who builds scalable, high-performance web applications with clean architecture and modern technologies.
              An AI enthusiast passionate about creating intelligent agents that automate tasks efficiently and solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={mycv}
                download="Ranjan_Das_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Cyber Security & Networking</h4>
                  <p className="text-muted-foreground">
                    Providing advanced cyber security solutions while building flexible network infrastructures and scalable, high-performance server environments using modern cloud and networking technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">AIML Enthusiast</h4>
                  <p className="text-muted-foreground">
                    Building powerful AI agents that automate tasks efficiently and intelligently.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
