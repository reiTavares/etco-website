import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

const equipmentCategories = [
  {
    id: "refrativa",
    label: "Cirurgia Refrativa",
    equipment: [
      {
        name: "Femtosegundo",
        description: "Tecnologia a laser para criação de flaps com precisão micrométrica.",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format"
      },
      {
        name: "Excimer Laser",
        description: "Remodelagem precisa da córnea para correção de miopia, hipermetropia e astigmatismo.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format"
      },
      {
        name: "Topógrafo Corneal",
        description: "Mapeamento detalhado da superfície da córnea para planejamento cirúrgico personalizado.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format"
      }
    ]
  },
  {
    id: "catarata",
    label: "Cirurgia de Catarata",
    equipment: [
      {
        name: "Facoemulsificador",
        description: "Equipamento de última geração para remoção da catarata com mínima incisão.",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format"
      },
      {
        name: "LIOs Premium",
        description: "Lentes intraoculares avançadas para correção de erros refrativos.",
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=800&auto=format"
      },
      {
        name: "Biômetro Óptico",
        description: "Medição precisa para cálculo de lentes intraoculares com tecnologia de interferometria.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format"
      }
    ]
  },
  {
    id: "diagnostico",
    label: "Diagnóstico",
    equipment: [
      {
        name: "OCT",
        description: "Tomografia de Coerência Óptica para avaliação detalhada das estruturas oculares.",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format"
      },
      {
        name: "Angiografia",
        description: "Visualização da vascularização da retina com alta definição.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format"
      },
      {
        name: "Paquimetria",
        description: "Medição precisa da espessura da córnea para procedimentos seguros.",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format"
      }
    ]
  }
];

const DiagnosticCenter = () => {
  const [activeCategory, setActiveCategory] = useState(equipmentCategories[0].id);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Centro Cirúrgico e de <span className="gradient-text">Diagnóstico</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Equipamentos de última geração para diagnóstico preciso e procedimentos 
            cirúrgicos com a máxima segurança e eficácia.
          </p>
        </div>

        <Tabs defaultValue={activeCategory} className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              {equipmentCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:text-etco-blue-600 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-etco-blue-500 rounded-none"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {equipmentCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.equipment.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <Button variant="outline" className="border-etco-blue-300 text-etco-blue-600 hover:bg-etco-blue-50">
                  Ver todos os equipamentos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DiagnosticCenter;
