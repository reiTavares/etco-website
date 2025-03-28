import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Eye, Clock, FileCheck } from 'lucide-react';

const Diagnostics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <section className="container-custom mb-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Centro de <span className="gradient-text">Diagnóstico</span>
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Tecnologia avançada para diagnósticos precisos e detalhados em todas as avaliações 
              oftalmológicas, garantindo segurança nas decisões terapêuticas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1000&auto=format" 
                alt="Centro de Diagnóstico ETCO" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Diagnóstico <span className="text-etco-blue-600">de Precisão</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nosso centro de diagnóstico oferece uma ampla gama de exames oftalmológicos avançados, 
                utilizando equipamentos de última geração para avaliações precisas e detalhadas.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A precisão diagnóstica é fundamental para o planejamento cirúrgico e terapêutico, 
                garantindo resultados seguros e previsíveis em todos os procedimentos.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Search size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Precisão</h4>
                    <p className="text-sm text-gray-600">Resultados detalhados</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Eye size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Abrangência</h4>
                    <p className="text-sm text-gray-600">Avaliação completa</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Rapidez</h4>
                    <p className="text-sm text-gray-600">Resultados ágeis</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-etco-blue-50 text-etco-blue-500">
                    <FileCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Laudos</h4>
                    <p className="text-sm text-gray-600">Documentação completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Exames Disponíveis
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-6 text-etco-blue-600">Avaliação do Segmento Anterior</h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Topografia Corneal</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Mapeamento detalhado da superfície da córnea para detecção de irregularidades, astigmatismo e ceratocone.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Paquimetria</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Medição precisa da espessura corneal, essencial para o planejamento de cirurgias refrativas.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Microscopia Especular</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Avaliação do endotélio corneal, verificando a quantidade e qualidade das células endoteliais.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Biometria</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Medição precisa para cálculo de lentes intraoculares em cirurgias de catarata.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-6 text-etco-blue-600">Avaliação do Segmento Posterior</h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">OCT (Tomografia de Coerência Óptica)</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Imagens seccionais da retina, nervo óptico e mácula em alta resolução.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Angiografia Fluoresceínica</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Visualização da vascularização da retina para diagnóstico de doenças vasculares.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Retinografia</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Fotografias coloridas de alta resolução do fundo do olho para documentação.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Campimetria Computadorizada</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Avaliação do campo visual para detecção de alterações funcionais.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-6 text-etco-blue-600">Avaliações Especializadas</h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Aberrometria</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Análise detalhada das aberrações ópticas para tratamentos personalizados.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Avaliação de Olho Seco</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Testes especializados para diagnóstico e acompanhamento da síndrome do olho seco.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Ecografia Ocular</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Ultrassonografia para avaliação das estruturas internas do olho quando não visíveis.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-6 text-etco-blue-600">Exames Complementares</h3>
                <ul className="text-gray-700 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Gonioscopia</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Avaliação do ângulo da câmara anterior, importante para diagnóstico de glaucoma.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Tonometria</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Medição da pressão intraocular com diferentes métodos de alta precisão.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-etco-blue-500 font-semibold">•</span>
                    <div>
                      <span className="font-medium">Teste de Sensibilidade ao Contraste</span>
                      <p className="text-sm text-gray-600 mt-1">
                        Avaliação da qualidade visual além da acuidade visual padrão.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Nossos Equipamentos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Placeholder for diagnostic equipment - in a real implementation you'd have actual equipment data */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Equipamento {item}</h3>
                    <p className="text-gray-600">
                      Descrição detalhada do equipamento e seus benefícios para diagnóstico preciso.
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

export default Diagnostics;
