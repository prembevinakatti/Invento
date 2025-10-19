import React from 'react';
import { Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const pages = [
    { name: 'Services', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  const socialIcons = [
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Globe, href: '#' },
  ];

  return (
    <section className="relative bg-[#08080c] text-white py-10 px-4 sm:px-8 lg:px-16 border-t border-zinc-900 overflow-hidden">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 10%, rgba(30, 0, 70, 0.4), rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 50% 100%, rgba(20, 0, 40, 0.3), rgba(0, 0, 0, 0) 50%)',
          opacity: 1,
        }}
      ></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between relative z-10 gap-10">
        {/* Left Side */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-2 tracking-wider">
            INNOVENT
          </h1>
          <p className="text-md text-zinc-400 max-w-md mb-6 sm:mb-8">
            Your trusted partner in business consulting, compliance, and strategic growth solutions across global markets.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socialIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition duration-200 text-white/90"
                  aria-label={`Link to ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Side: Pages */}
        <div className="flex flex-col sm:flex-row sm:gap-16 lg:gap-32">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Pages</h3>
            <ul className="space-y-2 sm:space-y-3">
              {pages.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-md text-zinc-400 hover:text-white transition duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 pt-5 border-t border-zinc-900/50 relative z-10">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} INNOVENT. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
