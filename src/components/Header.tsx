'use client';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header: React.FC = () => {

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change background after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    // 
    <header 
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? 'header-scrolled' : 'header-default'
    }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Image 
              src="/images/img_bitpastellogo02300dpi_1.png" 
              alt="Bitpastel Logo" 
              width={125} 
              height={48}
              className="h-12 w-auto"
            />
          </div>
         <div className='flex items-center space-x-8'>
           <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="#services" className="text-white text-lg hover:text-primary-teal transition-colors">Services</Link>
            <Link href="#stories" className="text-white text-lg hover:text-primary-teal transition-colors">Stories</Link>
            <Link href="#culture" className="text-white text-lg hover:text-primary-teal transition-colors">Culture</Link>
          </nav>
          <Button 
            variant="teal" 
            className="rounded-md px-6"
          >
            Chat with Us
          </Button>
         </div>
        </div>
      </div>
    </header>
  );
};

export default Header;