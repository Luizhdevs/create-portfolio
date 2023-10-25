import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
  const projects = [
    {
      title: "Projeto 1",
      description: "Gerador de senha",
      image:
        "https://github.com/Luizhdevs/password-generator/assets/138630678/20c37f29-adf7-48ae-9270-cdfc0afd3400",
      link: "https://luizhdevs.github.io/password-generator/",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 2",
      description: "CheckList",
      image:
        "https://github.com/Luizhdevs/projeto/assets/138630678/d07e9129-fcb5-4281-8c80-98967d1d3223",
      link: "https://luizhdevs.github.io/checklist/",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Projeto 3",
      description: "Página web",
      image:
        "https://github.com/Luizhdevs/onepage/assets/138630678/863f4eae-7fd6-40d5-88bd-b45f3f94de57",
      link: "https://luizhdevs.github.io/onepage",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 4",
      description: "Calculadora",
      image:
        "https://github.com/Luizhdevs/password-generator/assets/138630678/93068d0d-b300-471e-8143-6931dc904a3d",
      link: "https://luizhdevs.github.io/create-calculator/",
      colSpan: "col-span-1",
    },
    {
      title: "Projeto 5",
      description: "Meu Primeiro Projeto",
      image:
        "https://github.com/Luizhdevs/projeto/assets/138630678/a08e553f-a958-4068-8fd6-42b7ad5c4807",
      link: "https://luizhdevs.github.io/projeto/",
      colSpan: "col-span-1",
    },
  ]
  
  return (
    <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative p-4 text-center">
          <h2 className="relative z-50 mb-2 text-white">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Projetos &
            </span>
            <span className="font-handwriting text-4xl">Portfólio</span>
          </h2>
          <p className="relative text-sm text-gray-400">
            Alguns dos projetos pessoais e que já realizei ao longo da minha trajetória como programador front-end.
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div> 
    </section>
  )
}