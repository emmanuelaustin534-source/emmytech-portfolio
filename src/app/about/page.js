"use client";

import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";

export default function About() {
  return (
    <section className="bg-cream pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange font-semibold tracking-wide mb-2">
              Hello,
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              I&apos;m Emmanuel Augustine
            </h1>
            <p className="text-navy/70 text-lg leading-relaxed">
              I&apos;m a full-stack web developer with 5+ years of experience
              building fast, modern websites and applications using React,
              Next.js, PHP &amp; MySQL. Beyond web development, I specialize in
              AI automations and AI agent development, helping businesses
              streamline operations and unlock new levels of efficiency through
              custom-built AI solutions. I&apos;m passionate about clean code,
              thoughtful design, and delivering real results for every client I
              work with.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 border border-navy/10 grid grid-cols-2 gap-6"
          >
            <div>
              <p className="text-orange text-sm font-medium mb-1">Full Name</p>
              <p className="text-navy font-semibold">Emmanuel Augustine</p>
            </div>
            <div>
              <p className="text-orange text-sm font-medium mb-1">Age</p>
              <p className="text-navy font-semibold">23</p>
            </div>
            <div>
              <p className="text-orange text-sm font-medium mb-1">
                Availability
              </p>
              <p className="text-navy font-semibold">
                Freelance &amp; Full-time
              </p>
            </div>
            <div>
              <p className="text-orange text-sm font-medium mb-1">Location</p>
              <p className="text-navy font-semibold">Nigeria</p>
            </div>
            <div>
              <p className="text-orange text-sm font-medium mb-1">Email</p>
              <p className="text-navy font-semibold break-words">
                austinemmanuel256@gmail.com
              </p>
            </div>
            <div>
              <p className="text-orange text-sm font-medium mb-1">Phone</p>
              <p className="text-navy font-semibold">+234 814 786 0571</p>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange font-semibold tracking-wide mb-2">
            My Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
            Tools &amp; Technologies I Work With
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { name: "React.js", level: 95 },
              { name: "Next.js", level: 95 },
              { name: "JavaScript", level: 90 },
              { name: "PHP & MySQL", level: 85 },
              { name: "Tailwind CSS", level: 90 },
              { name: "AI Automation & Agents", level: 90 },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-navy font-medium">{skill.name}</span>
                  <span className="text-orange font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full h-2 bg-navy/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.08,
                      ease: "easeOut",
                    }}
                    className="h-full bg-orange rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="bg-navy py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cream mb-8">
              My Experience
            </h2>
            <div className="bg-navy-light rounded-2xl p-6 border border-white/10">
              <span className="inline-block bg-orange text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
                2026 - Present
              </span>
              <h3 className="text-cream font-bold text-lg mb-1">
                Full Stack Developer
              </h3>
              <p className="text-orange text-sm mb-3">
                Dalse Tech Hub — Full Time
              </p>
              <p className="text-cream/60 text-sm leading-relaxed">
                Building and maintaining full-stack web applications, working
                across the frontend and backend, and integrating AI-powered
                automations into business workflows.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cream mb-8">
              My Education
            </h2>
            <div className="bg-navy-light rounded-2xl p-6 border border-white/10">
              <span className="inline-block bg-orange text-cream text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Graduated 2021
              </span>
              <h3 className="text-cream font-bold text-lg mb-1">
                B.Sc. Computer Science
              </h3>
              <p className="text-orange text-sm mb-3">
                Adekunle Ajasin University
              </p>
              <p className="text-cream/60 text-sm leading-relaxed">
                Built a strong foundation in computer science principles,
                algorithms, and software development, which laid the groundwork
                for a career in full-stack web development.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <FAQ />
    </section>
  );
}
