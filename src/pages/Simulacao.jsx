import { useState } from 'react';

function Simulacao() {
  const [consumo, setConsumo] = useState(0);
  const [tipoEnergia, setTipoEnergia] = useState('Solar');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const handleCalcular = () => {
    if (consumo <= 0) {
      setErro("Não é possível calcular para valores menores ou iguais a zero.");
      setResultado(null);
      return;
    }

    const fatores = {
      Solar: 50.25,
      Eólica: 55.65,
      Geotérmica: 60.80,
      Maremotriz: 70.10,
      Hidráulica: 58.75,
    };

    const fator = fatores[tipoEnergia];
    if (!fator) {
      setErro("Tipo de energia inválido.");
      setResultado(null);
      return;
    }

    const valorCalculado = consumo * fator;

    setResultado(valorCalculado);
    setErro('');
  };

  return (
    <>
      <h1 className='text-3xl py-10 text-center font-bold'>
        Previsão de Preço com Base no Consumo <span className='text-[#728678]'>(kW)</span>
      </h1>
      <div className='flex items-center justify-center gap-10 py-10'>
        <input
          className='w-[250px] border border-black rounded p-1'
          type="number"
          value={consumo || ''}
          onChange={(e) => setConsumo(e.target.value)}
          placeholder="Digite o consumo em kW"
          autoComplete="off"
        />
        <select
          className='border border-black p-1 rounded'
          value={tipoEnergia}
          onChange={(e) => setTipoEnergia(e.target.value)}
        >
          <option value="Solar">Solar</option>
          <option value="Eólica">Eólica</option>
          <option value="Geotérmica">Geotérmica</option>
          <option value="Maremotriz">Maremotriz</option>
          <option value="Hidráulica">Hidráulica</option>
        </select>
      </div>
      <div className="flex flex-col items-center justify-center py-5">
        <button
          className="bg-black text-white p-3 rounded-md mb-3 w-[200px] text-lg"
          onClick={handleCalcular}
        >
          Calcular
        </button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        {resultado !== null && (
          <p>O valor calculado é R${resultado.toFixed(2)}</p>
        )}
      </div>
    </>
  );
}

export default Simulacao;

