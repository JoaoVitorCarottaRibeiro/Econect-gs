import image from '../../public/Imagens/image.png';

export default function Contato() {
    return (
        <section className="bg-green-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-10">
                <div className="flex-1">
                    <h3 className="text-green-500 font-bold uppercase text-sm">Contate a gente</h3>
                    <h1 className="text-2xl font-bold text-gray-800 mt-2">
                        Tem alguma pergunta? Entre em contato!
                    </h1>
                    <form className="mt-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Assunto"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="tel"
                                placeholder="Telefone"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <textarea
                            placeholder="Mensagem"
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-[150px] resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-3 rounded font-semibold hover:bg-green-600"
                        >
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
                <div className="flex-1 flex justify-center mt-6 lg:mt-9">
                    <img
                        src={image}
                        alt="mulher-computador"
                        className="rounded max-w-[400px] max-h-[400px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
