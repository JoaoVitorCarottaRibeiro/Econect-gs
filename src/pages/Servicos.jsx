import React, { useState } from 'react';
import imagem1 from '../../public/Imagens/testi-img.png'
import imagem2 from '../../public/Imagens/testi-img2.png'
import imagem3 from '../../public/Imagens/testi-img3.png'
import Avancar from '../../public/Imagens/Avancar.png'
import Voltar from '../../public/Imagens/Voltar.png'

const cardData = [
  {
    title: "Estratégia de Negócio",
    description: "Estratégias de negócios alavancam empresas de patamar, cresça conosco.",
    icon: "📊",
  },
  {
    title: "Questões Sociais",
    description: "Questões sociais é de altíssima importância em qualquer tipo de empresa, mantenha sempre respeito ao próximo",
    icon: "🤝",
  },
  {
    title: "Desenvolvimento Sustentável",
    description: "Questões ambientais são cada vez mais requisitadas nas empresas, junte-se com a Econect e entenda mais sobre o assunto",
    icon: "🌱",
  },
  {
    title: "Marketing",
    description: "Cresça conosco com as diversas possibilidades por meio do Marketing Digital.",
    icon: "📈",
  },
];

const plansData = [
  {
    title: "Básico",
    price: "$48",
    card: [
      "Desenvolvimento de anúncios",
      "Tráfego orgânico",
      "Tráfego pago",
      "Estratégia de Marketing",
      "Visibilidade empresarial",
    ],
  },
  {
    title: "Médio",
    price: "$98",
    card: [
      "Consultorias mensais",
      "Redução gasto de energia",
      "Redução de carbono",
      "Plano de educação",
      "Consciência sustentável",
    ],
    highlight: true,
  },
  {
    title: "Avançado",
    price: "$198",
    card: [
      "Relatórios em dashboards",
      "Plano de energia solar",
      "Até 3 pessoas",
      "Armazenamento de energia",
      "Instalação de Micro-Grids",
    ],
  },
];

const avaliacaoData = [
  {
    image: imagem1,
    name: "Sabrina",
    role: "Design",
    quote: "Contribui com um design atraente e funcional, destacando os valores de inovação e sustentabilidade da Econect. Sua colaboração melhora a experiência do usuário e a comunicação visual.",
  },
  {
    image: imagem2,
    name: "Carlos",
    role: "Desenvolvedor",
    quote: "A Econect valoriza a tecnologia aplicada, como a simulação de consumo de energia via IA, que oferece soluções práticas e personalizadas aos clientes, reforçando o diferencial tecnológico da Econect.",
  },
  {
    image: imagem3,
    name: "Ana",
    role: "Gerente de Projetos",
    quote: "Uma experiência maravilhosa com resultados incríveis. A Econect foca na execução eficiente de programas institucionais e sociais, garantindo impacto positivo e fortalecendo a confiabilidade da Econect como parceira sustentável.",
  },
];

// Secao1
function Secaocards({ card }) {
  return (
    <div className="text-center py-16 bg-green-50 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Nossos Serviços Incríveis
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12 text-sm md:text-base">
        Conheça nossas soluções que podem transformar seu negócio, garantindo
        inovação, impacto positivo e crescimento sustentável.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
        {card.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-center text-gray-800"
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <div className="text-3xl md:text-4xl text-green-500">{item.icon}</div>
            </div>
            <h3 className="font-semibold text-base md:text-lg mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-xs md:text-sm text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Secao2
function CardPlano({ plans }) {
  return (
    <div className="text-center my-16 md:my-32 px-4">
      <h2 className="text-2xl md:text-3xl font-semibold">Nossos Planos</h2>
      <p className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-base">
        Identificamos a oportunidade de criar uma plataforma que permita às
        empresas e comunidades carentes adquirir fontes de energia renovável
        com preços acessíveis.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 sm:p-8 rounded-lg shadow-lg ${
              plan.highlight ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <h3 className="text-lg md:text-xl font-semibold">{plan.title}</h3>
            <p className="text-3xl md:text-4xl font-bold text-green-600 mt-4">
              {plan.price}
            </p>
            <ul className="mt-4 md:mt-6 space-y-2 text-gray-700 text-sm md:text-base">
              {plan.card.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Secao3
function Avaliacao({ avaliacao }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avaliacao.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avaliacao.length - 1 : prevIndex - 1
    );
  };

  const currentAvaliacao = avaliacao[currentIndex];

  return (
    <div className="bg-green-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600">
          Nossos Clientes
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Clientes falando sobre nós e o nosso trabalho
        </p>
        <div className="flex flex-col items-center mt-10">
          <img
            src={currentAvaliacao.image}
            alt={currentAvaliacao.name}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
          />
          <blockquote className="text-base sm:text-lg italic text-gray-700 mt-4 px-4 md:px-8">
            "{currentAvaliacao.quote}"
          </blockquote>
          <div className="mt-4">
            <p className="font-semibold">{currentAvaliacao.name}</p>
            <p className="text-sm text-green-500">{currentAvaliacao.role}</p>
          </div>
          <div className="flex mt-8 gap-3 sm:gap-5">
            <button onClick={handlePrev} className="bg-transparent rounded-l-lg">
              <img
                className="w-10 h-10 sm:w-12 sm:h-12"
                src={Voltar}
                alt="Voltar"
              />
            </button>
            <button onClick={handleNext} className="bg-transparent rounded-r-lg">
              <img
                className="w-10 h-10 sm:w-12 sm:h-12"
                src={Avancar}
                alt="Avançar"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Secaocards card={cardData} />
      <CardPlano plans={plansData} />
      <Avaliacao avaliacao={avaliacaoData} />
    </div>
  );
}
