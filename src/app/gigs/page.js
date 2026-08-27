"use client";

import { motion } from "framer-motion";

const gigs = [
  {
    title:
      "Multi-Agent AI Setup & Fix — Jarvis, OpenClaw, Claude Code, Hermes Agent, Obsidian Vault",
    platform: "Fiverr",
    price: "$20",
    delivery: "3-7 Days Delivery",
    description:
      "Is your AI setup working halfway, but your Jarvis, OpenClaw, or Hermes Agent still feels stuck? I can help you build, fix, configure, and connect multi-agent AI systems using OpenClaw, Claude Code, Hermes Agent, Obsidian Vault, and Jarvis AI.",
    link: "https://www.fiverr.com/s/43GRg7k",
  },
  {
    title:
      "Multi-Agent AI Trading Bot Setup & Fix — OpenClaw, Jarvis AI, MCP, Docker, VPS",
    platform: "Fiverr",
    price: "$20",
    delivery: "3-7 Days Delivery",
    description:
      "Is your multi-agent AI trading setup working halfway, but something keeps breaking? Maybe OpenClaw is installed, Jarvis AI is running, yet your agents, MCP server, Docker, or VPS are not connecting as expected. I can help fix, set up, and deploy your AI trading bot and multi-agent system with a clean, reliable setup.",
    link: "https://www.fiverr.com/s/p3pGvoZ",
  },
  {
    title: "Responsive WordPress Website Design, Redesign, Fix & Update",
    platform: "Upwork",
    price: "$50",
    delivery: "3-7 Days Delivery",
    description:
      "Most WordPress sites look like 2014 called and wants its layout back. If your site doesn't sell, it's just a digital paperweight. I help fix slow, broken-on-mobile, or generic-looking WordPress sites so they actually convert visitors into leads.",
    link: "https://www.upwork.com/services/product/development-it-a-responsive-wordpress-website-design-wordpress-website-redesign-fix-update-2051472717250049623",
  },
];

export default function Gigs() {
  return (
    <section className="bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-orange font-semibold tracking-wide mb-2">
            Hire Me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy">Gigs</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gigs.map((gig, i) => (
            <motion.a
              key={gig.title}
              href={gig.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl border border-navy/10 hover:border-orange transition-colors duration-300 overflow-hidden flex flex-col"
            >
              <div className="bg-navy p-6 relative">
                <span className="inline-block bg-orange text-cream text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Starts at {gig.price}
                </span>
                <p className="text-cream font-bold text-lg leading-snug">
                  {gig.title}
                </p>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="text-navy/60 text-sm leading-relaxed mb-6 flex-1">
                  {gig.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange font-medium">
                    {gig.platform}
                  </span>
                  <span className="text-navy/50">{gig.delivery}</span>
                </div>
                <span className="mt-4 inline-block text-navy group-hover:text-orange font-medium text-sm transition-colors duration-300">
                  See Details →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
