import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Simulacao from './pages/Simulacao.jsx'
import Servicos from './pages/Servicos.jsx'
import Contato from './pages/Contato.jsx'
import Topicos from './Components/Topicos.jsx'
import Conhecimento from './Components/Conhecimento.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home 
          titulo="Bem-vindos a Econect"
          subtitulo="Venha conhecer nossos serviços e nossa simulação com IA"
        />
      },
      {
        path: "/sobre",
        element: <Sobre 
          texto="A Econect é uma empresa voltada a afiliações a outras empresas de sustentabilidade em geral. Oferecemos aos nossos clientes a oportunidade de conhecer mais sobre assuntos sustentáveis como produção de energia limpa, questões sobre o aquecimento global, entre outros temas. Temos também nossa simulação de gasto com base na quantidade de energia consumida pelo cliente, onde a nossa IA gera automaticamente o valor a pagar. Nossas atividades incluem, além de afiliações com empresas, soluções residenciais e programas institucionais destinados a apoiar famílias necessitadas."
          imagem="../../public/Imagens/Img-sobre-nos.jpg"
        />
      },
      {
        path: "/simulacao",
        element: <Simulacao />
      },
      {
        path: "/servicos",
        element: <Servicos />
      },
      {
        path: "/contato",
        element: <Contato />
      },
      {
        path:"/topicos",
        element: <Topicos />
      },
      {
        path:"/:id",
        element: <Conhecimento />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
