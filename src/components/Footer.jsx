import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        {
            href: 'mailto:tejasgowda2604@gmail.com',
            icon: Mail,
            label: 'Email'
        },
        {
            href: 'https://linkedin.com/in/tejasgowdams',
            icon: Linkedin,
            label: 'LinkedIn'
        },
        {
            href: 'https://github.com/Tej-Gowda-26',
            icon: Github,
            label: 'GitHub'
        }
    ];

    return (
        <footer className="py-12 px-4 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-gray-400 mb-4">Let's build something amazing together!</p>
                <div className="flex justify-center gap-6">
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                {...(link.label !== 'Email' && {
                                    target: '_blank',
                                    rel: 'noopener noreferrer'
                                })}
                                className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110 transform"
                                aria-label={link.label}
                            >
                                <Icon size={24} />
                            </a>
                        );
                    })}
                </div>
                <p className="text-gray-500 text-sm mt-6">
                    © 2025 Tejas Gowda M S. All rights reserved.
                </p>
            </div>
        </footer>
    );
}