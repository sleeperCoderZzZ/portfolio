// Conteúdo do portfólio — edite aqui.
import type { Certification, Localized, Project, TimelineItem } from './types'

export const email = 'jp660595@gmail.com'
export const linkedin = 'https://www.linkedin.com/in/jo%C3%A3o-pedro-cabral-pavarin-4341012b3/'
export const github = 'https://github.com/sleeperCoderZzZ'

const same = (v: string): Localized<string> => ({ pt: v, en: v })

export const skills: Localized<string>[] = [
  same('Node.js'), same('Express.js'), same('TypeScript'), same('JavaScript (ES6+)'), same('Vue.js'), same('Vuetify'),
  same('HTML5 / CSS3'), same('REST APIs'), { pt: 'Microsserviços', en: 'Microservices' },
  same('Neo4j'), { pt: 'Modelagem de grafos', en: 'Graph modeling' }, { pt: 'Modelagem de dados', en: 'Data modeling' },
  same('Docker'), same('Portainer'), same('Git / GitHub'),
  { pt: 'Metodologias ágeis', en: 'Agile methodologies' }, { pt: 'Troubleshooting', en: 'Troubleshooting' },
]

export const projects: Project[] = [
  {
    url: `${github}/assistente-percepcao-ambiental`,
    tags: ['JavaScript', 'IA'],
    title: { pt: 'Assistente de percepção ambiental', en: 'Environmental perception assistant' },
    description: {
      pt: 'um assistente voltado à percepção ambiental.',
      en: 'An assistant focused on environmental perception.',
    },
  },
  {
    url: `${github}/projeto-crum-playlist`,
    tags: ['JavaScript'],
    title: { pt: 'Crum Playlist', en: 'Crum Playlist' },
    description: {
      pt: 'Projeto de playlist desenvolvido em JavaScript.',
      en: 'A playlist project built with JavaScript.',
    },
  },
  {
    url: `${github}/curso-node-dio`,
    tags: ['Node.js', 'TypeScript'],
    title: { pt: 'Curso de Node.js (DIO)', en: 'Node.js course (DIO)' },
    description: {
      pt: 'Estudos de Node.js com TypeScript, com foco em padrões de projeto.',
      en: 'Node.js with TypeScript studies, focused on design patterns.',
    },
  },
  {
    url: `${github}/curso-javascript-dio`,
    tags: ['JavaScript'],
    title: { pt: 'Curso de JavaScript (DIO)', en: 'JavaScript course (DIO)' },
    description: {
      pt: 'Exercícios e práticas do curso de JavaScript da DIO.',
      en: 'Exercises and practice from the DIO JavaScript course.',
    },
  },
]

export const certifications: Certification[] = [
  {
    issuer: 'DIO',
    title: 'Formação Node.js Fundamentals',
    date: { pt: 'Outubro de 2026', en: 'October 2026' },
    hours: 30,
    url: 'https://hermes.dio.me/certificates/QJKCTOBF.pdf',
  },
  {
    issuer: 'Neo4j',
    title: 'Neo4j Graph Data Science Certification',
    date: { pt: 'Junho de 2026', en: 'June 2026' },
    url: 'https://graphacademy.neo4j.com/c/ef84a9aa-a410-4459-9003-05abde2299b4',
  },
  {
    issuer: 'Neo4j',
    title: 'Neo4j Certified Professional',
    date: { pt: 'Junho de 2025', en: 'June 2025' },
    url: 'https://graphacademy.neo4j.com/c/dd5c2b9d-3644-4bbd-b9b2-e279d7c420b9',
  },
]

export const timeline: TimelineItem[] = [
  {
    when: { pt: 'jun. 2023 — presente', en: 'Jun 2023 — present' },
    title: { pt: 'Desenvolvedor Full Stack', en: 'Full Stack Developer' },
    subtitle: { pt: 'Vexur · Tempo integral', en: 'Vexur · Full-time' },
    url: 'https://vexur.net/',
    description: {
      pt: 'A Vexur é uma startup de tecnologia para o setor de saúde e seguros, com foco em gestão de benefícios. Sua plataforma integrada cobre toda a jornada comercial: vendas online, assinatura eletrônica, análise e aprovação automatizada, implantação, gestão financeira (faturamento, boletos e cobrança), atendimento, comissionamento e portais do corretor e do cliente. Atende administradoras de benefícios, operadoras de saúde, clubes de benefícios, entidades de classe e corretoras.',
      en: 'Vexur is a technology startup for the health and insurance sector, focused on benefits management. Its integrated platform covers the whole commercial journey: online sales, e-signature, automated analysis and approval, onboarding, financial management (invoicing, payment slips and collections), customer service, commissioning, and broker and customer portals. It serves benefits administrators, health insurers, benefits clubs, trade associations and brokerages.',
    },
    bullets: {
      pt: [
        'Features end-to-end com Node.js, Express e Vue.js, da modelagem de dados à entrega em produção',
        'Modelagem e consultas em Neo4j para representar relacionamentos complexos do negócio',
        'Troubleshooting de chamados críticos em ambiente de alto volume de dados',
      ],
      en: [
        'End-to-end features with Node.js, Express and Vue.js, from data modeling to production',
        'Neo4j modeling and queries to represent complex business relationships',
        'Troubleshooting of critical tickets in a high-data-volume environment',
      ],
    },
  },
  {
    when: { pt: 'Em andamento', en: 'Ongoing' },
    title: { pt: 'Tecnologia de Sistemas para Internet', en: 'Internet Systems Technology' },
    subtitle: { pt: 'IFPR — Campus Jacarezinho', en: 'IFPR — Jacarezinho Campus' },
    description: {
      pt: 'Graduação tecnológica com foco em visão sistêmica e engenharia de software.',
      en: 'Technology degree focused on systems thinking and software engineering.',
    },
  },
]

type Strings = Record<string, string>
export const messages: Localized<Strings> = {
  pt: {
    navProjects: 'projetos', navAbout: 'sobre mim', navCerts: 'certificações', hoursLabel: 'horas', verify: 'ver certificado', navContact: 'contato',
    hi: 'Oi, eu sou', call: 'pode me chamar de',
    role: 'Desenvolvedor Full Stack — Node.js, Vue.js & Neo4j',
    cta1: 'ver meus projetos', cta2: 'mais sobre mim',
    about1: 'Sou Desenvolvedor Full Stack com quase 3 anos de experiência em produção, construindo e evoluindo sistemas críticos de alta complexidade em uma HealthTech de grande escala.',
    about2: 'Vou da modelagem de dados complexos à sustentação da plataforma, com foco em soluções escaláveis, microsserviços, alto volume de dados e automação de processos. Além de novas features, atuo forte em troubleshooting e na otimização de sistemas consolidados. Curso Tecnologia de Sistemas para Internet no IFPR (Jacarezinho).',
    contact: 'Vamos conversar? Me escreva por e-mail ou LinkedIn.',
    send: 'enviar e-mail', hint: 'clique em qualquer lugar', marquee: 'fale comigo',
  },
  en: {
    navProjects: 'projects', navAbout: 'about me', navCerts: 'certifications', hoursLabel: 'hours', verify: 'view certificate', navContact: 'contact',
    hi: "Hey, I'm", call: 'but you can call me',
    role: "Full Stack Developer — Node.js, Vue.js & Neo4j",
    cta1: 'see my projects', cta2: 'more about me',
    about1: "I'm a Full Stack Developer with almost 3 years of production experience, building and evolving critical, high-complexity systems at a large-scale HealthTech.",
    about2: 'From complex data modeling to platform sustainment, I focus on scalable solutions, microservices, high data volumes and business-process automation. Besides new features, I work heavily on troubleshooting and optimizing established systems. I am studying Internet Systems Technology at IFPR (Jacarezinho).',
    contact: "Let's talk! Reach me by email or LinkedIn.",
    send: 'send an email', hint: 'click anywhere', marquee: 'say hello',
  },
}
