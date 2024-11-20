import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default function ContainerTopicos({ imagemT, titulo, texto, botao }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mb-10">
            <div className="flex flex-col items-center md:items-start mx-5">
                <img className="w-full max-w-[300px] h-[200px] rounded-2xl object-cover" src={imagemT} alt={titulo} />
                <h2 className="text-lg text-[#44D764] font-bold w-full max-w-[270px] mt-4">{titulo}</h2>
                <p className="text-[#728678] text-sm md:text-md w-full max-w-[300px] my-3">{texto}</p>
                <Link to="/topicos" className="bg-black text-white px-4 py-2 rounded-md text-center mt-6">
                    {botao}
                </Link>
            </div>
        </div>
    );
}