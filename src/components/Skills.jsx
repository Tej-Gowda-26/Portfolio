import React from 'react';

export default function Skills() {
    const skills = {
        "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
        "AI & Machine Learning": ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"],
        "Web Development": ["React.js", "Next.js", "Tailwind CSS"],
        "Database & Cloud": ["MySQL", "MongoDB", "AWS"]
    };

    const getSkillIcon = (skill) => {
        const icons = {
            "Java": "☕",
            "Python": "🐍",
            "JavaScript": "⚡",
            "SQL": "🗄️",
            "React.js": "⚛️",
            "Next.js": "🔺",
            "Tailwind CSS": "🎨",
            "MySQL": "🐬",
            "MongoDB": "🍃",
            "AWS": "☁️",
            "TensorFlow": "🧠",
            "Scikit-learn": "📊",
            "NumPy": "🔢",
            "Pandas": "🐼"
        };
        return icons[skill] || "●";
    };

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-xl font-bold text-cyan-300 mb-6 text-center">
                                {category}
                            </h3>
                            <div className="space-y-3">
                                {items.map((skill) => (
                                    <div
                                        key={skill}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-3xl">{getSkillIcon(skill)}</span>
                                            <span className="text-white font-medium">{skill}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}