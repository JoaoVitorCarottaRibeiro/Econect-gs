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
            
        </>
    )
}