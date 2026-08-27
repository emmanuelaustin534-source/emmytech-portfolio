import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "EmmyTech | Full-Stack Developer & AI Automation",
  description:
    "Portfolio of EmmyTech — full-stack web developer specializing in React, Next.js, and AI-powered automations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-navy antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
