import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const calcularValor = async (consumo, tipoEnergia) => {
  try {
    const response = await api.post('/calcular_valor', {
      consumo: consumo,
      tipo_energia: tipoEnergia
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao calcular valor:", error);
    throw error;
  }
};

