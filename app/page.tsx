"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  User,
  Globe,
  Briefcase,
  Calendar,
  Building,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "pt">("en")

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
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Laravel",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "CI/CD",
    "AWS",
    "REST APIs",
    "Prisma",
    "Tailwind CSS",
    "Git",
  ]

  const content = {
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        services: "Services",
      },
      hero: {
        title: "Hi, I'm",
        role: "Software Engineer",
        ctaProjects: "View Projects",
      },
      about: {
        title: "About",
        subtitle:
          "Software Engineer with 4+ years of experience designing and developing scalable web platforms and APIs.",
        bio: [
          "At Alexandria Energia, I work on internal systems that support business operations and strategic decision-making, including CRM solutions and process automation tools.",
          "I actively contribute to improving system reliability, performance, and maintainability in a growing environment.",
          "I enjoy working on complex systems, solving scalability challenges, and improving software architecture to support long-term growth.",
        ],
        coreTech: "Core technologies",
      },
      experience: {
        title: "Professional Experience",
        subtitle: "Career focused on software engineering and product delivery",
      },
      projects: {
        title: "Selected Projects",
        subtitle: "Production apps, internal platforms, and real-world systems",
        internal: "Internal project",
        restricted: "Restricted access.",
      },
      services: {
        title: "What I Build",
        subtitle: "Engineering-focused services for digital products",
      },
      footer: {
        rights: "© 2025 Gustavo Vinicius. All rights reserved.",
        created: "Created with ❤️ by",
      },
    },
    pt: {
      nav: {
        about: "Sobre",
        experience: "Experiência",
        projects: "Projetos",
        services: "Serviços",
      },
      hero: {
        title: "Olá, eu sou",
        role: "Engenheiro de Software",
        ctaProjects: "Ver Projetos",

      },
      about: {
        title: "Sobre Mim",
        subtitle:
          "Engenheiro de software com mais de 4 anos de experiência em plataformas web escaláveis e APIs.",
        bio: [
          "Na Alexandria Energia, atuo em sistemas internos que suportam operações e decisões estratégicas, incluindo CRM e automações.",
          "Contribuo ativamente para melhorar confiabilidade, performance e manutenibilidade em um ambiente em crescimento.",
          "Gosto de trabalhar com sistemas complexos, desafios de escalabilidade e evolução de arquitetura.",
        ],
        coreTech: "Tecnologias principais",
      },
      experience: {
        title: "Experiência Profissional",
        subtitle: "Minha trajetória em engenharia de software e entrega de produtos",
      },
      projects: {
        title: "Projetos em Destaque",
        subtitle: "Apps em produção, plataformas internas e sistemas reais",
        internal: "Projeto interno",
        restricted: "Acesso restrito.",
      },
      services: {
        title: "O Que Eu Construo",
        subtitle: "Serviços com foco em engenharia para produtos digitais",
      },
      footer: {
        rights: "© 2025 Gustavo Vinicius. Todos os direitos reservados.",
        created: "Criado com ❤️ por",
      },
    },
  }

  const copy = content[language]

  const experiences = [
    {
      id: 1,
      company: "Alexandria",
      position: {
        en: "Software Engineer",
        pt: "Engenheiro de Software",
      },
      period: {
        en: "Aug 2025 – Present",
        pt: "Ago 2025 – Presente",
      },
      location: "Curitiba, PR",
      type: "work",
      description: {
        en: [
          "Built new features for a management platform used across the business",
          "Led infrastructure migration toward a modern architecture",
          "Improved system performance and scalability",
          "Adopted development best practices and code standards",
        ],
        pt: [
          "Desenvolvimento de novas funcionalidades para plataforma de gestão",
          "Migração de infraestrutura para arquitetura moderna",
          "Otimização de performance e escalabilidade do sistema",
          "Implementação de boas práticas de desenvolvimento",
        ],
      },
    },
    {
      id: 2,
      company: "Solis Educacional",
      position: {
        en: "Fullstack Developer",
        pt: "Desenvolvedor Fullstack",
      },
      period: {
        en: "Nov 2024 – Jul 2025",
        pt: "Nov 2024 – Jul 2025",
      },
      location: "Curitiba, PR",
      type: "work",
      description: {
        en: [
          "Delivered features in a legacy Laravel/MySQL system, including library and soft skills assessment modules",
          "Integrated a new React front-end with existing back-end services",
          "Fixed bugs and improved performance across core flows",
          "Documented changes and reinforced coding standards",
        ],
        pt: [
          "Implementou funcionalidades em sistema legado com Laravel e MySQL, incluindo biblioteca e avaliação SoftSkills",
          "Integrado novo front-end React com back-end",
          "Corrigiu bugs e otimizou o desempenho",
          "Documentação de mudanças e boas práticas de código",
        ],
      },
    },
    {
      id: 3,
      company: "Iceberg Security",
      position: {
        en: "Fullstack Developer",
        pt: "Desenvolvedor Fullstack",
      },
      period: {
        en: "Jan 2024 – Oct 2024",
        pt: "Jan 2024 – Out 2024",
      },
      location: "Curitiba, PR",
      type: "work",
      description: {
        en: ["Built features with Laravel, React, and Node.js", "Integrated REST APIs and managed Docker/AWS"],
        pt: ["Desenvolvimento com Laravel, React, Node.js", "Integração com APIs RESTful e gestão de ambiente Docker/AWS"],
      },
    },
    {
      id: 4,
      company: "Link Monitoramento",
      position: {
        en: "Fullstack Developer",
        pt: "Desenvolvedor Fullstack",
      },
      period: {
        en: "Nov 2022 – Jul 2023",
        pt: "Nov 2022 – Jul 2023",
      },
      location: "Curitiba, PR",
      type: "work",
      description: {
        en: ["Development with Laravel.js, React, and Node.js", "Back-end performance improvements"],
        pt: ["Desenvolvimento com Laravel.js, React e Node.js", "Melhoria de performance backend"],
      },
    },
    {
      id: 5,
      company: "SENAI",
      position: {
        en: "Systems Development Instructor",
        pt: "Professor de Desenvolvimento de Sistemas",
      },
      period: {
        en: "May 2022 – Feb 2024",
        pt: "Mai 2022 – Fev 2024",
      },
      location: "Curitiba, PR",
      type: "education",
      description: {
        en: ["Taught PHP, Laravel, React, and SQL", "Mentored practical projects", "Created technical learning materials"],
        pt: ["Aulas de PHP, Laravel, React e SQL", "Orientação de projetos práticos", "Criação de material didático"],
      },
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Lex Energia",
      description: {
        en: "Customer app for Lex Energia with consumption tracking, support, and service updates.",
        pt: "Aplicativo para clientes da Lex Energia com acompanhamento de consumo, suporte e informações do serviço.",
      },
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/38/16/eb/3816eba3-46a1-771b-ddb5-0e368c148a1f/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1200x630wa.jpg",
      links: [
        { label: "iOS", url: "https://apps.apple.com/br/app/lex-energia/id6661022914" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=lex.energiacom.vc&hl=pt_BR" },
      ],
    },
    {
      id: 2,
      title: "Alexandria Energia",
      description: {
        en: "Alexandria Energia customer app with daily service features.",
        pt: "Aplicativo da Alexandria Energia para clientes com funcionalidades do dia a dia.",
      },
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/67/58/b3/6758b32d-b74c-d50f-53a1-8c2880abb253/AppIcon-0-0-1x_U007ephone-0-1-85-220.png/1200x630wa.jpg",
      links: [
        { label: "iOS", url: "https://apps.apple.com/br/app/alexandria/id6748029488" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=cliente.alexandriaenergia.com&hl=pt_BR" },
      ],
    },
    {
      id: 3,
      title: "Solis Educacional",
      description: {
        en: "Mobile app for Solis platform covering school management and communication.",
        pt: "Aplicativo mobile da plataforma Solis para gestão e comunicação escolar.",
      },
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/01/7f/f6/017ff6f0-627d-5844-6371-f9703f310bd8/AppIcon-0-0-1x_U007epad-0-1-85-220.png/1200x630wa.jpg",
      links: [
        { label: "iOS", url: "https://apps.apple.com/br/app/solis/id6459536732" },
        { label: "Android", url: "https://play.google.com/store/apps/details?id=com.incamobile&hl=pt_BR" },
      ],
    },
    {
      id: 4,
      title: "CRM Operacional",
      description: {
        en: "Internal CRM for operations and support workflows. Restricted access project.",
        pt: "CRM interno para acompanhamento de operações e atendimento. Projeto de acesso restrito.",
      },
      image: null,
      links: [],
      badge: {
        en: "Internal",
        pt: "Interno",
      },
    },
    {
      id: 5,
      title: "Alexandria Energia (Site)",
      description: {
        en: "Institutional website focused on positioning and digital presence.",
        pt: "Site institucional com foco em posicionamento e presença digital da empresa.",
      },
      image: "https://img1.wsimg.com/isteam/ip/c05b7bc4-eb3a-485d-8b0d-e2716e606156/Banner%20home-faeb267.png",
      links: [{ label: "Site", url: "https://alexandriaenergia.com/" }],
    },
  ]

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: {
        en: "Web Products",
        pt: "Produtos Web",
      },
      description: {
        en: "Modern web applications focused on performance and UX.",
        pt: "Aplicações web modernas com foco em performance e experiência.",
      },
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: {
        en: "APIs & Integrations",
        pt: "APIs & Integrações",
      },
      description: {
        en: "Robust back-ends, integrations, and scalable services.",
        pt: "Back-ends robustos, integrações e serviços escaláveis.",
      },
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: {
        en: "UI & Design System",
        pt: "UI & Design System",
      },
      description: {
        en: "Consistent interfaces with reusable components.",
        pt: "Interfaces consistentes com componentes reutilizáveis.",
      },
    },
    {
      icon: <User className="w-6 h-6" />,
      title: {
        en: "Mobile Apps",
        pt: "Apps Mobile",
      },
      description: {
        en: "Native and hybrid experiences for iOS and Android.",
        pt: "Experiências nativas e híbridas para iOS e Android.",
      },
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
      <div className="relative min-h-screen bg-[#f5f7ff] text-slate-900 dark:bg-[#0b0f1a] dark:text-slate-100 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/30 blur-[120px] dark:bg-cyan-500/20" />
          <div className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-400/30 blur-[140px] dark:bg-purple-500/20" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-300/30 blur-[120px] dark:bg-sky-400/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_65%)]" />
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full z-50 border-b border-white/40 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-2xl">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GustavoViniciusDev
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection("sobre")} className="hover:text-blue-600 transition-colors">
                {copy.nav.about}
              </button>
              <button onClick={() => scrollToSection("experiencia")} className="hover:text-blue-600 transition-colors">
                {copy.nav.experience}
              </button>
              <button onClick={() => scrollToSection("projetos")} className="hover:text-blue-600 transition-colors">
                {copy.nav.projects}
              </button>
              <button onClick={() => scrollToSection("servicos")} className="hover:text-blue-600 transition-colors">
                {copy.nav.services}
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "pt" : "en")}
                className="rounded-full border-2 border-white/60 dark:border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-xl"
              >
                {language === "en" ? "PT" : "EN"}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-xl"
              >
                {!darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
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
            <div className="md:hidden bg-white/70 dark:bg-white/5 border-t border-white/40 dark:border-white/10 backdrop-blur-2xl">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  {copy.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection("experiencia")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  {copy.nav.experience}
                </button>
                <button
                  onClick={() => scrollToSection("projetos")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  {copy.nav.projects}
                </button>
                <button
                  onClick={() => scrollToSection("servicos")}
                  className="text-left hover:text-blue-600 transition-colors"
                >
                  {copy.nav.services}
                </button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "en" ? "pt" : "en")}
                  className="rounded-full border-2 border-white/60 dark:border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-xl"
                >
                  {language === "en" ? "PT" : "EN"}
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section className="pt-28 pb-20 px-4">
          <div className="container mx-auto text-center">
            <div className="mx-auto flex max-w-3xl flex-col items-center">
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
                {copy.hero.title}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 bg-clip-text text-transparent">
                  Gustavo Vinicius
                </span>
              </h1>
              <h2 className="mt-4 text-xl md:text-2xl text-slate-600 dark:text-slate-300">{copy.hero.role}</h2>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {copy.about.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => scrollToSection("projetos")}
                  className="bg-gradient-to-r from-blue-600 via-sky-500 to-purple-600 hover:from-blue-700 hover:via-sky-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {copy.hero.ctaProjects}
                </Button>
              </div>
              <div className="mt-10 grid w-full grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.slice(0, 6).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/10 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 backdrop-blur-2xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section id="sobre" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{copy.about.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{copy.about.subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {copy.about.bio.map((paragraph) => (
                <p key={paragraph} className="text-lg text-slate-600 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="max-w-4xl mx-auto mt-10">
              <h3 className="text-lg font-semibold mb-4">{copy.about.coreTech}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/10 text-slate-700 dark:text-slate-200 backdrop-blur-xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section id="experiencia" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{copy.experience.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {copy.experience.subtitle}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {experiences.map((experience) => (
                  <Card
                    key={experience.id}
                    className="group border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`p-3 rounded-full ${
                              experience.type === "education"
                                ? "bg-green-100/80 dark:bg-green-500/20"
                                : "bg-blue-100/80 dark:bg-blue-500/20"
                            }`}
                          >
                            {experience.type === "education" ? (
                              <GraduationCap
                                className={`w-6 h-6 ${
                                  experience.type === "education"
                                    ? "text-green-600 dark:text-green-400"
                                    : "text-blue-600 dark:text-blue-400"
                                }`}
                              />
                            ) : (
                              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            )}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {experience.position[language]}
                            </h3>
                            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                              <Calendar className="w-4 h-4 mr-1" />
                              {experience.period[language]}
                            </div>
                          </div>
                          <div className="flex items-center text-slate-600 dark:text-slate-300 mb-3">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{experience.company}</span>
                            <span className="mx-2">•</span>
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{experience.location}</span>
                          </div>
                          <ul className="space-y-2">
                            {experience.description[language].map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start text-slate-600 dark:text-slate-400">
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfólio */}
        <section id="projetos" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{copy.projects.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {copy.projects.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                          {copy.projects.internal}
                        </span>
                      </div>
                    )}
                    {project.badge ? (
                      <span className="absolute top-4 left-4 text-xs uppercase tracking-wide bg-slate-900/80 text-white px-3 py-1 rounded-full">
                        {project.badge[language]}
                      </span>
                    ) : null}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description[language]}</p>
                    {project.links.length > 0 ? (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <Button
                            key={link.url}
                            variant="outline"
                            onClick={() => window.open(link.url, "_blank")}
                            className="border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {link.label}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500 dark:text-slate-400">{copy.projects.restricted}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{copy.services.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {copy.services.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group text-center border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/10 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title[language]}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{service.description[language]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-white/30 dark:bg-white/5 backdrop-blur-2xl border-t border-white/40 dark:border-white/10">
          <div className="container mx-auto text-center">
            <p className="mb-2">{copy.footer.rights}</p>
            <p className="text-slate-500 dark:text-slate-400">
              {copy.footer.created}{" "}
              <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Gustavo Vinicius</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
