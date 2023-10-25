import { FaQuoteLeft } from "react-icons/fa"

// import Fran from "./../assets/WhatsApp Image 2023-09-28 at 13.20.56.jpeg"

export function Testimonials() {
  return (
    <section className="container mx-auto max-w-4xl p-4 py-8">
      <div className="relative mb-4 p-4 text-center">
        <h2 className="relative z-50 mb-2 font-bold">
          <span className="mr-2 font-headline text-3xl text-gray-800">
            Depoimentos de
          </span>
          <span className="font-handwriting text-4xl text-blue-800">
            Clientes
          </span>
        </h2>
        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
      </div>
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-gray-600" />
        <blockquote className="mb-6">
          <p className="text-2xl text-gray-900">
            Muito obrigado pelo ótimo trabalho executado. 
            Superou as expectativas, contemplando o que foi proposto dentro do prazo estipulado. 
            Já conhecia o Luiz, um profissional dedicado, atencioso e talentoso, então já tinha
            confiança de um serviço de boa qualidade.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://github.com/Luizhdevs/create-calculator/assets/138630678/0e182e5d-9255-4c63-9a79-f6ef8fce9e22"
            alt="Franciele Amorim"
          />
          <div className="flex items-center divide-x-2 divide-gray-200">
            <div className="pr-3 font-medium text-gray-900">Franciele Amorim</div>
            <div className="pl-3 text-sm font-light text-gray-500">
              Serviço prestado.
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}