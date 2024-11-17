import { Link } from "react-router-dom";
import { useEffect } from 'react';
export default function ContainerHome({ titulo1, texto1, imagem1, titulo2, texto2, imagem2 }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="flex items-center justify-center gap-[70px] cursor-pointer">
                <Link to="/1">
                    <div className="w-[400px] h-[300px] bg-[#44D764] rounded-xl my-10 transform transition hover:scale-105">
                        <h1 className="text-white text-2xl font-bold ml-7 pt-3">{titulo1}</h1>
                        <p className="text-white ml-7 w-[280px] text-md my-3">{texto1}</p>
                        <img className="w-[400px] h-[220px] rounded-b-xl object-cover" src={imagem1} />
                    </div>
                </Link>
                <Link to="/2">
                    <div className="w-[400px] h-[300px] bg-[#44D764] rounded-xl my-10 cursor-pointer transform transition hover:scale-105">
                        <h1 className="text-white text-2xl font-bold ml-7 pt-3">{titulo2}</h1>
                        <p className="text-white ml-7 w-[280px] text-md my-3">{texto2}</p>
                        <img className="w-[400px] h-[197px] rounded-b-xl object-cover" src={imagem2} />
                    </div>
                </Link>
            </div>
        </>
    )
}