import Image from "next/image"
import { TechBadge } from "../../../tech-badge"
import { Button } from "../../../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp  } from "react-icons/tb"

const Mock_Contacts = [
    {
        url: 'https://github.com/Marcola20',
        icon: <TbBrandGithub />
    },
    {
        url: 'https://www.linkedin.com/in/marcosviniciussa/',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'https://api.whatsapp.com/send/?phone=5541988334913&text&type=phone_number&app_absent=0',
        icon: <TbBrandWhatsapp />
    }
]

export const HeroSection = () => {
    return (
        <section className="w-full h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className="w-full lg:max-w-[530px]">
                    <p className="font-mono text-amber-200">Olá, meu nome é</p>
                    <h2 className="text-4xl font-medium mt-2">Marcos Vinicius</h2>

                    <p className="text-gray-400 my-6 text-sm sm:text-base">Sou um desenvolvedor full stack apaixonado por tecnologia. Com mais de 1 ano de experiência. Meu objetivo é continuar aprendendo e crescendo profissionalmente na área de Engenharia de Software e Desenvolvimento de Sistemas. Estou aberto a novas oportunidades e desafios.</p>

                    <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w[340px]">
                        {['C#', '.NET', 'React', 'Next.js', 'Tailwind', 'PostgreSQL'].map((techName, index) => (
                            <TechBadge key={index} name={techName} />
                        ))}
                    </div>

                    <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
                        <Button className="w-max shadow-button">
                            Entre em contato
                            <HiArrowNarrowRight size={18}/>
                        </Button>

                        <div className="text-gray-600 text-2xl flex items-center h-2- gap-3">
                            {Mock_Contacts.map((contact, index) => 
                                <a 
                                    href={contact.url}
                                    key={`contact-${index}`}
                                    target="_blank"
                                    className="hover:text-gray-100 transition-colors"
                                >
                                    {contact.icon}
                                </a>
                            )}
                        </div>
                    </div>
                    
                </div>

                <Image
                    width={420} 
                    height={404}
                    src="/images/profile-picture.png"
                    alt="Foto de Perfil"
                    className=" w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-xl object-cover"
                />

            </div>
            
        </section>
    )
}