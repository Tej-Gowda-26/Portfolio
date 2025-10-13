import React from 'react';

export default function Navigation({ activeSection, scrollToSection }) {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-end">
                    <div className="flex items-center gap-4 md:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm md:text-base transition-colors ${activeSection === item.id
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-cyan-400'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}