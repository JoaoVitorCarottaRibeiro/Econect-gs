import { useEffect } from 'react';

export default function ContainerValores({ numero, texto }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="md:w-72 w-full h-auto md:h-[350px] rounded-lg bg-white shadow-xl mx-auto md:mx-0">
            <div className="bg-[#44D764] h-[100px] md:h-[120px] rounded-t-lg"></div>
            <div className="-mt-[40px] md:-mt-[50px] flex flex-col items-center">
                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#3EF805] rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl">
                    {numero}
                </div>
                <p className="mt-4 text-center text-sm md:text-md font-medium px-4">{texto}</p>
            </div>
            <div className="pb-14"></div> 
        </div>
    );
}