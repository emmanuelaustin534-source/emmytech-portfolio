"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Full-Stack", "AI Automation", "WordPress", "UI/UX"];

const projects = [
  {
    title: "Shopify COD & NDR Order Workflow (Airtable + n8n)",
    category: "AI Automation",
    tag: "n8n Automation",
    image: "/projects/n8n-shopify-cod-ndr.jpg",
    description:
      "An n8n automation managing Shopify Cash-On-Delivery and No-Delivery-Return orders, fully synced with Airtable — checking for new COD orders hourly, assigning them to staff evenly, and auto-updating shipping status. NDR orders are processed each morning, logged, and reassigned for follow-up.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orange font-semibold tracking-wide mb-2">
            My Work
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">
            Portfolio
          </h1>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-orange text-cream"
                  : "bg-white text-navy border border-navy/10 hover:border-orange"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl mb-4 overflow-hidden relative bg-navy">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-cream/40 text-sm">Image Coming Soon</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-300" />
                </div>
                <p className="text-orange text-sm font-medium mb-1">
                  {project.tag}
                </p>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
