"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDownRight, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"

const projects = [
  { n: "01", name: "Alexandria Energia", kind: "BACKEND · SISTEMAS CORPORATIVOS · FINTECH", desc: "Como parte do time de engenharia, contribuo para sistemas corporativos em produção, APIs, integrações financeiras e módulos internos de operação.", detail: "Ago 2025 — Out 2026 · Node-RED → Fastify", image: null, href: "https://www.alexandriabr.com/", tone: "green" },
  { n: "02", name: "Líder Lex", kind: "MOBILE · OPERAÇÃO", desc: "Contribuí como integrante do time de desenvolvimento com funcionalidades para consultores acompanharem vendas, propostas, comissões e sua rotina operacional.", detail: "App Store · iPhone", image: null, screenshots: ["/img/lider-lex/screen-1.webp", "/img/lider-lex/screen-2.webp"], href: "https://apps.apple.com/br/app/l%C3%ADder-lex/id6661022914", tone: "cream" },
  { n: "03", name: "Cliente Lex", kind: "MOBILE · EXPERIÊNCIA", desc: "Contribuí como integrante do time de desenvolvimento com funcionalidades para clientes acompanharem faturas, consumo e informações do serviço.", detail: "App Store · iPhone", image: null, screenshots: ["/img/cliente-lex/screen-1.webp", "/img/cliente-lex/screen-2.webp"], href: "https://apps.apple.com/br/app/cliente-lex/id6748029488", tone: "lavender" },
  { n: "04", name: "Transactional Wallet", kind: "BACKEND · SISTEMAS FINANCEIROS", desc: "Engenharia de uma carteira transacional com foco em consistência, rastreabilidade e confiabilidade.", detail: "Ledger · idempotência · mensageria", image: null, href: "#contato", tone: "ink" },
  { n: "05", name: "Solis Educacional", kind: "MODERNIZAÇÃO · LARAVEL", desc: "Manutenção e evolução de sistemas corporativos, integrando novas experiências às bases legadas.", detail: "PHP · Laravel · migrações", image: "/img/solis.png", href: "https://apps.apple.com/br/app/solis/id6459536732", tone: "blue" },
]

const experiences = [
  {
    role: { pt: "Engenheiro de Software Freelancer", en: "Freelance Software Engineer" },
    company: { pt: "Profissional Autônomo", en: "Self-employed" },
    period: { pt: "Out 2021 — atual", en: "Oct 2021 — Present" },
    location: { pt: "Curitiba, PR · Remoto", en: "Curitiba, Brazil · Remote" },
    stack: "PHP · Laravel · Node.js · TypeScript · React · Next.js · MySQL · PostgreSQL",
    bullets: {
      pt: [
        "Desenvolvo e mantenho aplicações corporativas sob medida, como ERPs, CRMs, dashboards operacionais e plataformas internas de gestão.",
        "Construo aplicações full stack, serviços backend, APIs REST e integrações entre sistemas internos, bancos de dados e serviços de terceiros.",
        "Modernizo sistemas legados com refatorações, migrações de PHP e frameworks, melhorias arquiteturais, correções e otimizações de desempenho.",
        "Implemento fluxos de negócio, módulos administrativos, relatórios, controle de acesso por função e automações alinhadas às necessidades operacionais.",
        "Conduzo o ciclo de desenvolvimento, da análise de requisitos e planejamento à implementação, testes, implantação e manutenção, em contato direto com stakeholders.",
      ],
      en: [
        "Design, develop, and maintain custom enterprise applications, including ERP and CRM systems, operational dashboards, and internal management platforms.",
        "Build full stack applications, backend services, REST APIs, and integrations across internal systems, databases, and third-party services.",
        "Modernize legacy applications through refactoring, PHP and framework migrations, architectural improvements, bug fixes, and performance optimization.",
        "Implement business workflows, administrative modules, reporting, role-based access control, and automation tailored to operational needs.",
        "Manage the development lifecycle from requirements and technical planning through implementation, testing, deployment, and ongoing maintenance, working directly with stakeholders.",
      ],
    },
  },
  {
    role: { pt: "Engenheiro de Software Sênior", en: "Senior Software Engineer" },
    company: { pt: "Alexandria Energia", en: "Alexandria Energia" },
    period: { pt: "Ago 2025 — Out 2026", en: "Aug 2025 — Oct 2026" },
    location: { pt: "Curitiba, PR · Presencial", en: "Curitiba, Brazil · On-site" },
    stack: "Node.js · TypeScript · Fastify · PostgreSQL · Docker · AWS",
    bullets: {
      pt: [
        "Liderei iniciativas de modernização backend, migrando gradualmente fluxos críticos de um ambiente legado em Node-RED para serviços com Fastify, Node.js e TypeScript.",
        "Projetei, desenvolvi e mantive APIs REST e serviços para CRM, cobrança, operações financeiras, gestão de clientes e pagamentos em uma plataforma com mais de 95 mil usuários.",
        "Desenvolvi funcionalidades de autoatendimento e monitoramento de energia, com informações sobre geração, faturas, pagamentos e dados operacionais.",
        "Implementei fluxos de negociação e pagamento integrando assinaturas digitais, gateways, geração automática de documentos, regras de negócio e serviços externos.",
        "Colaborei em decisões técnicas, otimização de consultas PostgreSQL, integrações, confiabilidade em produção e ferramentas internas de automação, usando Docker e AWS.",
      ],
      en: [
        "Led backend modernization initiatives, gradually migrating business-critical workflows from a legacy Node-RED environment to Fastify services with Node.js and TypeScript.",
        "Designed, developed, and maintained REST APIs and backend services for CRM, billing, financial operations, customer management, and payments across a platform serving more than 95,000 users.",
        "Built customer self-service and energy monitoring features covering generation, invoices, payments, and operational data.",
        "Developed financial negotiation and payment workflows integrating digital signatures, payment gateways, automated document generation, business rules, and external services.",
        "Contributed to technical decisions, PostgreSQL query optimization, integrations, production reliability, and internal automation tools using Docker and AWS.",
      ],
    },
  },
  {
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    company: { pt: "Solis Educacional", en: "Solis Educacional" },
    period: { pt: "Nov 2024 — Ago 2025", en: "Nov 2024 — Aug 2025" },
    location: { pt: "Curitiba, PR · Presencial", en: "Curitiba, Brazil · On-site" },
    stack: "PHP · Laravel · Vue.js · JavaScript · MySQL · PostgreSQL",
    bullets: {
      pt: [
        "Desenvolvi e mantive funcionalidades full stack para uma plataforma de gestão educacional com PHP, Laravel, Vue.js, MySQL e APIs REST.",
        "Projetei e implementei controle de acesso por função (RBAC), com permissões granulares para fortalecer a segurança e simplificar a administração de usuários.",
        "Contribuí para a modernização do legado, migrações de versão do PHP, refatoração backend e melhorias frontend, priorizando compatibilidade e estabilidade em produção.",
        "Aprimorei operações de banco de dados com modelagem relacional, otimização de consultas e melhorias de desempenho em MySQL e PostgreSQL.",
        "Colaborei com equipes ágeis em funcionalidades, integrações, testes automatizados, revisões de código e resolução de problemas.",
      ],
      en: [
        "Developed and maintained full stack features for an educational management platform using PHP, Laravel, Vue.js, MySQL, and REST APIs.",
        "Designed and implemented role-based access control (RBAC) with granular permissions, strengthening security and simplifying user administration.",
        "Contributed to legacy modernization, PHP version migrations, backend refactoring, and frontend improvements focused on compatibility and production stability.",
        "Improved database operations through relational modeling, query optimization, and performance enhancements across MySQL and PostgreSQL.",
        "Collaborated with Agile teams on features, integrations, automated testing, code reviews, and troubleshooting.",
      ],
    },
  },
  {
    role: { pt: "Engenheiro de Software", en: "Software Engineer" },
    company: { pt: "IceBerg Cyber Security", en: "IceBerg Cyber Security" },
    period: { pt: "Nov 2023 — Out 2024", en: "Nov 2023 — Oct 2024" },
    location: { pt: "Curitiba, PR · Presencial", en: "Curitiba, Brazil · On-site" },
    stack: "PHP · JavaScript · Node.js · TypeScript · Docker · CI/CD",
    bullets: {
      pt: [
        "Desenvolvi e evoluí aplicações backend e soluções internas com PHP, JavaScript, Node.js e TypeScript.",
        "Trabalhei em aplicações PHP legadas com refatoração, manutenção, melhorias de segurança e otimização de desempenho.",
        "Desenvolvi e integrei APIs REST, autenticação, middlewares, validação de entrada e serviços de terceiros.",
        "Investiguei incidentes em produção, diagnostiquei problemas e implementei correções para manter a estabilidade dos sistemas.",
        "Atuei com bancos relacionais, Docker, Git e pipelines CI/CD no desenvolvimento, implantação e manutenção de aplicações.",
      ],
      en: [
        "Developed and enhanced backend applications and internal software solutions using PHP, JavaScript, Node.js, and TypeScript.",
        "Worked on legacy PHP applications through refactoring, maintenance, security improvements, and performance optimization.",
        "Built and integrated REST APIs, authentication mechanisms, middleware, input validation, and third-party services.",
        "Investigated production incidents, diagnosed application issues, and implemented corrective improvements to maintain system stability.",
        "Worked with relational databases, Docker, Git, and CI/CD pipelines to support application development, deployment, and maintenance.",
      ],
    },
  },
  {
    role: { pt: "Instrutor de Programação de Sistemas", en: "Software Programming Instructor" },
    company: { pt: "Sistema Fiep", en: "Sistema Fiep" },
    period: { pt: "Mai 2022 — Fev 2024", en: "May 2022 — Feb 2024" },
    location: { pt: "Curitiba, PR · Presencial", en: "Curitiba, Brazil · On-site" },
    stack: "React · Node.js · PHP · Laravel · SQL · Git · Agile",
    bullets: {
      pt: [
        "Ensinei desenvolvimento full stack para estudantes de educação técnica, unindo fundamentos de engenharia de software a projetos práticos.",
        "Orientei o desenvolvimento de aplicações web com HTML, CSS, JavaScript, React, Node.js, PHP, Laravel e bancos de dados relacionais.",
        "Apresentei boas práticas como orientação a objetos, Clean Code, SOLID, MVC, UML, Git, testes de software e metodologias ágeis.",
        "Acompanhei estudantes da análise de requisitos e planejamento à implementação, depuração, revisão de código e apresentação técnica.",
        "Incentivei resolução de problemas, trabalho em equipe, comunicação técnica e preparação para carreiras em engenharia de software.",
      ],
      en: [
        "Taught full stack software development to technical education students, combining engineering fundamentals with hands-on projects.",
        "Mentored students building web applications with HTML, CSS, JavaScript, React, Node.js, PHP, Laravel, and relational databases.",
        "Introduced practices including object-oriented programming, Clean Code, SOLID, MVC, UML, Git, software testing, and Agile methodologies.",
        "Guided students from requirements analysis and planning through implementation, debugging, code reviews, and technical presentations.",
        "Encouraged problem-solving, teamwork, technical communication, and professional development for software engineering careers.",
      ],
    },
  },
]

export default function Portfolio() {
  const [pt, setPt] = useState(true)
  const [menu, setMenu] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [themeReady, setThemeReady] = useState(false)
  const [currentYear, setCurrentYear] = useState<number | null>(null)
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedTheme = window.localStorage.getItem("portfolio-theme")
      if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme)
      setThemeReady(true)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    if (themeReady) window.localStorage.setItem("portfolio-theme", theme)
  }, [theme, themeReady])
  useEffect(() => {
    const syncYear = () => setCurrentYear(new Date().getFullYear())
    let timer: number
    const scheduleYearCheck = () => {
      const now = new Date()
      const nextYear = new Date(now.getFullYear() + 1, 0, 1)
      const delay = Math.min(nextYear.getTime() - now.getTime(), 20 * 24 * 60 * 60 * 1000)
      timer = window.setTimeout(() => {
        syncYear()
        scheduleYearCheck()
      }, Math.max(delay, 1))
    }

    syncYear()
    scheduleYearCheck()
    window.addEventListener("focus", syncYear)
    document.addEventListener("visibilitychange", syncYear)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("focus", syncYear)
      document.removeEventListener("visibilitychange", syncYear)
    }
  }, [])
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const root = document.documentElement
    if (reduced || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node) => node.classList.add("revealed"))
      return
    }

    root.classList.add("motion-ready")
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed")
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" })
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((node, index) => {
      node.style.setProperty("--delay", `${Math.min(index % 3, 2) * 75}ms`)
      observer.observe(node)
    })

    const sequences = document.querySelectorAll<HTMLElement>("[data-sequence]")
    const sequenceObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sequence-active")
        sequenceObserver.unobserve(entry.target)
      }
    }), { threshold: 0.4 })
    sequences.forEach((sequence) => sequenceObserver.observe(sequence))

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      observer.disconnect()
      sequenceObserver.disconnect()
      root.classList.remove("motion-ready")
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [])
  const t = pt
  return <main className="portfolio" data-theme={theme}>
    <header className="topbar" data-enter="nav"><a className="brand" href="#inicio">GV<span className="brand-mark" aria-hidden="true"/></a><nav id="primary-navigation" aria-label={t ? "Navegação principal" : "Primary navigation"} className={menu ? "nav open" : "nav"}><a href="#experiencia" onClick={() => setMenu(false)}>{t ? "Experiência" : "Experience"}</a><a href="#trabalho" onClick={() => setMenu(false)}>{t ? "Projetos" : "Work"}</a><a href="#sobre" onClick={() => setMenu(false)}>{t ? "Sobre" : "About"}</a><a href="#contato" onClick={() => setMenu(false)}>{t ? "Contato" : "Contact"}</a></nav><div className="top-actions"><button className="theme-toggle" type="button" aria-label={theme === "dark" ? (t ? "Ativar tema claro" : "Switch to light theme") : (t ? "Ativar tema escuro" : "Switch to dark theme")} aria-pressed={theme === "dark"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={16} aria-hidden="true"/> : <Moon size={16} aria-hidden="true"/>}</button><button className="lang" onClick={() => setPt(!pt)}>{t ? "EN" : "PT"}</button><button className="menu-button" aria-label={menu ? (t ? "Fechar menu" : "Close menu") : (t ? "Abrir menu" : "Open menu")} aria-controls="primary-navigation" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={20}/> : <Menu size={20}/>}</button><a className="availability" href="mailto:contato.gustavoln@gmail.com"><i/> {t ? "Disponível para conversar" : "Open to conversations"}</a></div></header>
    <section className="hero" id="inicio"><div className="hero-meta"><span>ENGENHARIA DE SOFTWARE · CURITIBA, BR</span><span>26°18&apos; S — 48°50&apos; W</span></div><div className="hero-copy"><p className="eyebrow" data-enter="eyebrow">{t ? "CONSTRUINDO SISTEMAS QUE MOVEM NEGÓCIOS" : "BUILDING SYSTEMS THAT MOVE BUSINESS"}</p><h1><span className="name-line name-gustavo"><span>Gustavo</span></span><span className="name-line name-vinicius"><em>Vinicius</em><span className="period">.</span></span></h1><div className="hero-bottom"><p data-enter="role">{t ? <>Senior Software Engineer.<br/>Backend Engineering · Full Stack<br className="desktop"/> Software Architecture</> : <>Senior Software Engineer.<br/>Backend Engineering · Full Stack<br className="desktop"/> Software Architecture</>}</p><a href="#trabalho" className="round-link" data-enter="cta" aria-label="Ver projetos"><ArrowDownRight size={23}/></a><span className="hero-index">06+<br/>ANOS DE EXPERIÊNCIA</span></div></div><div className="hero-stamp" aria-hidden="true"><span>GV</span><small>SOFTWARE<br/>ENGINEER<br/>EST. 2020</small></div><div className="hero-flow" data-sequence="request" role="img" aria-label="Diagrama conceitual: cliente envia uma requisição pela API, que aciona serviços e consulta dados"><div className="flow-caption">BACKEND / REQUEST FLOW <span>01 — 04</span></div><div className="flow-path"><span className="flow-node client-node">CLIENT<br/><b>01</b></span><i/><span className="flow-node api-node">API<br/><b>02</b></span><i/><span className="flow-node service-node">SERVICE<br/><b>03</b></span><i/><span className="flow-node data-node">DATA<br/><b>04</b></span></div><div className="flow-foot"><span>HTTP / JSON</span><span>ASYNC EVENTS</span><span>CONSISTENCY</span></div><span className="flow-pulse"/></div></section>
    <section className="intro" id="sobre" data-reveal="section"><div className="section-label"><span>01 — {t ? "PERSPECTIVA" : "PERSPECTIVE"}</span><span>◆</span></div><div className="intro-body"><h2>{t ? <>Código é parte<br/>da <em>operação.</em></> : <>Code is part<br/>of the <em>operation.</em></>}</h2><div><p>{t ? "Atuo na construção e evolução de software que precisa funcionar no mundo real: operações corporativas, produtos financeiros e experiências digitais usadas por pessoas." : "I build and evolve software that has to work in the real world: business operations, financial products, and digital experiences used by people."}</p><p>{t ? "Minha contribuição acontece em times. Gosto de entender o sistema inteiro, encontrar o ponto de maior impacto e entregar mudanças que tornam a próxima evolução mais simples." : "I contribute as part of a team. I like understanding the whole system, finding the highest impact point, and shipping changes that make the next evolution simpler."}</p><div className="expertise">BACKEND &nbsp; / &nbsp; FULL STACK &nbsp; / &nbsp; ARQUITETURA</div><div className="career-note"><span>{t ? "EXPERIÊNCIA PROFISSIONAL" : "PROFESSIONAL EXPERIENCE"}</span><b>Alexandria Energia</b><small>{t ? "AGO 2025 — OUT 2026 · CURITIBA, BR" : "AUG 2025 — OCT 2026 · CURITIBA, BR"}</small></div></div></div><div className="stack-ribbon"><span>PHP</span><span>Laravel</span><span>Node.js</span><span>TypeScript</span><span>PostgreSQL</span><span>React</span><span>AWS</span><span>Docker</span></div></section>
    <section className="experience" id="experiencia" data-reveal="section"><div className="section-label"><span>02 — {t ? "TRAJETÓRIA" : "EXPERIENCE"}</span><span>{t ? "2021 — AGORA" : "2021 — NOW"}</span></div><div className="experience-heading"><h2>{t ? <>Experiência feita<br/>em <em>sistemas reais.</em></> : <>Experience built<br/>on <em>real systems.</em></>}</h2><p>{t ? "Uma trajetória entre produto, plataformas corporativas, modernização de legado e formação de novos profissionais." : "A career across products, enterprise platforms, legacy modernization, and mentoring the next generation."}</p></div><div className="experience-list">{experiences.map((experience, index) => <article className="experience-entry" key={experience.company.en} data-reveal="experience"><div className="experience-date"><span>0{index + 1}</span><time>{t ? experience.period.pt : experience.period.en}</time></div><div className="experience-content"><div className="experience-title"><div><p>{t ? experience.company.pt : experience.company.en}</p><h3>{t ? experience.role.pt : experience.role.en}</h3></div><span className="experience-location">{t ? experience.location.pt : experience.location.en}</span></div><ul>{(t ? experience.bullets.pt : experience.bullets.en).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="experience-stack"><span>{t ? "CONTEXTO TÉCNICO" : "TECHNICAL CONTEXT"}</span><p>{experience.stack}</p></div></div></article>)}</div></section>
    <section className="work" id="trabalho"><div className="section-label"><span>03 — {t ? "TRABALHO SELECIONADO" : "SELECTED WORK"}</span><span>2022 — 2026</span></div><div className="work-heading"><h2>{t ? "Sistemas reais." : "Real systems."}<br/><em>{t ? "Desafios complexos." : "Complex challenges."}</em></h2><p>{t ? "Uma seleção de produtos e plataformas dos quais participei em times de engenharia." : "A selection of products and platforms I helped build as part of engineering teams."}</p></div><div className="project-list">{projects.map((p) => <article className={`project ${p.tone}`} key={p.n} data-reveal="project"><a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="project-link"><div className={`project-art art-${p.n}`}>{p.image && p.n !== "05" ? <Image src={p.image} alt="" fill sizes="(max-width: 700px) 100vw, 55vw"/> : p.screenshots ? <div className={`phone-stage phone-stage-${p.n}`}>{p.screenshots.slice(0,3).map((src,i)=><div className={`phone phone-${i+1}`} key={src}><Image src={src} alt={`${p.name}: captura oficial ${i+1}`} fill sizes="160px" quality={80}/></div>)}<span className="stage-note">APP STORE <b>↗</b></span></div> : p.n === "04" ? <div className="wallet-art" data-sequence="wallet" role="img" aria-label="Diagrama conceitual de transação: request, idempotência, ledger, commit e eventos para mensageria e reconciliação"><div className="ledger-head">TRANSACTION FLOW <span>ATOMIC · TRACEABLE</span></div><div className="ledger-node">REQUEST <b>01</b></div><div className="ledger-line"/><div className="ledger-node">IDEMPOTENCY <b>02</b></div><div className="ledger-line"/><div className="ledger-node">LEDGER <b>03</b></div><div className="ledger-line"/><div className="ledger-node">COMMIT <b>OK</b></div><div className="ledger-foot"><span>EVENT BUS</span><span>● ● ●</span><span>RECONCILIATION</span></div></div> : p.n === "01" ? <div className="alex-architecture"><div className="arch-top"><span>PRODUCTION SYSTEMS</span><span>● ● ●</span></div><div className="arch-grid"><div className="arch-col"><small>CHANNELS</small><b>CLIENT APPS</b><b>OPERATIONS</b></div><i className="arch-connector"/><div className="arch-core"><small>API LAYER</small><strong>FASTIFY</strong><span>REST · INTEGRATIONS</span></div><i className="arch-connector"/><div className="arch-col"><small>CORE SERVICES</small><b>FINANCIAL</b><b>CRM</b><b>BILLING</b></div></div><div className="arch-migration"><span>NODE-RED</span><i/><b>→</b><strong>FASTIFY</strong><small>SERVICE MODERNIZATION</small></div><div className="arch-foot"><span>EVENTS ↗</span><span>PAYMENTS ↔</span><span>DATA LAYER ↓</span></div></div> : <div className="solis-visual"><div className="solis-proof"><Image src={p.image!} alt="Captura real de acesso à plataforma Solis" fill sizes="(max-width: 700px) 90vw, 35vw"/><span>REGISTRO REAL · PLATAFORMA LEGADA</span></div><div className="solis-evolution"><small>EVOLUÇÃO DA PLATAFORMA</small><b>LEGACY CORE</b><i/><span>Laravel · PHP</span><i/><b>INTEGRAÇÕES</b><i/><span>React · APIs</span><i/><strong>EXPERIÊNCIA EVOLUTIVA</strong></div></div>}<span className="art-index">{p.n} / CASE</span></div><div className="project-info"><div className="project-kicker">{p.kind}</div><div className="project-title"><h3>{p.name}</h3><ArrowUpRight size={21}/></div><p>{p.desc}</p><div className="project-detail">{p.detail}</div></div></a></article>)}</div></section>
    <section className="principles"><span className="section-label">04 — {t ? "COMO EU TRABALHO" : "HOW I WORK"}</span><div className="principle-grid"><div><b>01</b><h3>{t ? "Entender antes de reescrever" : "Understand before rewriting"}</h3><p>{t ? "Modernização incremental, com contexto e respeito ao que já mantém o negócio de pé." : "Incremental modernization, grounded in context and respect for what already keeps the business running."}</p></div><div><b>02</b><h3>{t ? "Confiabilidade é produto" : "Reliability is product"}</h3><p>{t ? "Consistência, observabilidade e integrações bem cuidadas fazem parte da experiência." : "Consistency, observability, and thoughtful integrations are part of the user experience."}</p></div><div><b>03</b><h3>{t ? "Decisões que envelhecem bem" : "Decisions that age well"}</h3><p>{t ? "Arquitetura simples o bastante para avançar e sólida o bastante para crescer." : "Architecture simple enough to move forward and solid enough to grow."}</p></div></div></section>
    <section className="contact" id="contato"><div className="section-label"><span>05 — {t ? "PRÓXIMA CONVERSA" : "NEXT CONVERSATION"}</span><span>↘</span></div><h2>{t ? <>Vamos construir<br/><em>algo que importa.</em></> : <>Let&apos;s build<br/><em>something that matters.</em></>}</h2><a className="contact-link" href="mailto:contato.gustavoln@gmail.com">contato.gustavoln@gmail.com <ArrowUpRight size={20}/></a><div className="socials"><a href="https://www.linkedin.com/in/gustavoviniciusdev/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/GustavoViniciusDev" target="_blank" rel="noreferrer">GITHUB ↗</a><span>CURITIBA, BRASIL</span></div></section>
    <footer><a className="brand" href="#inicio">GV<span className="brand-mark" aria-hidden="true"/></a><span>© <span className="copyright-year">{currentYear ?? ""}</span> GUSTAVO VINICIUS</span><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
  </main>
}
