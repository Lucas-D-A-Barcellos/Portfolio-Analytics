import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id='contato' className="bg-black text-white mt-auto">

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Sobre */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-3">
              Lucas Daniel Alves Barcellos
            </h3>

            <p className="text-gray-400 text-sm">
              Engenheiro de Dados & Analista de BI
              <br />
              Transformando dados em decisões estratégicas
            </p>
          </div>

          {/* Contato */}
          <div className="text-center md:text-right">

            <h3 className="text-lg font-bold mb-3">
              Contato
            </h3>

            <div className="flex justify-center md:justify-end gap-6">

              <a
                href="https://linkedin.com/in/lucas-daniel-alves-barcellos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Lucas-D-A-Barcellos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-violet-400 transition-colors text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:lhucas.dab@gmail.com"
                className="text-gray-400 hover:text-red-400 transition-colors text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">

        <div className="container mx-auto px-6 py-4">

          <p className="text-center justify-centers text-sm text-gray-500">
            © {new Date().getFullYear()} Lucas Daniel Alves Barcellos. Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  )
}