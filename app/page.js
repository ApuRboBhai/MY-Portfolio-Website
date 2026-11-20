'use client';

import React from 'react';
import Image from 'next/image';
import MatrixBackground from '@/components/MatrixBackground';
import { 
  Mail, 
  FileText, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Layers
} from 'lucide-react';

function GithubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0f] text-slate-200 relative overflow-hidden font-sans selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Animated Background */}
      <MatrixBackground />

      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider text-white border border-slate-700 px-3 py-1 rounded hover:border-cyan-400 transition-colors">
            Mofassir
          </a>
          <nav className="hidden md:flex space-x-8 text-xs tracking-widest text-slate-400 font-mono">
            {['ABOUT', 'SKILLS', 'PROJECTS', 'CONTACT'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-screen">
        
        {/* Left Column: Intro */}
        <div className="lg:col-span-5 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            AVAILABLE FOR FREELANCE & FULL-TIME
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-white leading-tight">
             MD.MOFASSIR HOSSAIN<br />
              <span className="text-slate-400 italic text-xl md:text-2xl font-sans">Full-Stack Web Developer</span>
            </h1>
          </div>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
           I build modern, high-performance websites that help businesses grow, scale, and succeed online.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#contact" className="px-6 py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
            <a href="/resume.pdf" target="_blank" className="px-6 py-3 rounded-md border border-slate-700 text-white font-semibold text-sm hover:border-slate-500 transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" /> Download CV
            </a>
          </div>

          {/* Key Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 font-mono">
            <div>
              <p className="text-xs text-slate-500 uppercase">Based in</p>
              <p className="text-sm font-semibold text-slate-200">Dhaka, BD</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Experience</p>
              <p className="text-sm font-semibold text-slate-200">1+ Years</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase">Stack</p>
              <p className="text-sm font-semibold text-slate-200">Next.js / React</p>
            </div>
          </div>
        </div>

        {/* Center Column: Portrait Photo with Glow Effect */}
        <div className="lg:col-span-4 flex justify-center relative z-10">
          <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border border-slate-800 ">
            <div className="absolute inset-0 "></div>
            
            {/* আপনার ছবি public/profile.png ফোল্ডারে রাখবেন */}
            <Image 
              src="/profile.jpg" 
              alt="Developer Profile" 
              fill 
              className="object-cover object-center filter  contrast-125 group-hover:grayscale-0 transition-all duration-500"
              priority
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Terminal Box Widget */}
        <div className="lg:col-span-3 z-10 hidden lg:block">
          <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-4 font-mono text-xs space-y-3 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>bash - status</span>
            </div>
            <div className="space-y-1.5 text-slate-300">
              <p className="text-cyan-400">$ whoami</p>
              <p className="text-slate-400 pl-2">Full-Stack Next.js Developer</p>
              <p className="text-cyan-400">$ git status</p>
              <p className="text-emerald-400 pl-2">✓ On branch main. Ready to build.</p>
              <p className="text-cyan-400">$ stack --list</p>
              <p className="text-slate-400 pl-2">[Next.js, React, Tailwind, JS, Node]</p>
            </div>
          </div>
        </div>

      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-t border-slate-800/60 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-2xl font-serif text-white tracking-wide mb-8 flex items-center gap-3">
          <Code2 className="text-cyan-400 w-6 h-6" /> Skills & Frameworks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
            <h3 className="text-lg font-medium text-white mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded bg-slate-800/80 text-xs text-slate-300 border border-slate-700/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
            <h3 className="text-lg font-medium text-white mb-4">Backend & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'REST API', 'Git & GitHub', 'Vercel', 'VS Code'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded bg-slate-800/80 text-xs text-slate-300 border border-slate-700/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all">
            <h3 className="text-lg font-medium text-white mb-4">Core Focus</h3>
            <div className="flex flex-wrap gap-2">
              {['Responsive Design', 'SEO Optimization', 'Server Side Rendering', 'Clean Code'].map(skill => (
                <span key={skill} className="px-3 py-1 rounded bg-slate-800/80 text-xs text-slate-300 border border-slate-700/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-slate-800/60 max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-2xl font-serif text-white tracking-wide mb-8 flex items-center gap-3">
          <Layers className="text-cyan-400 w-6 h-6" /> Things I&apos;ve Built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs text-cyan-400 font-mono">NEXT.JS / REACT</span>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    Project Name {item}
                  </h3>
                </div>
                <div className="flex gap-3 text-slate-400">
                  <a href="#" className="hover:text-white"><GithubIcon className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-white"><ExternalLink className="w-5 h-5" /></a>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                আপনার তৈরি করা প্রজেক্টের সংক্ষিপ্ত বিবরণ। এতে কী ফিচার আছে এবং কী সমস্যা সমাধান করে তা উল্লেখ করুন।
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono text-slate-500">#nextjs</span>
                <span className="text-xs font-mono text-slate-500">#react</span>
                <span className="text-xs font-mono text-slate-500">#tailwind</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-slate-800/60 max-w-7xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs text-cyan-400 font-mono tracking-widest uppercase">FREELANCE & COLLABORATION</span>
        <h2 className="text-4xl md:text-5xl font-serif text-white mt-2 mb-6">Your vision, my code. Let's build.</h2>
        <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base mb-8">
    Feel free to email me to discuss new projects or opportunities.
        </p>
        
        <a 
          href="mailto:your-email@example.com" 
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors text-sm"
        >
          <Mail className="w-4 h-4" /> mofassirhossain21@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-12 text-slate-400">
          <a href="https://github.com/ApuRboBhai" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/md-mofassir-hossain-a621bb315" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} MD.MOFASSIR HOSSAIN Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}