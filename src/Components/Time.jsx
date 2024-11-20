export default function Time({ imagem, nome, funcao }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center pb-10">
                <img className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full" src={imagem} alt={nome} />
                <h2 className="text-lg md:text-xl pt-4">{nome}</h2>
                <h3 className="text-sm md:text-md text-[#728678] pt-2">{funcao}</h3>
            </div>
        </>
    );
}
