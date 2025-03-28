import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <section className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Sobre a <span className="gradient-text">ETCO</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                O ETCO - Centro Cirúrgico Oftalmológico nasceu da visão de oferecer aos 
                médicos oftalmologistas e clínicas um ambiente cirúrgico de excelência, 
                com a melhor tecnologia disponível no mercado e protocolos de segurança 
                que garantem resultados excepcionais.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Com mais de uma década de experiência, nos tornamos referência em procedimentos 
                oftalmológicos avançados, sempre acompanhando as inovações tecnológicas 
                e oferecendo aos nossos parceiros médicos as condições ideais para o 
                exercício da medicina de precisão.
              </p>
              <p className="text-lg text-gray-700">
                Nossa estrutura foi planejada para proporcionar conforto, segurança e 
                eficiência em todos os processos, desde o diagnóstico até o pós-operatório, 
                garantindo a satisfação dos médicos parceiros e seus pacientes.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1000&auto=format" 
                alt="ETCO Centro Cirúrgico" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Nossa Missão, Visão e Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-etco-blue-600">Missão</h3>
                <p className="text-gray-700">
                  Proporcionar aos médicos oftalmologistas uma infraestrutura cirúrgica de excelência, 
                  com tecnologia de ponta e segurança, contribuindo para o avanço da saúde ocular.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-etco-blue-600">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecido como o principal centro cirúrgico oftalmológico do país, 
                  referência em tecnologia, segurança e resultados para médicos e pacientes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-etco-blue-600">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Excelência técnica</li>
                  <li>• Inovação contínua</li>
                  <li>• Segurança e precisão</li>
                  <li>• Parcerias de confiança</li>
                  <li>• Ética profissional</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">Nossa Equipe de Suporte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Placeholder for team members - in a real implementation you'd have actual team data */}
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Nome Sobrenome</h3>
                  <p className="text-etco-blue-500 mb-3">Diretor Médico</p>
                  <p className="text-gray-600 text-sm">
                    Especialista com mais de 15 anos de experiência em cirurgias oftalmológicas.
                  </p>
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

export default About;
