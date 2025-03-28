import React, { useRef, useEffect } from 'react';
import { Microscope, Eye, HeartPulse, Shield, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, icon, image, className, style }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className={cn(
        "flex flex-col items-center p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-etco-blue-200 transition-all duration-300 bg-white group overflow-hidden relative",
        className
      )}
      style={style}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-etco-blue-50 text-etco-blue-500 mb-4 group-hover:scale-110 transition-transform z-10">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-etco-blue-600 transition-colors z-10">{title}</h3>
      
      <p className="text-gray-600 text-center mb-4 z-10">{description}</p>
      
      <Button variant="ghost" size="sm" className="text-etco-blue-500 hover:text-etco-blue-600 hover:bg-etco-blue-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
        Saiba mais <ChevronRight className="h-4 w-4 ml-1" />
      </Button>
    </motion.div>
  );
};

const ServiceHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const services = [
    {
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para cirurgias refrativas e tratamento de patologias oculares.",
      icon: <Microscope size={32} strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format"
    },
    {
      title: "Diagnóstico Preciso",
      description: "Centro completo de diagnóstico para avaliação pré e pós-operatória com máxima precisão.",
      icon: <Eye size={32} strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=500&auto=format"
    },
    {
      title: "Equipe Especializada",
      description: "Staff médico e de enfermagem altamente qualificado para todas as etapas do atendimento.",
      icon: <HeartPulse size={32} strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=500&auto=format"
    },
    {
      title: "Segurança Certificada",
      description: "Ambiente cirúrgico com padrões internacionais de segurança e protocolos validados.",
      icon: <Shield size={32} strokeWidth={1.5} />,
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=500&auto=format"
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-etco-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-etco-gold-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="inline-block mb-2 px-4 py-1 bg-etco-blue-50 text-etco-blue-600 rounded-full text-sm font-medium"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Nossos diferenciais
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className="gradient-text">Excelência</span> em Oftalmologia
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            Oferecemos uma estrutura completa para médicos e clínicas realizarem procedimentos
            com máxima precisão e segurança.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        {/* Added new visual element */}
        <motion.div 
          className="mt-16 p-8 bg-gradient-to-r from-etco-blue-600 to-etco-blue-800 rounded-xl shadow-xl text-white relative overflow-hidden flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
            </svg>
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
          </div>
          
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8 relative z-10">
            <h3 className="text-2xl font-bold mb-3">Tecnologia de classe mundial</h3>
            <p className="text-white/80">
              Contamos com os mais avançados equipamentos para diagnóstico e tratamento oftalmológico, garantindo resultados superiores e segurança máxima para seus pacientes.
            </p>
          </div>
          
          <div className="md:w-1/3 flex justify-center relative z-10">
            <Button className="bg-white text-etco-blue-600 hover:bg-etco-blue-50 px-6 py-6 text-lg font-medium">
              Conhecer equipamentos
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
