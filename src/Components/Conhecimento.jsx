import { useParams } from "react-router-dom";
import { useEffect } from 'react';
export default function Conhecimento() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = useParams();

    const texto1 = "A energia limpa é uma fonte de energia obtida de recursos naturais que não emitem poluentes na geração de eletricidade ou calor. Exemplos incluem energia solar, eólica e hidráulica. Essas fontes são renováveis, ou seja, são praticamente inesgotáveis e têm um impacto ambiental muito menor em comparação às fontes tradicionais, como petróleo e carvão. Utilizar energia limpa é fundamental para reduzir as emissões de gases de efeito estufa e combater as mudanças climáticas. Além disso, essas tecnologias ajudam a promover a sustentabilidade, diversificar as matrizes energéticas e reduzir a dependência de combustíveis fósseis. Ao optar por energias limpas, não apenas contribuímos para um planeta mais saudável, mas também promovemos inovações tecnológicas e criamos oportunidades econômicas em setores como engenharia ambiental e energias renováveis. O futuro sustentável começa com escolhas conscientes hoje!"

    const texto2 = "Com os avanços tecnológicos, a produção de energia limpa tem se tornado cada vez mais eficiente e acessível. Energias limpas, como solar, eólica e hidráulica, são obtidas de fontes renováveis que têm baixo impacto ambiental e contribuem significativamente para a redução das emissões de gases de efeito estufa. A tecnologia desempenha um papel essencial nesse progresso, permitindo o desenvolvimento de painéis solares mais eficientes, turbinas eólicas mais potentes e sistemas de armazenamento de energia mais duráveis. Essas inovações tornam as energias limpas mais viáveis para atender à crescente demanda global por eletricidade de forma sustentável. Investir em energia limpa é um passo crucial para combater as mudanças climáticas e construir um futuro mais sustentável. Além de proteger o meio ambiente, essas soluções impulsionam o crescimento econômico, criam empregos e melhoram a qualidade de vida."

    const tituloMissoes = id === "1" ? "Conhecimento" : "Inovações tecnológicas";
    const imagensMissoes = id === "1" ? "../../public/Imagens/img-missoes2.jpg" : "../../public/Imagens/img-missoes3.png";
    const textoMissoes = id === "1" ? texto1 : texto2;

    return (
        <>
            <h1 className="text-2xl md:text-3xl font-bold text-center py-7 text-[#44D764]">
                {tituloMissoes}
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-10">
                <img className="w-full max-w-[410px] h-auto rounded-xl " src={imagensMissoes} alt={tituloMissoes} />
                <p className="text-sm md:text-md max-w-[500px] mx-10">{textoMissoes}</p>
            </div>
        </>
    );
}
