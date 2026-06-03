import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTheme } from "@/hooks/useTheme.tsx";


export default function Navbar() {

  const {theme, toggleTheme} = useTheme();

  return (
    <nav className="flex bg-gray-800
        p-6
        h-full

        bg-violet-800/15
        backdrop-blur-2xl

        border
        border-white/20

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        

        transition-all
        duration-500

        relative
        overflow-hidden justify-between">

      
        <div >
          <Link to="/" className=" flex text-xl font-bold">
          <img src="/favicon.svg" className="w-10 h-10"></img>  
          <h3 className="mx-4 my-auto text-foreground">Lucas Barcellos</h3>
          </Link>
        </div>

        <div className="pt-1.5">
          <ul className="flex flex-row items-center gap-10">
            <li >
              <Link to="/" className="transition-all duration-300 ease-in-out hover:bg-white hover:text-violet-700 bg-violet-700 p-1 text-white my-auto rounded-sm px-2 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projetos" className="hover:bg-white hover:text-violet-700 text-white bg-violet-700 p-1 transition-colors my-auto rounded-sm px-2 font-semibold">
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:bg-white hover:text-violet-700 text-white bg-violet-700 p-1 transition-colors my-auto rounded-sm px-2 font-semibold">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
  
        <div className="">
          <div className="flex gap-4 justify-between">
            <button
              onClick={toggleTheme}
              className={`
                relative flex h-8 w-16 items-center rounded-full
                transition-all duration-300 cursor-pointer
                ${theme === "dark"
                  ? "bg-violet-600"
                  : "bg-violet-200"}
              `}
              aria-label="Alternar tema"
            >
              <span
                className={`
                  absolute flex h-6 w-6 items-center justify-center
                  rounded-full bg-white shadow-md
                  transition-all duration-300
                  ${theme === "dark"
                    ? "translate-x-9"
                    : "translate-x-1"}
                `}
              >
                {theme === "dark" ? "🌙" : "☀️"}
              </span>
            </button>
            <button className="hover:bg-white hover:text-violet-700 p-1.5 rounded-sm my-auto hover:cursor-pointer bg-violet-600 text-white font-semibold">Entre em Contato</button>
          </div>
      </div>
    </nav>
  )
}