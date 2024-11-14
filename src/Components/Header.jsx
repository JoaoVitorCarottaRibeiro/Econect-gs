import Econect from '../../public/Imagens/Econect-sem-fundo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="w-full p-5 bg-white shadow-md flex justify-center items-center">
      <div className="flex items-center justify-center w-full max-w-7xl space-x-8">
        
        <div className="flex items-center space-x-2">
          <img className="w-28 h-auto mr-36" src={Econect} alt="Logo Econect" />
        </div>

        <div className="text-lg flex space-x-8 text-gray-800">
          <Link to="/" className="hover:text-green-500 font-bold">Home</Link>
          <Link to="/sobre" className="hover:text-green-500 font-bold">Sobre</Link>
          <Link to="/simulacao" className="hover:text-green-500 font-bold">Simulação</Link>
          <Link to="/servicos" className="hover:text-green-500 font-bold">Serviços</Link>
        </div>

        <Link to="/contato" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ">
          Contato
        </Link>
      </div>
    </nav>
  );
}