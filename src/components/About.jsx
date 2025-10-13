import React from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';

export default function About() {
    const education = [
        {
            icon: GraduationCap,
            title: 'Bachelor of Technology in Information Science and Engineering',
            institution: 'M. S. Ramaiah University of Applied Sciences',
            period: '2022 – 2026',
            grade: 'CGPA: 9.54/10.0',
            bgColor: 'bg-cyan-500',
            borderColor: 'border-cyan-500/30',
            textColor: 'text-cyan-400'
        },
        {
            icon: BookOpen,
            title: 'Pre-University Course (PCMC)',
            institution: 'KLE Independent PU College',
            period: '2020 – 2022',
            grade: 'Percentage: 97.5%',
            bgColor: 'bg-blue-500',
            borderColor: 'border-blue-500/30',
            textColor: 'text-blue-400'
        },
        {
            icon: School,
            title: 'Secondary School (SSLC)',
            institution: 'St. Lawrence High School',
            period: '2010 – 2020',
            grade: 'Percentage: 95.3%',
            bgColor: 'bg-cyan-400',
            borderColor: 'border-cyan-400/30',
            textColor: 'text-cyan-300'
        }
    ];

    const drives = [
        {
            title: 'Software Development',
            description: 'Passionate about building clean, efficient applications with modern technologies. Focused on creating scalable, maintainable, and impactful solutions.',
            gradient: 'from-cyan-500/10 to-blue-500/10',
            border: 'border-cyan-500/30'
        },
        {
            title: 'AI & Technology',
            description: 'Exploring the intersection of artificial intelligence and software development. Driven by a curiosity to leverage emerging technologies for solving complex problems.',
            gradient: 'from-blue-500/10 to-cyan-500/10',
            border: 'border-blue-500/30'
        },
        {
            title: 'Learning & Growth',
            description: 'Continuously learning and adapting to new technologies. Enjoys tackling challenges that push technical boundaries and expand skill sets.',
            gradient: 'from-slate-500/10 to-cyan-500/10',
            border: 'border-slate-500/30'
        }
    ];

    return (
        <section id="about" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6 text-cyan-300">Education</h3>
                        <div className="space-y-8 relative">
                            <div className="absolute left-[15px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-600"></div>

                            {education.map((edu, index) => {
                                const Icon = edu.icon;
                                return (
                                    <div key={index} className="relative pl-10">
                                        <div className={`absolute left-0 top-1 w-8 h-8 ${edu.bgColor} rounded-full flex items-center justify-center border-4 border-slate-900`}>
                                            <Icon size={16} className="text-white" />
                                        </div>
                                        <div className={`bg-white/5 rounded-lg p-4 border ${edu.borderColor}`}>
                                            <h4 className="text-lg font-semibold text-white mb-2">
                                                {edu.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm mb-2">
                                                {edu.institution} | {edu.period}
                                            </p>
                                            <span className={`${edu.textColor} font-semibold text-sm`}>
                                                {edu.grade}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6 text-cyan-300 text-center">
                            What Drives Me
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {drives.map((drive, index) => (
                                <div
                                    key={index}
                                    className={`bg-gradient-to-br ${drive.gradient} rounded-xl p-6 border ${drive.border}`}
                                >
                                    <h4 className="text-white font-bold text-lg mb-2">
                                        {drive.title}
                                    </h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {drive.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}