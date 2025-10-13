import React from 'react';
import { Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  
  // Define the navigation links
  const pages = [
    { name: 'Services', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  // Define the social icons
  const socialIcons = [
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Globe, href: '#' },
  ];

  return (
    // Updated: Using a slightly deeper black for the base
    <section className="relative bg-[#08080c] text-white py-5 px-4 sm:px-8 lg:px-16 border-t border-zinc-900 overflow-hidden">
      
      {/* Custom Galaxy Gradient Overlay: 
          - Centered radial gradient (circle at 50% 50%)
          - Uses deep blue/purple hues for a subtle cosmic glow effect
          - Spreads far out to look like an ambient glow from the center
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 10%, rgba(30, 0, 70, 0.4), rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 50% 100%, rgba(20, 0, 40, 0.3), rgba(0, 0, 0, 0) 50%)',
          opacity: 1,
        }}
      ></div>

      <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row justify-between relative z-10">
        
        {/* Left Side: Company Info & Social Links */}
        <div className="lg:w-1/2 mb-2 lg:mb-0">
          
          {/* Company Name */}
          <h1 className="text-4xl font-semibold mb-2 tracking-wider">
            INNOVENT
          </h1>
          
          {/* Company Description */}
          <p className="text-md text-zinc-400 max-w-sm mb-8">
            Your trusted partner in business consulting, compliance, and strategic growth solutions across global markets.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
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

        {/* Right Side: Pages Navigation */}
        <div className="flex flex-col sm:flex-row sm:space-x-20 lg:space-x-32">
          
          {/* Pages Heading (Matching the design) */}
          <div className="mb-2 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Pages
            </h3>
            <ul className="space-y-3">
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
      
      {/* Copyright line */}
      <div className="text-center mt-10 pt-5 border-t border-zinc-900/50 relative z-10">
          <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} INNOVENT. All rights reserved.</p>
      </div>
      
    </section>
  );
};

export default Footer;
