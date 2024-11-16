import ContainerHome from '../Components/ContainerHome'
import ContainerTopicos from '../Components/ContainerTopicos'
import '../styles.css'
export default function Home({titulo, subtitulo}) {
    return (
        <>
            <section className="relative bg-custom-image bg-cover bg-center h-screen flex items-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative text-center mx-auto p-4 z-10">
                    <h1 className="text-white text-4xl font-bold">{titulo}</h1>
                    <h2 className="text-white text-2xl mt-4">{subtitulo}</h2>
                </div>
            </section>
            <section className='bg-green-50 h-[550px]'>
                <h1 className='text-center font-bold text-3xl pt-7 text-[#44D764]'> Nossas Missões</h1>
                <ContainerHome
                    titulo1="Conhecimento"
                    texto1="Trazer conhecimento sobre as energias limpas ao nossos clientes é nossa prioridade, clique aqui e saiba mais!"
                    imagem1="../../public/Imagens/img-missoes2.jpg"
                    titulo2="Inovações Tecnológicas"
                    texto2="Com os avanços tecnológicos, podemos melhorar cada vez mais a produção de energia limpa, clique aqui e saiba mais sobre o assunto!"
                    imagem2="../../public/Imagens/img-missoes3.png"
                />
            </section>
            <section>
                <h1 className='font-bold text-3xl ml-24 py-10'>Tópicos recorrentes</h1>
                <div className='flex'>
                    <ContainerTopicos 
                        imagemT="../../public/Imagens/img1-topicos.jpg"
                        titulo="Fazendas de ventos para uma proteção a natureza"
                        texto="Cada vez mais, vemos moinhos de ventos para produção de energia, isso se deve principalmente pelo fato dele ser completamente sustentável..."
                        botao="Continuar lendo"
                    />
                    <ContainerTopicos 
                        imagemT="../../public/Imagens/img2-topicos.jpg"
                        titulo="Aquecimento global se torna cada vez mais realidade"
                        texto="Com impactos visíveis no dia a dia e no ambiente ao nosso redor. As temperaturas médias globais aumentam de forma alarmante..."
                        botao="Continuar lendo"
                    />
                    <ContainerTopicos 
                        imagemT="../../public/Imagens/img3-topicos.jpg"
                        titulo="Condição dos ares se tornam cada vez piores"
                        texto="Devido as queimadas e outros meios de poluição constante, a condição do ar piorou cerca de 55% nos últimos meses. Especialistas dizem ...   "
                        botao="Continuar lendo"
                    />
                </div>
            </section>
        </>
    )
}