import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Linha principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-lg font-bold mb-3">Lucas Daniel Alves Barcellos</h3>
            <p className="text-gray-400 text-sm">
              Engenheiro de Dados & Analista de BI<br />
              Transformando dados em decisões estratégicas
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contatos */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contato</h3>
            <div className="flex gap-2 justify-between">
              <a 
                href="https://linkedin.com/in/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:seu@email.com"
                className="text-gray-400 hover:text-red-400 transition-colors text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Linha de copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Lucas Daniel Alves Barcellos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}