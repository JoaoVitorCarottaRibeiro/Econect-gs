import ContainerValores from "../Components/ContainerValores";
import Time from "../Components/Time";

export default function Sobre({ texto, imagem }) {
    return (
        <>
            <section className="bg-green-50">
                <h1 className="px-4 md:ml-24 py-10 font-bold text-3xl text-[#44D764]">
                    Sobre Nós
                </h1>
                <div className="flex flex-col md:flex-row items-center md:ml-24 md:gap-60 px-4 pb-10">
                    <p className="text-center md:text-left w-full md:w-[450px] text-lg">
                        {texto}
                    </p>
                    <img
                        className="w-full md:w-[500px] md:h-[300px] rounded-xl mt-6 md:mt-0"
                        src={imagem}
                    />
                </div>
            </section>
            <section>
                <h1 className="py-10 font-bold text-3xl text-center">Valores</h1>
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 px-4 pb-16">
                    <ContainerValores
                        numero="1"
                        texto="Natureza e tecnologia caminharem juntas é de extrema importância hoje em dia, e aqui na Econet, valorizamos isso cada dia que passa, conectando-os cada vez mais."
                    />
                    <ContainerValores
                        numero="2"
                        texto="Acreditamos que a prioridade de qualquer negócio é o cliente, por isso, aqui na Econcect o cliente é nossa prioridade número um. Se o cliente está satisfeito, também estaremos."
                    />
                    <ContainerValores
                        numero="3"
                        texto="Parceria e colaboração  entre empresas e clientes cada vez mais vem sendo algo valorizado em diversas empresas, e aqui na Econect também. Uma relação de confiança mútua é bem-vinda em qualquer ambiente."
                    />
                </div>
            </section>
            <section className="bg-green-50">
                <h1 className="text-center py-10 font-bold text-3xl text-[#44D764]">Time</h1>
                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-40 px-4">
                    <Time
                        imagem="/Imagens/Joao-ia.jpg"
                        nome="João Vitor Carotta Ribeiro"
                        funcao="Desenvolvedor Back-end"
                        linkedin1=""
                    />
                    <Time
                        imagem="/Imagens/Diego-ia.jpg"
                        nome="Diego Eleutério Fadul da Costa"
                        funcao="Desenvolvedor Front-end"
                    />
                </div>
            </section>
        </>
    );
}