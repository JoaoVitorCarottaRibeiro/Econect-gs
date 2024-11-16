import { Link } from "react-router-dom";

export default function ContainerTopicos({ imagemT, titulo, texto, botao }) {
    return (
        <>
            <div className="mb-10">
                <div className="flex-col ml-24">
                    <img className="w-[300px] h-[200px] rounded-2xl object-cover" src={imagemT} />
                    <h2 className="text-lg text-[#44D764] font-bold w-[270px] mt-4">{titulo}</h2>
                    <p className="text-[#728678] text-md w-[300px] my-3">{texto}</p>
                    <Link to="/topicos" className="bg-black text-white p-3 rounded-md block text-center mt-6">{botao}</Link> 
                </div>
            </div>
        </>
    );
}
