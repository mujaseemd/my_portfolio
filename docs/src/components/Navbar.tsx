import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
          <span className="text-blue-600">Portfolio</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['home', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`${
                    scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                  } capitalize font-medium transition-colors`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col space-y-4">
              {['home', 'about', 'education', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((item) => (
                <li key={item} className="px-4">
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-800 hover:text-blue-600 capitalize font-medium transition-colors w-full text-left py-2"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;