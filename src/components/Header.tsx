'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Determine header background and logo based on mobile menu state
  const headerBackground = isMobileMenuOpen 
    ? 'bg-white shadow-md' 
    : isScrolled 
      ? 'header-scrolled' 
      : 'header-default';

  // Use different logo based on menu state
  const logoSource = isMobileMenuOpen 
    ? "/images/img_bitpastellogo02300dpi_1.png" // dark version of your logo
    : "/images/img_bitpastellogo02300dpi_1.png"; // original logo

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${headerBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Image 
              src={logoSource} 
              alt="Bitpastel Logo" 
              width={125} 
              height={48}
              className={`h-12 w-auto ${isMobileMenuOpen ? 'filter invert' : 'filter none'}`}
            />
          </div>
          
          {/* Animated Hamburger Button */}
          <button 
            className="md:hidden focus:outline-none transition-transform duration-300 toggle-ham-icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative flex items-center justify-center">
              <span className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out 
                ${isMobileMenuOpen ? 'rotate-45 bg-gray-800' : '-translate-y-1.5 bg-white'}`}></span>
              <span className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out 
                ${isMobileMenuOpen ? 'opacity-0 bg-gray-800' : 'opacity-100 bg-white'}`}></span>
              <span className={`block absolute h-0.5 w-6 transform transition duration-300 ease-in-out 
                ${isMobileMenuOpen ? '-rotate-45 bg-gray-800' : 'translate-y-1.5 bg-white'}`}></span>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
              <Link href="#services" className="text-white text-lg hover:text-primary-teal transition-colors">Services</Link>
              <Link href="#stories" className="text-white text-lg hover:text-primary-teal transition-colors">Stories</Link>
              <Link href="#culture" className="text-white text-lg hover:text-primary-teal transition-colors">Culture</Link>
            </nav>
            <Button variant="teal" className="rounded-md px-6">
              Chat with Us
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4">
            <Link 
              href="#services" 
              className="text-gray-800 text-lg hover:text-primary-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#stories" 
              className="text-gray-800 text-lg hover:text-primary-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link 
              href="#culture" 
              className="text-gray-800 text-lg hover:text-primary-teal transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Culture
            </Link>
          </nav>
          <div className="mt-4">
            <Button variant="teal" className="rounded-md px-6 w-full justify-center">
              Chat with Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
