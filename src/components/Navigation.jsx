'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/services', 
      label: 'Services',
      hasDropdown: true,
      subItems: [
        { href: '/services/web-development', label: 'Web Development' },
        { href: '/services/mobile-development', label: 'Mobile Development' },
        { href: '/services/business-solutions', label: 'Business Solutions' },
        { href: '/services/design', label: 'Design Services' },
        { href: '/services/marketing', label: 'Social Media & Marketing' },
      ]
    },
    { href: '/projects', label: 'Projects' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      style={isScrolled ? {
        backgroundImage: 'linear-gradient(90deg, rgba(59, 130, 246, 0.02) 0%, transparent 50%, rgba(59, 130, 246, 0.02) 100%)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo with Icon */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Image
                src="/smart-move-logo.svg"
                alt="Smart Move Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#167dc1] to-[#0f4a7a] bg-clip-text text-transparent"
            >
              SMART MOVE
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#167dc1] transition-colors duration-200"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: servicesOpen ? 1 : 0, 
                        y: servicesOpen ? 0 : 10 
                      }}
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-blue-200 ${
                        servicesOpen ? 'block' : 'hidden'
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="py-2">
                        {item.subItems?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#167dc1] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#167dc1] transition-colors duration-200 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#167dc1] transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#167dc1] to-[#125a91] text-white px-6 py-2 rounded-full hover:shadow-lg hover:from-[#125a91] hover:to-[#0f4a7a] transition-all duration-200"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#167dc1] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          className="md:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2 border border-blue-200 absolute top-full left-4 right-4 z-50 max-h-screen"
        >
          <div className="py-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#167dc1] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-8 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#167dc1] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-4 py-3">
              <button className="w-full bg-gradient-to-r from-[#167dc1] to-[#125a91] text-white px-6 py-2 rounded-full hover:from-[#125a91] hover:to-[#0f4a7a] transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;