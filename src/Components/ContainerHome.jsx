import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default function ContainerHome({ titulo1, texto1, imagem1, titulo2, texto2, imagem2 }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-wrap justify-center gap-12 cursor-pointer">
            <Link to="/1">
                <div className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] bg-[#44D764] rounded-xl transform transition hover:scale-105">
                    <h1 className="text-white text-lg md:text-2xl font-bold ml-4 pt-3">{titulo1}</h1>
                    <p className="text-white ml-4 w-[90%] text-sm md:text-md my-3">{texto1}</p>
                    <img className="w-full h-[150px] md:h-[220px] rounded-b-xl object-cover" src={imagem1} alt={titulo1} />
                </div>
            </Link>
            <Link to="/2">
                <div className="w-[300px] md:w-[400px] h-[250px] md:h-[300px] bg-[#44D764] rounded-xl transform transition hover:scale-105">
                    <h1 className="text-white text-lg md:text-2xl font-bold ml-4 pt-3">{titulo2}</h1>
                    <p className="text-white ml-4 w-[90%] text-sm md:text-md my-3">{texto2}</p>
                    <img className="w-full h-[150px] md:h-[197px] rounded-b-xl object-cover" src={imagem2} alt={titulo2} />
                </div>
            </Link>
        </div>
    );
}