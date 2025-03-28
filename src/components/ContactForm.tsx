import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import Map from '@/components/Map';

const ContactForm = () => {
  const etcoAddress = "Rua Joaquim Floriano 72, 15º Andar, Cj 153, Itaim Bibi, São Paulo - SP, 04534-000";
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Estamos à disposição para esclarecer suas dúvidas e fornecer mais informações
            sobre nossos serviços e parcerias.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envie sua mensagem</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-etco-blue-500 focus:border-etco-blue-500"
                  placeholder="Digite sua mensagem aqui..."
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-etco-blue-500 hover:bg-etco-blue-600 text-white py-6 text-lg">
                Enviar mensagem
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Informações de contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Endereço</h4>
                    <p className="text-gray-600">{etcoAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Telefone</h4>
                    <p className="text-gray-600">+55 (11) 3000-0000</p>
                    <p className="text-gray-600">+55 (11) 99000-0000 (WhatsApp)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">E-mail</h4>
                    <p className="text-gray-600">contato@etco.com.br</p>
                    <p className="text-gray-600">parcerias@etco.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Map 
                address={etcoAddress} 
                className="h-[400px]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
