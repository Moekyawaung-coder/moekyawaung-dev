'use client';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Compose Design System",
    description: "Production-ready UI library with 40+ components, theming engine, and accessibility suite. Built as part of senior roadmap.",
    repo: "https://github.com/Moekyawaung-coder/senior-android-capstone-projects/tree/main/projects/compose-design-system",
    status: "In Progress",
    tech: ["Compose", "Material 3", "Hilt", "Kotlin"]
  },
  {
    title: "KMP Weather App",
    description: "Shared business logic between Android and iOS using Kotlin Multiplatform, SQLDelight, and Compose Multiplatform.",
    repo: "https://github.com/Moekyawaung-coder/senior-android-capstone-projects",
    status: "Planned",
    tech: ["KMP", "Ktor", "SQLDelight"]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-6xl font-bold text-green-400 mb-4">Senior Projects</h1>
        <p className="text-2xl text-zinc-400 mb-16">Real-world demonstrations of senior-level Android engineering</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-green-500/20 rounded-3xl p-10 hover:border-green-400 group"
            >
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold">{project.title}</h3>
                <span className="text-xs px-4 py-2 bg-green-900 text-green-400 rounded-full">{project.status}</span>
              </div>
              <p className="text-zinc-400 mt-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tech.map(t => (
                  <span key={t} className="text-xs bg-zinc-800 px-4 py-1 rounded-full text-green-300">{t}</span>
                ))}
              </div>
              <a href={project.repo} target="_blank" 
                 className="mt-10 inline-flex items-center gap-3 text-green-400 hover:text-green-300 group-hover:gap-5 transition-all">
                View Full Project <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
