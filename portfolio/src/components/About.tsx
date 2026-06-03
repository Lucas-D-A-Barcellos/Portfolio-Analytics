import profile from "../assets/profile.png.webp";

export default function About() {
  return (
    <div
      className="
        mx-auto
        p-8
        h-full

        bg-white/10
        backdrop-blur-2xl

        border
        border-white/20

        rounded-md

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        hover:bg-white/15
        hover:border-violet-400/30
        hover:shadow-violet-500/10

        transition-all
        duration-500

        relative
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-400/60
          to-transparent
        "
      />

      <div className="flex flex-col items-center text-center">
        <img
          src={profile}
          alt="Lucas Barcellos"
          className="
            w-36
            h-36
            rounded-full
            object-cover

            border-4
            border-violet-400/40

            shadow-lg
            shadow-violet-500/20

            mb-4
          "
        />

        <h2 className="text-3xl font-bold text-foreground mb-2">
          Lucas Barcellos
        </h2>

        <span
          className="
            text-violet-300
            font-medium
            mb-4
          "
        >
          Analista de Dados • BI • Engenharia de Dados
        </span>

        <p className="mt-4 pt-1 text-foreground leading-8 text-justify">
          Sou Analista e Engenheiro de Dados apaixonado por tecnologia, automação e soluções orientadas a dados. Possuo experiência em Business Intelligence, Engenharia de Dados e desenvolvimento de aplicações, atuando na criação de dashboards, pipelines ETL, integrações de sistemas e processos de automação que transformam dados em informações estratégicas para o negócio.
        </p>
        <p className="mt-6 pt-4 text-foreground leading-8 text-justify">
          Trabalhei com ferramentas como Power BI, SQL Server, Oracle, Python, Power Apps e Power Automate, participando de projetos de análise, migração e integração de dados, além da otimização de processos corporativos. Busco sempre unir visão de negócio e conhecimento técnico para entregar soluções eficientes, escaláveis e de alto impacto.
        </p>
        <p className="mt-6 pt-4 text-foreground leading-8 text-justify">
          Atualmente, direciono meus estudos para Engenharia e Ciência de Dados, Inteligência Artificial, com o objetivo de construir soluções cada vez mais inteligentes, modernas e orientadas à inovação. Esta página reúne alguns dos projetos, tecnologias e experiências que fazem parte dessa jornada profissional.
        </p>
      </div>
    </div>
  );
}