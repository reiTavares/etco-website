import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Centro Cirúrgico', href: '/centro-cirurgico' },
    { name: 'Exames & Diagnósticos', href: '/diagnosticos' },
    { name: 'Contato', href: '/contato' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled
          ? 'py-2 bg-white/90 shadow-md backdrop-blur-sm'
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-etco-blue-600">ETCO</span>
          <span className="hidden md:block text-sm font-medium text-etco-blue-500">
            Centro Cirúrgico Oftalmológico
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'font-medium text-base transition-colors hover:text-etco-blue-500',
                location.pathname === item.href
                  ? 'text-etco-blue-500'
                  : 'text-gray-600'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-etco-blue-500 hover:bg-etco-blue-600 font-medium">
            Seja Parceiro
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 top-[56px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-4 pt-8 gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'font-medium text-xl p-2 transition-colors',
                location.pathname === item.href
                  ? 'text-etco-blue-500'
                  : 'text-gray-600'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            className="bg-etco-blue-500 hover:bg-etco-blue-600 font-medium w-full mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Seja Parceiro
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
