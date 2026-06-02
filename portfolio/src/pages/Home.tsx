import About from "../components/About"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Sobre */}
        <div className="lg:col-span-2">
          <About />
        </div>

        {/* Skills */}
        <div className="lg:col-span-2">
          <Skills/>
        </div>

      </div>


      {/* Projetos */}
      <div className="mt-8">
        <Projects/>
      </div>

</div>
  )
}