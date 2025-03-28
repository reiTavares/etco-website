import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Microscope, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(htmlElement.dataset.speed || '0.1');
        htmlElement.style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-etco-blue-50/70 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        
        {/* Floating elements */}
        <div className="parallax absolute -top-10 right-10 w-64 h-64 rounded-full bg-etco-blue-100/30 blur-3xl" data-speed="0.05"></div>
        <div className="parallax absolute top-40 -left-20 w-72 h-72 rounded-full bg-etco-gold-100/20 blur-3xl" data-speed="0.08"></div>
        <div className="parallax absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-etco-blue-200/20 blur-3xl" data-speed="0.03"></div>
      </div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">Centro Cirúrgico</span>{' '}
              <span className="text-gray-800">Oftalmológico de</span>{' '}
              <span className="gradient-gold">Excelência</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Estrutura de ponta para médicos oftalmologistas e clínicas que priorizam segurança e precisão nos procedimentos cirúrgicos.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Button className="bg-etco-blue-500 hover:bg-etco-blue-600 text-white px-8 py-6 text-lg group transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-lg">
                Conheça nossa estrutura
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-etco-blue-300 text-etco-blue-600 hover:bg-etco-blue-50 px-8 py-6 text-lg transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-md">
                Parcerias médicas
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Illustration with advanced effects */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format" 
                alt="Cirurgia Oftalmológica de Alta Precisão" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-etco-blue-900/50 to-transparent"></div>
              
              {/* Animated icons */}
              <motion.div 
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <Microscope className="h-8 w-8 text-etco-blue-500" />
              </motion.div>
              
              <motion.div 
                className="absolute top-24 right-16 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <Eye className="h-6 w-6 text-etco-gold-500" />
              </motion.div>
              
              <motion.div 
                className="absolute top-16 left-6 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
              >
                <Shield className="h-6 w-6 text-etco-blue-500" />
              </motion.div>
              
              {/* Stats indicators with animated counters */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                <motion.div 
                  className="glass-card rounded-xl p-3 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-white text-lg md:text-xl font-bold">99.8%</p>
                  <p className="text-white/80 text-xs md:text-sm">Precisão</p>
                </motion.div>
                <motion.div 
                  className="glass-card rounded-xl p-3 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-white text-lg md:text-xl font-bold">+15k</p>
                  <p className="text-white/80 text-xs md:text-sm">Procedimentos</p>
                </motion.div>
                <motion.div 
                  className="glass-card rounded-xl p-3 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-white text-lg md:text-xl font-bold">+500</p>
                  <p className="text-white/80 text-xs md:text-sm">Médicos</p>
                </motion.div>
              </div>
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-1/3 h-1/3 bg-etco-gold-100 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-1/4 h-1/4 bg-etco-blue-200 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
