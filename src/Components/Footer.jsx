import Econect from '../../public/Imagens/Econect-sem-fundo.png';
import { Link } from 'react-router-dom';

import Instagram from '../../public/Imagens/insta.png'
import Facebook from '../../public/Imagens/facebook.png'
import Linkedin from '../../public/Imagens/linkedin.png'
import YouTube from '../../public/Imagens/yt.png'

export default function Footer() {
    return (
        <footer className="bg-[#222222] text-white pt-24">
            <div className="max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start space-y-1">
                    <img src={Econect} alt="Econnect Logo" className="w-48 mb-1" />
                </div>

                <div>
                    <h3 className="text-lg mb-11">Pages</h3>
                    <div className="flex flex-col space-y-1">
                        <Link to="/" className="hover:text-green-500 font-bold pb-3">Home</Link>
                        <Link to="/sobre" className="hover:text-green-500 font-bold pb-3">Sobre</Link>
                        <Link to="/simulacao" className="hover:text-green-500 font-bold pb-3">Simulação</Link>
                        <Link to="/servicos" className="hover:text-green-500 font-bold pb-3">Serviços</Link>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg mb-11">Contato</h3>
                    <p className="font-bold">Email</p>
                    <p>example@gmail.com</p>
                    <p className="font-bold mt-2">Telefone</p>
                    <p>+55 (11) 99999-8888</p>
                </div>

                <div>
                    <h3 className="text-lg mb-11">Nos siga</h3>
                    <div className="flex gap-2 justify-center md:justify-start">
                        <a href=""><img src={Facebook} alt="Facebook" className="w-6" /></a>
                        <a href=""><img src={YouTube} alt="YouTube" className="w-6" /></a>
                        <a href=""><img src={Linkedin} alt="Linkedin" className="w-6" /></a>
                        <a href=""><img src={Instagram} alt="Instagram" className="w-6" /></a>
                    </div>
                </div>
            </div>

            <div className="text-center py-7 text-sm opacity-60">
                <p>Copyright © Econnect 2024-25. All Rights Reserved</p>
            </div>
        </footer>
    );
}
