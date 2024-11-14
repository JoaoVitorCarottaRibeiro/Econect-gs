import Econect from '../../public/Imagens/Econect-sem-fundo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-24">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
                {/* Logo Section */}
                <div className="flex flex-col items-center md:items-start space-y-1">
                    <img src={Econect} alt="Econnect Logo" className="w-20 mb-1" />
                    <p className="text-teal-400 font-bold">ECONECT</p>
                </div>

                {/* Pages Section */}
                <div>
                    <h3 className="text-lg mb-3">Pages</h3>
                    <div className="flex flex-col space-y-1">
                        <Link to="/" className="hover:text-green-500 font-bold">Home</Link>
                        <Link to="/sobre" className="hover:text-green-500 font-bold">Sobre</Link>
                        <Link to="/simulacao" className="hover:text-green-500 font-bold">Simulação</Link>
                        <Link to="/servicos" className="hover:text-green-500 font-bold">Serviços</Link>
                    </div>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg mb-3">Contato</h3>
                    <p className="font-bold">Email</p>
                    <p>example@gmail.com</p>
                    <p className="font-bold mt-2">Telefone</p>
                    <p>+55 (11) 99999-8888</p>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg mb-3">Nos siga</h3>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <a href=""><img src="" alt="Facebook" className="w-6" /></a>
                        <a href=""><img src="" alt="Vimeo" className="w-6" /></a>
                        <a href=""><img src="" alt="YouTube" className="w-6" /></a>
                        <a href=""><img src="" alt="Instagram" className="w-6" /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-12 text-sm opacity-60">
                <p>Copyright © Econnect 2024-25. All Rights Reserved</p>
            </div>
        </footer>
    );
}
