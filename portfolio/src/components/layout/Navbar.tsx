import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme.tsx";
import { useState } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
      relative
      flex
      justify-between
      items-center
      p-4 md:p-6

      bg-violet-800/15
      backdrop-blur-2xl

      border border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.25)]
      z-50
    "
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/favicon.svg" className="w-10 h-10" />
        <h3 className="hidden md:block mx-4 text-foreground text-xl font-bold">
          Lucas Barcellos
        </h3>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6">

          <li>
            <a
              onClick={() => {
                  document.getElementById("projetos")?.scrollIntoView({
                    behavior: "smooth",
                  })
              }}
              className="bg-violet-700 text-white px-3 py-1 rounded-sm font-semibold hover:bg-white hover:text-violet-700 transition-all"
            >
              Projetos
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                  })
              }}
              className="bg-violet-700 text-white px-3 py-1 rounded-sm font-semibold hover:bg-white hover:text-violet-700 transition-all"
            >
              Contato
            </a>
          </li>
        </ul>

        <button
          onClick={toggleTheme}
          className={`relative flex h-8 w-16 items-center rounded-full transition-all duration-300 ${
            theme === "dark" ? "bg-violet-600" : "bg-violet-200"
          }`}
        >
          <span
            className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${
              theme === "dark"
                ? "translate-x-9"
                : "translate-x-1"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </button>
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-3 md:hidden">
        <button        
          onClick={toggleTheme}
          className={`relative flex h-8 w-16 items-center rounded-full transition-all duration-300 ${
            theme === "dark" ? "bg-violet-600" : "bg-violet-200"
          }`}
        >
          <span
            className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${
              theme === "dark"
                ? "translate-x-9"
                : "translate-x-1"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-foreground hover:cursor-pointer hover:scale-105"
        >
          ☰
        </button>
      </div>

      {/* Dropdown Mobile */}
      {menuOpen && (
        <div
          className="
          absolute
          top-full
          right-4
          mt-2
          w-48

          rounded-lg
          border border-white/20

          bg-background
          backdrop-blur-xl

          shadow-lg
          z-50
        "
        >
          <ul className="flex flex-col p-3 gap-2">

            <li>
              <a
                href="#projetos"
                onClick={() => {
                  document.getElementById("projetos")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMenuOpen(false);
                }} 
                className="block p-2 rounded hover:bg-violet-700 hover:text-white"
              >
                Projetos
              </a>
            </li>

            <li>
              <a
                href="#contato"
                onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setMenuOpen(false);
                }}
                className="block p-2 rounded hover:bg-violet-700 hover:text-white"
              >
                Contatos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}