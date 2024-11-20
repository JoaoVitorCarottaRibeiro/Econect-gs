import React, { useState } from "react";
import Econect from '../../public/Imagens/Econect-sem-fundo.png';
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
        <Link to="/">
          <img className="w-28 h-auto" src={Econect} alt="Logo Econect" />
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 text-2xl focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden md:flex items-center space-x-8 text-lg text-gray-800">
          <Link to="/" className="hover:text-green-500 font-bold">Home</Link>
          <Link to="/sobre" className="hover:text-green-500 font-bold">Sobre</Link>
          <Link to="/simulacao" className="hover:text-green-500 font-bold">Simulação</Link>
          <Link to="/servicos" className="hover:text-green-500 font-bold">Serviços</Link>
          <Link to="/contato" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Contato
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4 text-gray-800">
          <Link to="/" onClick={toggleMenu} className="block hover:text-green-500 font-bold">
            Home
          </Link>
          <Link to="/sobre" onClick={toggleMenu} className="block hover:text-green-500 font-bold">
            Sobre
          </Link>
          <Link to="/simulacao" onClick={toggleMenu} className="block hover:text-green-500 font-bold">
            Simulação
          </Link>
          <Link to="/servicos" onClick={toggleMenu} className="block hover:text-green-500 font-bold">
            Serviços
          </Link>
          <Link to="/contato" onClick={toggleMenu} className=" block text-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
}