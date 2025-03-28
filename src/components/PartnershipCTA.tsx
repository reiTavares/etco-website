import React, { useRef, useEffect } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';

const PartnershipCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const benefits = [
    "Acesso à tecnologia de ponta sem investimento inicial",
    "Equipe de apoio especializada para todos os procedimentos",
    "Flexibilidade de agendamento para clínicas parceiras",
    "Ambiente seguro com certificações nacionais e internacionais",
    "Suporte completo pré e pós-operatório"
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Dynamic background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-etco-blue-600 to-etco-blue-800 overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                opacity: Math.random() * 0.5 + 0.2,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
          ))}
        </div>
        
        {/* Radial pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Light effect at the top */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/10 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { 
                opacity: 1, 
                x: 0,
                transition: {
                  duration: 0.6,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-etco-gold-400" fill="currentColor" />
                <span className="text-white/90 text-sm font-medium">Programa Exclusivo</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Seja um Médico ou Clínica <span className="text-etco-gold-400">Parceira</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/90 text-lg mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Proporcione aos seus pacientes o que há de mais avançado em tecnologia 
              oftalmológica, com toda segurança e confiabilidade que a ETCO oferece.
            </motion.p>
            
            <motion.ul 
              className="space-y-4 mb-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1 } 
                    }
                  }}
                >
                  <div className="mt-1 rounded-full bg-etco-gold-500/20 p-1">
                    <Check className="h-4 w-4 text-etco-gold-400" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <Button className="bg-white hover:bg-gray-100 text-etco-blue-600 px-8 py-6 text-lg group transform transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg">
                Saiba mais sobre parcerias
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { duration: 0.6, delay: 0.3 }
              }
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl transform -rotate-3 scale-[0.98]"></div>
            
            <div className="bg-white p-8 rounded-xl shadow-2xl relative z-10">
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <div className="bg-etco-gold-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                  Médicos Parceiros
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Entre em contato</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500 transition-colors"
                    placeholder="Dr. Nome Sobrenome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail profissional
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
                    Especialidade
                  </label>
                  <select
                    id="specialty"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500 transition-colors"
                  >
                    <option value="">Selecione sua especialidade</option>
                    <option value="cornea">Córnea</option>
                    <option value="retina">Retina</option>
                    <option value="catarata">Catarata</option>
                    <option value="glaucoma">Glaucoma</option>
                    <option value="refrativa">Cirurgia Refrativa</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500 transition-colors"
                    placeholder="Conte-nos sobre o seu interesse"
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-etco-blue-500 hover:bg-etco-blue-600 text-white py-6 text-lg transform transition-all duration-300 hover:shadow-lg">
                  Enviar mensagem
                </Button>
              </form>
              
              {/* Add decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-etco-gold-100 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-etco-blue-100 rounded-full blur-xl opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCTA;
