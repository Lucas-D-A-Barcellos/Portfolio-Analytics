import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="flex border-b-gray-600 border-b-2 h-18 text-white p-4 justify-between">

      
        <div className="pt-0.5">
          <Link to="/" className=" flex text-xl font-bold">
          <img src="/favicon.svg" className="w-8 h-8"></img>  
          <h3 className="mx-4 my-auto">Lucas Barcellos</h3>
          </Link>
        </div>

        <div className="pt-1.5">
          <ul className="flex flex-row items-center gap-6">
            <li >
              <Link to="/" className="transition-all duration-300 ease-in-out hover:bg-white hover:text-violet-700 bg-violet-700 p-1 my-auto rounded-sm px-2 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projetos" className="hover:bg-white hover:text-violet-700 bg-violet-700 p-1 transition-colors my-auto rounded-sm px-2 font-semibold">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:bg-white hover:text-violet-700 bg-violet-700 p-1 transition-colors my-auto rounded-sm px-2 font-semibold">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
  
        <div className="">
          <div className="flex gap-4 justify-between">
            <a 
              href="https://linkedin.com/in/seu-perfil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 my-auto hover:text-blue-400 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 my-auto hover:text-blue-400 transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <button className="hover:bg-white hover:text-violet-700 p-1.5 rounded-sm my-auto hover:cursor-pointer bg-violet-600 font-semibold">Entre em Contato</button>
          </div>
      </div>
    </nav>
  )
}