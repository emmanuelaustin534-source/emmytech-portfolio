"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "@/components/Counter";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          ".hero-heading",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3",
        )
        .fromTo(
          ".hero-paragraph",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4",
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        );

      gsap.to(photoRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    const servicesCtx = gsap.context(() => {
      gsap.fromTo(
        servicesRef.current,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, servicesRef);

    const projectsCtx = gsap.context(() => {
      gsap.fromTo(
        projectsRef.current,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, projectsRef);

    const testimonialsCtx = gsap.context(() => {
      gsap.fromTo(
        testimonialsRef.current,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, testimonialsRef);

    const ctaCtx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.92, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, ctaRef);

    return () => {
      ctx.revert();
      servicesCtx.revert();
      projectsCtx.revert();
      testimonialsCtx.revert();
      ctaCtx.revert();
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen bg-cream overflow-hidden flex items-center pt-20"
      >
        {/* Background glow accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="hero-eyebrow text-orange font-semibold tracking-wide mb-4">
              Hey there,
            </p>
            <h1 className="hero-heading text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight mb-6">
              I&apos;m Emmanuel
            </h1>
            <p className="hero-paragraph text-navy/70 text-lg mb-8 max-w-md">
              A full-stack developer building fast, modern web experiences with
              React, Next.js &amp; Tailwind, and powering businesses with custom
              AI automations and AI agents.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange-dark text-cream px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                Let&apos;s Work Together
              </Link>
              <Link
                href="/portfolio"
                className="border border-navy/20 hover:border-orange text-navy px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div
              ref={photoRef}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-orange/10 flex items-center justify-center"
            >
              <Image
                src="/hero-photo.jpg"
                alt="Emmy - Full Stack Developer"
                width={400}
                height={400}
                className="rounded-full object-cover w-full h-full border-4 border-orange/40"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-orange mb-2">
              <Counter end={5} suffix="+" />
            </p>
            <p className="text-cream/70">Years of Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-orange mb-2">
              <Counter end={50} suffix="+" />
            </p>
            <p className="text-cream/70">Projects Completed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-4xl md:text-5xl font-bold text-orange mb-2">
              <Counter end={100} suffix="%" />
            </p>
            <p className="text-cream/70">Client Satisfaction</p>
          </motion.div>
        </div>
      </section>

      <section ref={servicesRef} className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-semibold tracking-wide mb-2">
              What I Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Services Built to Grow Your Business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Stack Development",
                desc: "Custom websites and web apps built with React, Next.js, PHP & MySQL.",
              },
              {
                title: "AI Automation & Agents",
                desc: "Custom AI agents and automated workflows that save time and scale your business.",
              },
              {
                title: "API Integration & WordPress",
                desc: "Seamless third-party integrations and custom WordPress builds.",
              },
              {
                title: "UI/UX & Frontend Design",
                desc: "Clean, modern interfaces designed for great user experience.",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-navy/10 hover:border-orange transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-5">
                  <div className="w-5 h-5 rounded-full bg-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={projectsRef} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-14 gap-4">
            <div>
              <p className="text-orange font-semibold tracking-wide mb-2">
                My Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-navy hover:text-orange font-medium transition-colors duration-300 whitespace-nowrap"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Project One", tag: "Full-Stack Web App" },
              { title: "Project Two", tag: "AI Automation" },
              { title: "Project Three", tag: "WordPress Build" },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center mb-4 overflow-hidden relative">
                  <p className="text-cream/40 text-sm">Image Coming Soon</p>
                  <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-300" />
                </div>
                <p className="text-orange text-sm font-medium mb-1">
                  {project.tag}
                </p>
                <h3 className="text-lg font-bold text-navy">{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-semibold tracking-wide mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-cream">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Emmy delivered our web app ahead of schedule with clean, reliable code. Communication was excellent throughout.",
                name: "Sarah Mitchell",
                role: "Startup Founder, UK",
              },
              {
                quote:
                  "The AI automation Emmy built saved us hours of manual work every week. Highly professional and easy to work with.",
                name: "David Kruger",
                role: "Operations Manager, Germany",
              },
              {
                quote:
                  "Great attention to detail and strong technical skills. Our WordPress site has never run smoother.",
                name: "Emily Carter",
                role: "Small Business Owner, Canada",
              },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-light rounded-2xl p-8 border border-white/10"
              >
                <p className="text-cream/80 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-cream font-semibold">{t.name}</p>
                <p className="text-orange text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="bg-cream py-20"></section>

      <section ref={ctaRef} className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-navy/70 mb-8 max-w-xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it and help
            bring your idea to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-orange hover:bg-orange-dark text-cream px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
