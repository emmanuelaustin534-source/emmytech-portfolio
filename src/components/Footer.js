import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream/70 pt-16 pb-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/logo-light.png"
            alt="EmmyTech"
            width={220}
            height={70}
            className="h-16 w-auto mb-3"
          />
          <p className="text-sm leading-relaxed">
            Full-stack developer crafting fast, modern web experiences and
            AI-powered automations that help businesses grow.
          </p>
        </div>

        <div>
          <h4 className="text-cream font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-orange transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-orange transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-orange transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/gigs"
                className="hover:text-orange transition-colors"
              >
                Gigs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream font-semibold mb-4">Get In Touch</h4>
          <p className="text-sm mb-2">austinemmanuel256@gmail.com</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/emmanuelaustin534-source"
              className="hover:text-orange transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-augustine-62aa7741a"
              className="hover:text-orange transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0147c5e6424f45c563?viewMode=1"
              className="hover:text-orange transition-colors"
            >
              Upwork
            </a>
            <a
              href="https://www.fiverr.com/eniola_emmadev"
              className="hover:text-orange transition-colors"
            >
              Fiverr
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs text-center">
        © {new Date().getFullYear()} EmmyTech. All Rights Reserved.
      </div>
    </footer>
  );
}
