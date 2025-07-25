"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  User,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { toast } from "react-toastify" 



export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || "Erro ao enviar")

      toast?.success?.("Mensagem enviada com sucesso!")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      toast?.error?.("Não foi possível enviar. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const skills = [
    { name: "React", icon: "/img/react.png" },
    { name: "Next.js", icon: "/img/Nextjs.png" },
    { name: "TypeScript", icon: "/img/typescript.png" },
    { name: "Laravel", icon: "/img/laravel.png" },
    { name: "Tailwind CSS", icon: "/img/TailwindCSS.png" },
    { name: "Node.js", icon: "/img/nodejs.png" },
    { name: "MySQL", icon: "/img/MySql.png" },
    { name: "Git", icon: "/img/Git.png" },
  ]

  const projects = [
    {
      id: 1,
      title: "Dra. Mariana Lopes",
      description: "Landing Page para psicóloga, o objetivo é apresentar um layout moderno, responsivo e elegante, transmitindo acolhimento, profissionalismo e confiança.",
      image: "/img/drmarianalopes.png?height=300&width=400",
      link: "https://dramarianalopes.vercel.app/",
    },
    {
      id: 2,
      title: "Solis Educacional",
      description: "Sistema ERP voltado para escolas públicas e privadas",
      image: "/img/solis.png?height=300&width=400",
      link: "https://painel.soliseducacional.com.br/",
    },
    {
      id: 3,
      title: "DMarks - Locação de Móveis",
      description: "Site para locação de móveis",
      image: "/img/dmarks.png?height=300&width=400",
      link: "https://dmarkslocacoes.com.br/",
    },
    {
      id: 4,
      title: "VivaCard - Livramento",
      description: "Website corporativo responsivo com CMS personalizado",
      image: "/img/vivacard.png?height=300&width=400",
      link: "https://vidacardlivramento.com.br/",
    },
  ]

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Pages",
      description: "Páginas de conversão otimizadas para seu negócio",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "E-commerce",
      description: "Lojas virtuais completas e seguras",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Sites Institucionais",
      description: "Websites corporativos profissionais",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Sites Pessoais e Portfólios",
      description: "Páginas profissionais para apresentar seu trabalho",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GustavoViniciusDev
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("sobre")} className="hover:text-blue-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection("projetos")} className="hover:text-blue-600 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection("servicos")} className="hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection("contato")} className="hover:text-blue-600 transition-colors">
                Contato
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {!darkMode ?  <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("projetos")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Projetos
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  Contato
                </button>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Olá, eu sou{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Gustavo Vinicius
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  Desenvolvedor Frontend & Backend
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
                  Transformo ideias em experiências digitais incríveis. Especializado em criar soluções web modernas,
                  responsivas e de alta performance para empresas e empreendedores.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection("projetos")}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Projetos
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contato")}
                    className="px-8 py-3 rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    Entre em Contato
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <Image
                    src="/img/minha_foto.png?height=500&width=500"
                    alt="Desenvolvedor trabalhando"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section id="sobre" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Sou um desenvolvedor apaixonado por tecnologia com mais de 4 anos de experiência criando soluções
                digitais inovadoras e eficientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <Image
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      width={40}       // ~5rem; ajuste se quiser maior/menor
                      height={40}
                      className="mb-4 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section id="projetos" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Confira alguns dos projetos que desenvolvi recentemente
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => window.open(project.link, "_blank")}
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Projeto
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <Button
                      variant="outline"
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    >
                      Ver Projeto
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Serviços</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Ofereço soluções completas para suas necessidades digitais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Vamos conversar sobre seu próximo projeto
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="contact-name">Nome</label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Seu nome completo" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="contact-email">E-mail</label>
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="seu@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="contact-msg">Mensagem</label>
                        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Descreva seu projeto..." rows={5} />
                      </div>
                      <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        {loading ? "Enviando..." : "Enviar Mensagem"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">E-mail</h3>
                    <p className="text-gray-600 dark:text-gray-400">contato.gustavoln@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p className="text-gray-600 dark:text-gray-400">(41) 99795-9684</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Localização</h3>
                    <p className="text-gray-600 dark:text-gray-400">Curitiba, PR</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold mb-4">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/gustavoviniciusdev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-blue-600 hover:text-white transition-colors bg-transparent"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </a>

                    <a
                      href="https://github.com/GustavoViniciusDev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-gray-800 hover:text-white transition-colors bg-transparent"
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full hover:bg-pink-600 hover:text-white transition-colors bg-transparent"
                      >
                        <Instagram className="w-5 h-5" />
                      </Button>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <p className="mb-2">© 2025 Gustavo Vinicius. Todos os direitos reservados.</p>
            <p className="text-gray-400">
              Criado com ❤️ por <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Gustavo Vinicius</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
