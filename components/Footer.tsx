import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import "@/styles/Footer.scss"
import Image from 'next/image';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#111827] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Brilliant Minds Logo"
              width={180}
              height={40}
              className=""
            />
          </Link>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Revolutionizing systems through technology to solve key societal challenges.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/solutions/digital-inclusion" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Digital Inclusion
                </Link>
              </li>
              <li>
                <Link href="/solutions/e-learning" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  E-Learning
                </Link>
              </li>
              <li>
                <Link href="/solutions/gig-economy" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Gig Economy
                </Link>
              </li>
              <li>
                <Link href="/solutions/skill-development" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Skill Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/about/news" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start">
                <Mail size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:hello@brilliantminds.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  hello@brilliantminds.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Nairobi, KE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} BrilliantMinds. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;