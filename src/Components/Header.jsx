import Econect from '../../public/Imagens/Econect-sem-fundo.png';
import { Link } from 'react-router-dom';

export default function Header({}) {
  return (
    <>
      <nav className="w-full p-20 py-6 bg-slate-600 flex justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-7xl">
          <img className="w-32 h-auto" src={Econect} alt="Logo Econect" />
          <div className="text-lg ml-auto flex space-x-8">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/sobre" className="hover:underline">Sobre</Link>
            <Link to="/simulacao" className="hover:underline">Simulação</Link>
            <Link to="/servicos" className="hover:underline">Serviços</Link>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </div>
        </div>
      </nav>
    </>
  );
}