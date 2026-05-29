import About from "../components/About"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <About />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Engenheiro de Dados & Analista de BI
      </h1>
      <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
        Transformando dados brutos em decisões estratégicas
      </p>
    </div>
  )
}