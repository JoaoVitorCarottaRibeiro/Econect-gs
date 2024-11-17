export default function ContainerValores({numero, texto}) {
    return (
        <>
                <div class="w-72 h-[400px] rounded-lg bg-white shadow-xl">
                    <div class="bg-[#44D764] h-[120px] rounded-t-lg"></div>
                    <div class="-mt-[50px] flex flex-col items-center">
                        <div class="w-[100px] h-[100px] bg-[#3EF805] rounded-full flex items-center justify-center text-white font-bold text-3xl">{numero}</div>
                        <p class="mt-4 text-center text-md font-medium px-4">{texto}</p>
                    </div>
                </div>
        </>
    )
}