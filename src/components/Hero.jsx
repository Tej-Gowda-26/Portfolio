import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Eye } from 'lucide-react';

export default function Hero({ activeSection }) {
    const socialLinks = [
        {
            href: 'mailto:tejasgowda2604@gmail.com',
            icon: Mail,
            label: 'Email'
        },
        {
            href: 'https://linkedin.com/in/tejasgowdams',
            icon: Linkedin,
            label: 'LinkedIn',
            external: true
        },
        {
            href: 'https://github.com/Tej-Gowda-26',
            icon: Github,
            label: 'GitHub',
            external: true
        }
    ];

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative pt-20">
            <div className="relative z-10 text-center max-w-4xl">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-2xl p-6">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-full h-full text-white"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight pb-3">
                    Hi, I'm Tejas Gowda M S
                </h1>

                <p className="text-xl md:text-3xl text-cyan-200 mb-8">
                    Aspiring SDE | AI & ML Enthusiast
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                {...(link.external && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })}
                                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm transition-all hover:scale-105"
                            >
                                <Icon size={20} />
                                <span>{link.label}</span>
                            </a>
                        );
                    })}
                </div>

                <div className="mb-12">
                    <a
                        href="https://drive.google.com/file/d/1Z6ePWaIWnyNfNWImDlDbI59vHRVpIu1p/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all inline-flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
                    >
                        <Eye size={24} />
                        <span className="text-lg">View Resume</span>
                    </a>
                </div>

                {activeSection === 'home' && (
                    <div className="animate-bounce">
                        <ChevronDown size={40} className="mx-auto text-cyan-300" />
                    </div>
                )}
            </div>
        </section>
    );
}