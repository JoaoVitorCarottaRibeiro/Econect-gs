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
        element: <Sobre />
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
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
