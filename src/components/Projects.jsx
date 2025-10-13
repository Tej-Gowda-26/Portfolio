import React from 'react';
import { Github } from 'lucide-react';

export default function Projects() {
    const projects = [
        {
            title: "AI Quiz Builder",
            tech: ["Next.js", "MongoDB", "NextAuth.js", "Tailwind CSS", "Gemini API"],
            description: "A full-stack web platform that leverages the Gemini API to generate interactive quizzes from user-provided topics or documents. Features secure authentication with NextAuth.js and MongoDB, an analytics dashboard for tracking quiz performance, and is deployed on Vercel for optimal scalability.",
            github: "https://github.com/Tej-Gowda-26/AI-Quiz-Builder",
            image: "images/AI_Quiz_Builder.png"
        },
        {
            title: "SMS Spam Classifier",
            tech: ["Python", "Scikit-learn", "Pandas", "NLTK", "Streamlit"],
            description: "A machine learning model using Logistic Regression with TF-IDF vectorization to classify SMS messages as spam or legitimate. Achieves 96% accuracy with high precision and recall through robust preprocessing and evaluation pipelines, featuring an interactive Streamlit interface for real-time message classification.",
            github: "https://github.com/Tej-Gowda-26/SMS-Spam-Detection",
            image: "images/SMS_Spam_Classifier.png"
        },
        {
            title: "University Management System",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            description: "A role-based web application designed to streamline student, faculty, and administrative workflows across university operations. Implements dedicated dashboards tailored to different user roles with optimized MySQL queries for efficient data management, tested and deployed locally using XAMPP.",
            github: "https://github.com/Tej-Gowda-26/University-Management-System",
            image: "images/UMS.png"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent pb-2">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"
                                    >
                                        <Github size={24} />
                                    </a>
                                </div>

                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded text-xs border border-cyan-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}