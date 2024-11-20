export default function Time({ imagem, nome, funcao}) {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center pb-10">
                <img className="w-[200px] h-[200px] rounded-full" src={imagem} />
                <h2 className="text-xl pt-4">{nome}</h2>
                <h3 className="text-md text-[#728678] pt-2">{funcao}</h3>
            </div>

        </>
    )
}