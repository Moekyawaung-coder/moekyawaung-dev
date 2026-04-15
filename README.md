# 🌐 moekyawaung.dev — Senior Android Engineer Portfolio

Live Demo: Deploy this repository on Vercel (one-click).

Modern, lightning-fast portfolio for Moe Kyaw Aung.
- Dark theme with neon green & purple accents
- Framer Motion animations
- Direct links to all 4 senior repositories
- SEO optimized for “Senior Android Engineer”

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, Lucide Icons

**Quick Start:**
```bash
git clone https://github.com/Moekyawaung-coder/moekyawaung-dev.git
cd moekyawaung-dev
npm install
npm run dev
```
```

**File 2: app/page.tsx** (Full beautiful homepage — replace everything)
```tsx
'use client';
import { Github, Linkedin, ArrowRight, Code2, Trophy, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen font-sans">
      <nav className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-lg border-b border-green-500/20 z-50">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tight text-green-400">moekyawaung.dev</div>
          <div className="flex gap-10 text-sm uppercase tracking-widest">
            <a href="#projects" className="hover:text-green-400 transition">Projects</a>
            <a href="#roadmap" className="hover:text-green-400 transition">Roadmap</a>
            <a href="#dashboard" className="hover:text-green-400 transition">Dashboard</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#22FF88_1px,transparent_1px)] bg-[length:40px_40px] opacity-5"></div>
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6 max-w-5xl"
        >
          <div className="inline-flex items-center gap-3 bg-green-950 text-green-400 text-sm px-6 py-2 rounded-full mb-8 border border-green-500/30">
            <Trophy className="w-5 h-5" /> Senior Android Engineer Journey
          </div>
          
          <h1 className="text-8xl font-black mb-6 tracking-tighter bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Moe Kyaw Aung
          </h1>
          <p className="text-4xl text-zinc-400 mb-10">Senior Android Engineer</p>
          
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 leading-relaxed mb-12">
            4+ years crafting pixel-perfect, high-performance Android applications using modern Kotlin, 
            Jetpack Compose, Clean Architecture and Kotlin Multiplatform. 
            Publicly documenting my senior roadmap across four dedicated repositories.
          </p>

          <div className="flex gap-5 justify-center">
            <a href="https://github.com/Moekyawaung-coder" target="_blank"
               className="flex items-center gap-3 bg-green-600 hover:bg-green-500 px-10 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-105">
              <Github className="w-6 h-6" /> GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank"
               className="flex items-center gap-3 border-2 border-green-400 hover:bg-green-400/10 px-10 py-4 rounded-2xl text-lg font-semibold transition-all hover:scale-105">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-16 text-center">Senior Capstone Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-10 rounded-3xl border border-green-500/20 hover:border-green-400 transition">
              <Code2 className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-3xl font-semibold mb-3">Compose Design System</h3>
              <p className="text-zinc-400">Reusable UI library following Material 3 with dark mode, animations and accessibility built-in.</p>
              <a href="https://github.com/Moekyawaung-coder/senior-android-capstone-projects" className="text-green-400 mt-8 inline-flex items-center gap-2">
                View in Repo 4 <ArrowRight />
              </a>
            </div>
            {/* Add more project cards as you build them */}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-zinc-500 text-sm">
        Built with passion as part of my Senior Android Roadmap • 2025
      </footer>
    </div>
  );
}
```
