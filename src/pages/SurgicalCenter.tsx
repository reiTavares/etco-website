import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Microscope, Shield, Award, Clock } from 'lucide-react';

const SurgicalCenter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <section className="container-custom mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Centro <span className="gradient-text">Cirúrgico</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estrutura de ponta para cirurgias oftalmológicas com equipamentos de última geração,
              garantindo máxima precisão e segurança em todos os procedimentos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Excelência em <span className="text-etco-blue-600">Cirurgias Oftalmológicas</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nosso centro cirúrgico foi projetado seguindo os mais rigorosos padrões internacionais 
                de qualidade e segurança, oferecendo aos médicos oftalmologistas um ambiente ideal 
                para a realização de procedimentos cirúrgicos com máxima precisão.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Contamos com salas cirúrgicas totalmente equipadas com tecnologia de ponta, 
                permitindo a realização de diversos procedimentos oftalmológicos avançados.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Microscope size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Tecnologia</h4>
                    <p className="text-sm text-gray-600">Equipamentos de última geração</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Shield size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Segurança</h4>
                    <p className="text-sm text-gray-600">Protocolos internacionais</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Award size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Qualidade</h4>
                    <p className="text-sm text-gray-600">Certificações de excelência</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Eficiência</h4>
                    <p className="text-sm text-gray-600">Processos otimizados</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format" 
                alt="Centro Cirúrgico ETCO" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Procedimentos Cirúrgicos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-etco-blue-600">Cirurgias Refrativas</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>LASIK com Femtosegundo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>PRK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>SMILE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Crosslinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Implante de LIO Fáquica</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-etco-blue-600">Cirurgias de Segmento Anterior</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Facoemulsificação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Implante de LIO Premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Cirurgia de Glaucoma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Trabeculectomia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Implante de Stent</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-etco-blue-600">Procedimentos Especializados</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Ceratoplastia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Blefaroplastia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>SLT (Trabeculoplastia a Laser)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>YAG Laser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <span>Pterígio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Estrutura e Equipamentos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for equipment - in a real implementation you'd have actual equipment data */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Equipamento {item}</h3>
                    <p className="text-gray-600">
                      Descrição detalhada do equipamento e seus benefícios para os procedimentos cirúrgicos.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SurgicalCenter;
