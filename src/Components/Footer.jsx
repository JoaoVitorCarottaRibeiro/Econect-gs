import Econect from '../../public/Imagens/Econect-sem-fundo.png';
import { Link } from 'react-router-dom';
import Instagram from '../../public/Imagens/Insta-icon.png'
import Facebook from '../../public/Imagens/Face-icon.png'
import Linkedin from '../../public/Imagens/linkedin-icon.png'
import YouTube from '../../public/Imagens/YT-icon.png'

export default function Footer() {
    return (
        <footer className="bg-[#222222] text-white py-10 md:py-28">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <img src={Econect} alt="Econnect Logo" className="w-32 md:w-48 mb-3" />
                </div>

                <div>
                    <h3 className="text-lg mb-4">Páginas</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to="/" className="hover:text-green-500 font-bold">Home</Link>
                        <Link to="/sobre" className="hover:text-green-500 font-bold">Sobre</Link>
                        <Link to="/simulacao" className="hover:text-green-500 font-bold">Simulação</Link>
                        <Link to="/servicos" className="hover:text-green-500 font-bold">Serviços</Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg mb-11">Contato</h3>
                    <p className="font-bold">Email</p>
                    <p>EconectServices@gmail.com</p>
                    <p className="font-bold mt-2">Telefone</p>
                    <p>+55 (11) 99999-8888</p>
                </div>

                <div>
                    <h3 className="text-lg mb-11">Nos siga</h3>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <a href=""><img src={Instagram} alt="Instagram" className="w-6" /></a>
                        <a href=""><img src={Linkedin} alt="Linkedin" className="w-6" /></a>
                        <a href=""><img src={YouTube} alt="YouTube" className="w-6" /></a>
                        <a href=""><img src={Facebook} alt="Facebook" className="w-6" /></a>
                    </div>
                </div>
            </div>
            <div className="text-center py-4 text-sm opacity-60">
                <p>Copyright © Econnect 2024-25. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
