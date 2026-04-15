'use client';
import { Github, Linkedin, Code2, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <nav className="fixed w-full bg-black/70 backdrop-blur border-b border-green-500/30 z-50">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between">
          <div className="text-3xl font-bold text-green-400">moekyawaung<span className="text-white">.</span>dev</div>
          <div className="flex gap-10 text-lg">
            <a href="#projects" className="hover:text-green-400">Projects</a>
            <a href="#roadmap" className="hover:text-green-400">Roadmap</a>
            <a href="#blog" className="hover:text-green-400">Blog</a>
          </div>
        </div>
      </nav>

      <section className="h-screen flex items-center justify-center text-center">
        <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
          <h1 className="text-8xl font-extrabold mb-4 bg-gradient-to-r from-green-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Moe Kyaw Aung
          </h1>
          <p className="text-4xl text-zinc-400 mb-10">Senior Android Engineer</p>
          <p className="max-w-2xl mx-auto text-xl text-zinc-500 mb-12">
            Crafting high-performance Android apps with Kotlin, Jetpack Compose & Kotlin Multiplatform. 
            Currently following a public senior roadmap.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/Moekyawaung-coder" target="_blank" 
               className="flex items-center gap-3 bg-green-600 hover:bg-green-500 px-10 py-4 rounded-3xl text-lg font-medium">
              <Github size={28} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank"
               className="flex items-center gap-3 border-2 border-green-400 hover:bg-green-400/10 px-10 py-4 rounded-3xl text-lg font-medium">
              <Linkedin size={28} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Add more sections for Projects, Roadmap embed, etc. */}
    </div>
  );
}
