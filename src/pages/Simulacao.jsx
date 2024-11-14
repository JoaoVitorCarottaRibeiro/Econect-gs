import { useState } from 'react';
import { calcularValor } from '../services/api';  // Certifique-se de que o caminho está correto

function Simulacao() {
  const [consumo, setConsumo] = useState(0);
  const [tipoEnergia, setTipoEnergia] = useState('Solar');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  const handleCalcular = async () => {
    if (consumo <= 0) {
      setErro("Não é possível calcular para valores menores ou iguais a zero.");
      setResultado(null);
      return;
    }

    try {
      console.log(`Enviando para a API: consumo = ${consumo}, tipoEnergia = ${tipoEnergia}`);
      const data = await calcularValor(consumo, tipoEnergia);

      console.log('Resposta da API:', data);  // Adiciona um log aqui para ver a resposta da API

      if (data && data.valor_total) {
        setResultado(data.valor_total);
        setErro('');
      } else {
        setErro("Erro ao calcular o valor.");
        setResultado(null);
      }
    } catch (error) {
      console.error('Erro no cálculo:', error);  // Log de erro completo
      setErro("Erro ao calcular o valor.");
      setResultado(null);
    }
  };

  return (
    <div>
      <h1>Previsão de Preço com Base no Consumo</h1>
      <input 
        type="number" 
        value={consumo} 
        onChange={(e) => setConsumo(e.target.value)} 
        placeholder="Digite o consumo em kW" 
      />
      <select 
        value={tipoEnergia} 
        onChange={(e) => setTipoEnergia(e.target.value)}
      >
        <option value="Solar">Solar</option>
        <option value="Eólica">Eólica</option>
        <option value="Geotérmica">Geotérmica</option>
        <option value="Maremotriz">Maremotriz</option>
        <option value="Hidráulica">Hidráulica</option>
      </select>
      <button onClick={handleCalcular}>Calcular</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {resultado !== null && (
        <p>O valor calculado é R${resultado.toFixed(2)}</p>
      )}
    </div>
  );
}

export default Simulacao;
