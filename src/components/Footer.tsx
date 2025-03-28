import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-white">ETCO</span>
              <span className="text-sm font-medium text-gray-300">
                Centro Cirúrgico Oftalmológico
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Tecnologia e segurança em cirurgias oftalmológicas para médicos e clínicas parceiras.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-etco-blue-600 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-etco-blue-600 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-etco-blue-600 transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 hover:bg-etco-blue-600 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/centro-cirurgico" className="text-gray-400 hover:text-white transition-colors">
                  Centro Cirúrgico
                </Link>
              </li>
              <li>
                <Link to="/diagnosticos" className="text-gray-400 hover:text-white transition-colors">
                  Exames e Diagnósticos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors">
                Cirurgia Refrativa
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Cirurgia de Catarata
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Diagnóstico Avançado
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Tratamento de Glaucoma
              </li>
              <li className="text-gray-400 hover:text-white transition-colors">
                Parcerias Médicas
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100
              </li>
              <li className="text-gray-400">
                +55 (11) 3000-0000
              </li>
              <li className="text-gray-400">
                contato@etco.com.br
              </li>
              <li className="text-gray-400">
                Horário: Segunda a Sexta, 8h às 18h
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-10" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ETCO Centro Cirúrgico Oftalmológico. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <Link to="/politica-de-privacidade" className="text-gray-500 hover:text-white text-sm">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-gray-500 hover:text-white text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
