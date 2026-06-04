import './App.css'

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type Ref,
} from 'react'

import heroDesktopPoster from './assets/hero-desktop-frameinicial.webp'
import heroMobilePoster from './assets/hero-mobile-frameinicial.webp'
import heroDesktopVideo from './assets/hero-desktop.webm'
import heroMobileVideo from './assets/hero-mobile.webm'
import logoImage from './assets/logo.png'
import mosaicOne from './assets/foto-mosaico-1.webp'
import mosaicTwo from './assets/foto-mosaico-2.webp'
import mosaicThree from './assets/foto-mosaico-3.webp'
import mosaicFour from './assets/foto-mosaico-4.webp'
import mosaicFive from './assets/foto-mosaico-5.webp'
import storePhoto from './assets/foto-loja.webp'
import lukasLeadership from './assets/lideranca-lukas.webp'
import yannLeadership from './assets/lideranca-yann.webp'
import adultProgram from './assets/programa-adultos.webp'
import kidsProgram from './assets/programa-kids.webp'
import womenProgram from './assets/programa-mulheres.webp'
import nogiProgram from './assets/programa-nogi.webp'
import storeVideoPoster from './assets/loja-frameinicial.webp'
import storeVideo from './assets/loja.webm'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

const instagramUrl = 'https://www.instagram.com/tocadoleaojj/'
const youtubeUrl = 'https://www.youtube.com/@Tocabjjschool'
const whatsappNumber = '556592799166'
const fullAddress = 'R. Padre Gerônimo Botelho, 392 - Dom Aquino, Cuiabá - MT, 78015-115'
const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}&travelmode=driving`
const mapsIosAppUrl = `comgooglemaps://?daddr=${encodeURIComponent(fullAddress)}&directionsmode=driving`
const mapsAndroidAppUrl = `intent://maps.google.com/maps?daddr=${encodeURIComponent(fullAddress)}&directionsmode=driving#Intent;scheme=https;package=com.google.android.apps.maps;S.browser_fallback_url=${encodeURIComponent(mapsRouteUrl)};end`

const createWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const whatsappUrls = {
  schedule: createWhatsappUrl(
    'Olá, vim pelo site e gostaria de agendar uma aula experimental grátis.',
  ),
  introduction: createWhatsappUrl(
    'Olá, vim pelo site e gostaria de saber mais sobre a aula introdutória individualizada para iniciantes.',
  ),
  contact: createWhatsappUrl('Olá, vim pelo site e gostaria de mais informações.'),
  store: createWhatsappUrl('Olá, vim pelo site e gostaria de saber mais sobre os produtos da Toca Store.'),
}

const navLinks = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Programas', href: '#programas' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Planos', href: '#planos' },
  { label: 'Loja', href: '#loja' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

const galleryImages = {
  training: {
    image: mosaicOne,
    alt: 'Treino de Jiu-Jitsu com kimono na Toca do Leão',
    width: 1080,
    height: 1440,
  },
  womenTraining: {
    image: mosaicTwo,
    alt: 'Praticantes durante treino de Jiu-Jitsu feminino',
    width: 1080,
    height: 1440,
  },
  kids: {
    image: mosaicThree,
    alt: 'Criança com kimono da Toca do Leão',
    width: 1080,
    height: 1913,
  },
  women: {
    image: mosaicFour,
    alt: 'Alunas durante treino feminino de Jiu-Jitsu',
    width: 1080,
    height: 1246,
  },
  nogi: {
    image: mosaicFive,
    alt: 'Praticantes durante treino de No-gi',
    width: 1080,
    height: 1440,
  },
}

const mosaicImages = [
  galleryImages.training,
  galleryImages.womenTraining,
  galleryImages.kids,
  galleryImages.women,
  galleryImages.nogi,
]

const programs = [
  {
    title: 'Kids',
    image: kidsProgram,
    description:
      'Aulas lúdicas e progressivas para apresentar os fundamentos do Jiu-Jitsu.',
    highlights: ['Coordenação motora', 'Disciplina'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula Kids.',
    ),
    scheduleLabel: 'Agendar',
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre a metodologia do programa Kids.',
    ),
    source: 'programa_kids',
  },
  {
    title: 'Adultos',
    image: adultProgram,
    description:
      'Turmas separadas para iniciantes e avançados, com orientação adequada ao momento de cada aluno.',
    highlights: ['Evolução técnica', 'Treino consistente'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula de Jiu-Jitsu para adultos.',
    ),
    scheduleLabel: 'Agendar',
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre a metodologia do programa Adultos.',
    ),
    source: 'programa_adultos',
  },
  {
    title: 'No-gi',
    image: nogiProgram,
    description:
      'Explore uma leitura diferente do Jiu-Jitsu em treinos dinâmicos sem kimono.',
    highlights: ['Mobilidade', 'Controle corporal'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula de No-gi.',
    ),
    scheduleLabel: 'Agendar',
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre a metodologia do programa No-gi.',
    ),
    source: 'programa_nogi',
  },
  {
    title: 'Mulheres',
    image: womenProgram,
    description:
      'Uma turma exclusiva para mulheres aprenderem Jiu-Jitsu com confiança, técnica e tranquilidade.',
    highlights: ['Turma 100% feminina', 'Defesa pessoal'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula na turma feminina.',
    ),
    scheduleLabel: 'Agendar',
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre a metodologia do programa Mulheres.',
    ),
    source: 'programa_mulheres',
  },
]

const scheduleDays = [
  {
    day: 'Segunda',
    weekday: 1,
    slots: [
      {
        time: '06:00',
        title: 'Iniciantes',
        detail: 'Fundamentos, base e movimentação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'No-gi',
        detail: 'Controle, passagens e finalizações',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Estratégia, intensidade e simulações',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Turma infantil com dinâmica lúdica',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'Avançados',
        detail: 'Técnica, situações e rolas',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '20:00',
        title: 'Mulheres',
        detail: 'Turma exclusiva para mulheres',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Terça',
    weekday: 2,
    slots: [
      {
        time: '06:00',
        title: 'Iniciantes',
        detail: 'Base, defesa pessoal e movimentação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'Avançados',
        detail: 'Sequências técnicas e rounds',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Rolas dirigidos e preparação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Coordenação, disciplina e técnica',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'No-gi',
        detail: 'Quedas, controle e transições',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '20:00',
        title: 'Iniciantes',
        detail: 'Aula progressiva de fundamentos',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Quarta',
    weekday: 3,
    slots: [
      {
        time: '06:00',
        title: 'No-gi',
        detail: 'Mobilidade, ataques e defesa',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '07:00',
        title: 'Iniciantes',
        detail: 'Aula progressiva de fundamentos',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Estratégia, intensidade e simulações',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Fundamentos, jogos e respeito',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'No-gi',
        detail: 'Controle, transições e finalizações',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '20:00',
        title: 'Avançados',
        detail: 'Treino técnico e específico',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Quinta',
    weekday: 4,
    slots: [
      {
        time: '06:00',
        title: 'Avançados',
        detail: 'Sequências técnicas e rounds',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'No-gi',
        detail: 'Transições, quedas e controle',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Rolas dirigidos e preparação',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Aula infantil por faixa etária',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'Iniciantes',
        detail: 'Fundamentos, base e defesa pessoal',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '20:00',
        title: 'Mulheres',
        detail: 'Turma exclusiva para mulheres',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
  {
    day: 'Sexta',
    weekday: 5,
    slots: [
      {
        time: '06:00',
        title: 'Iniciantes',
        detail: 'Revisão da semana e fundamentos',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '07:00',
        title: 'Avançados',
        detail: 'Treino técnico e específico',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '11:00',
        title: 'Competição',
        detail: 'Ritmo, pressão e simulações',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
      {
        time: '18:00',
        title: 'Kids',
        detail: 'Fundamentos, jogos e respeito',
        tags: [{ label: '5 a 12 anos', tone: 'kids' }],
      },
      {
        time: '19:00',
        title: 'No-gi',
        detail: 'Ritmo, scramble e controle',
        tags: [{ label: 'Sem kimono', tone: 'nogi' }],
      },
      {
        time: '20:00',
        title: 'Avançados',
        detail: 'Treino aberto orientado',
        tags: [{ label: 'Kimono', tone: 'kimono' }],
      },
    ],
  },
]

const scheduleFilters = [
  'Todos',
  'Iniciantes',
  'Avançados',
  'Competição',
  'Kids',
  'Mulheres',
  'Kimono',
  'Sem kimono',
  '5 a 12 anos',
] as const

const pricingPlans = [
  {
    name: '2x na semana',
    price: 'R$ 189',
    period: '/mês',
    description: 'Ideal para começar com consistência e encaixar o Jiu-Jitsu na rotina.',
    features: [
      '2 treinos por semana',
      'Acesso às turmas de fundamentos',
      'Reposição mediante disponibilidade',
    ],
    href: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o plano 2x na semana.',
    ),
    source: 'plano_2x',
  },
  {
    name: '3x na semana',
    price: 'R$ 229',
    period: '/mês',
    description: 'O melhor equilíbrio para evoluir técnica, condicionamento e confiança.',
    features: [
      '3 treinos por semana',
      'Acesso a turmas com kimono e no-gi',
      'Ritmo recomendado para evolução',
    ],
    href: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o plano 3x na semana.',
    ),
    source: 'plano_3x',
    featured: true,
  },
  {
    name: '5x na semana',
    price: 'R$ 289',
    period: '/mês',
    description: 'Para quem quer treinar com alta frequência e aproveitar a grade completa.',
    features: [
      'Até 5 treinos por semana',
      'Acesso à grade completa disponível',
      'Inclui treinos avançados e competição',
    ],
    href: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre o plano 5x na semana.',
    ),
    source: 'plano_5x',
  },
]

const reviews = [
  {
    author: 'Felix Keunecke',
    rating: 5,
    text: 'Melhor academia de Jiu-Jitsu de Mato Grosso, ambiente muito acolhedor e os professores mais capacitados do estado.',
  },
  {
    author: 'Camilly Schaustz',
    rating: 5,
    text: 'As aulas são excelentes! Sinto-me muito confortável em todas as aulas, o ambiente é respeitoso e todos estão dispostos a ajudar. Nota mil!!!',
  },
  {
    author: 'Lucas De La Cruz Mota',
    rating: 5,
    text: 'Academia top de BJJ, didática excelente e nível altíssimo!',
  },
  {
    author: 'Gabriel Tavares',
    rating: 5,
    text: 'Ótima academia, bons professores, nível de treino bom e ambiente agradável.',
  },
]

const leaders = [
  {
    name: 'Lukas Andrade',
    image: lukasLeadership,
    role: 'Faixa-preta de Jiu-Jitsu',
  },
  {
    name: 'Yann Cathalat',
    image: yannLeadership,
    role: 'Faixa-preta de Jiu-Jitsu',
  },
]

const storeCategories = [
  {
    icon: <BeltIcon />,
    title: 'Kimonos e faixas',
    text: 'Itens essenciais para os treinos e graduações.',
  },
  {
    icon: <ShirtIcon />,
    title: 'Rashguards e compressão',
    text: 'Rashguards, shorts e calças para conforto e mobilidade.',
  },
  {
    icon: <CapIcon />,
    title: 'Lifestyle',
    text: 'Bonés e outros itens da academia.',
  },
]

const faqs = [
  {
    question: 'Estou de passagem por Cuiabá. Posso fazer um treino?',
    answer:
      'Sim. Alunos visitantes são bem-vindos para treinar com a equipe. Basta chamar a recepção no WhatsApp para verificar o melhor horário e agendar sua visita ao tatame.',
  },
  {
    question: 'Preciso de kimono na primeira aula?',
    answer:
      'Não. Iniciantes podem fazer a primeira aula com ou sem kimono. Use uma roupa confortável, sem zíper ou detalhes que possam machucar, mantenha as unhas cortadas e traga uma garrafinha de água.',
  },
  {
    question: 'Preciso estar em forma para começar?',
    answer:
      'Não. A aula introdutória permite conhecer os fundamentos no seu ritmo. O condicionamento evolui gradualmente com a prática.',
  },
  {
    question: 'Tenho uma lesão ou restrição física. Posso treinar?',
    answer:
      'Depende da condição. Avise nossa equipe antes da aula e informe o professor. Em alguns casos, a orientação médica é recomendada antes de iniciar.',
  },
  {
    question: 'Preciso competir para treinar Jiu-Jitsu?',
    answer:
      'Não. Você pode treinar para melhorar o condicionamento, aprender defesa pessoal e praticar uma atividade física. A competição é uma possibilidade, não uma obrigação.',
  },
  {
    question: 'Os responsáveis podem acompanhar a aula Kids?',
    answer:
      'Sim. Os responsáveis podem acompanhar a aula dos filhos à beira do tatame.',
  },
]

const faqColumnBreak = Math.ceil(faqs.length / 2)
const faqColumns = [faqs.slice(0, faqColumnBreak), faqs.slice(faqColumnBreak)]

function trackEvent(event: string, source: string) {
  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, source })
}

function isMobileOrTabletBrowser() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  const userAgent = navigator.userAgent.toLowerCase()
  const hasMobileOrTabletAgent =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/.test(
      userAgent,
    )
  const isIpadInDesktopMode = userAgent.includes('macintosh') && navigator.maxTouchPoints > 1

  return hasMobileOrTabletAgent || isIpadInDesktopMode
}

function openMapsRoute(event: MouseEvent<HTMLAnchorElement>) {
  if (!isMobileOrTabletBrowser()) {
    return
  }

  event.preventDefault()

  if (/android/i.test(navigator.userAgent)) {
    window.location.href = mapsAndroidAppUrl
    return
  }

  const fallbackTimeout = window.setTimeout(() => {
    window.location.href = mapsRouteUrl
  }, 900)

  const clearFallback = () => {
    window.clearTimeout(fallbackTimeout)
    window.removeEventListener('pagehide', clearFallback)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
  }

  const handleVisibilityChange = () => {
    if (document.hidden) {
      clearFallback()
    }
  }

  window.addEventListener('pagehide', clearFallback, { once: true })
  document.addEventListener('visibilitychange', handleVisibilityChange)
  window.location.href = mapsIosAppUrl
}

function WhatsappLink({
  children,
  className,
  href,
  source,
}: {
  children: ReactNode
  className: string
  href: string
  source: string
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cta-source={source}
      onClick={() => trackEvent('whatsapp_click', source)}
    >
      {children}
    </a>
  )
}

function TrackedLink({
  children,
  className,
  event,
  href,
  innerRef,
  newTab = false,
  onClick,
  source,
}: {
  children: ReactNode
  className?: string
  event: string
  href: string
  innerRef?: Ref<HTMLAnchorElement>
  newTab?: boolean
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  source: string
}) {
  return (
    <a
      ref={innerRef}
      className={className}
      href={href}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noreferrer' : undefined}
      data-cta-source={source}
      onClick={(clickEvent) => {
        trackEvent(event, source)
        onClick?.(clickEvent)
      }}
    >
      {children}
    </a>
  )
}

function PhotoGallery({
  images,
}: {
  images: Array<(typeof galleryImages)[keyof typeof galleryImages]>
}) {
  return (
    <div className="photo-gallery">
      {images.map(({ alt, height, image, width }) => (
        <img
          key={image}
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M4.3 20.4L5.5 16A8 8 0 1 1 12 20a8 8 0 0 1-3.8-1z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9.1 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.2-.2.3 0 .6.4.7 1 1.4 1.7 1.8.3.2.5.2.6 0l.6-.7c.2-.2.4-.2.7-.1l1.6.8c.3.2.4.3.4.5 0 .5-.3 1.2-.7 1.5-.4.3-1.3.5-2.9-.2-2.4-1-4.1-3.1-4.7-4.7-.5-1.2-.2-1.9.1-2.2z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M21 12c0 2.2-.3 4.2-.7 4.8-.5.6-1 .8-1.8.9-1.5.2-4.2.3-6.5.3s-5-.1-6.5-.3c-.8-.1-1.3-.3-1.8-.9C3.3 16.2 3 14.2 3 12s.3-4.2.7-4.8c.5-.6 1-.8 1.8-.9C7 6.1 9.7 6 12 6s5 .1 6.5.3c.8.1 1.3.3 1.8.9.4.6.7 2.6.7 4.8z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}

function PersonalizedIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <circle cx="12" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 20c.5-3.2 2.7-5 6.5-5s6 1.8 6.5 5M19 4v4M17 6h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function GuidanceIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m14.7 9.3-1.6 3.8-3.8 1.6 1.6-3.8z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function GroupIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.5 19c.4-3.1 2.2-4.8 5.5-4.8s5.1 1.7 5.5 4.8M15.5 5.5a2.6 2.6 0 0 1 0 5.1M16.5 14.4c2.4.3 3.7 1.8 4 4.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function BeltIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M3 8h18v5H3zM9.5 8v5m5-5v5M10 13l-2.5 6M14 13l2.5 6M9.5 13h5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ShirtIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="m8.5 4 3.5 2 3.5-2L21 7l-2.4 4-2.1-1V20h-9V10l-2.1 1L3 7z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CapIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M4 15c.2-4.1 3.1-6.7 7.4-6.7 3.8 0 6.4 2.4 6.6 6.7H4zm14 0h4M11.4 8.3V15M7.2 9.6 9 15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ShopIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M5 8h14l1 12H4zm4 0V6a3 3 0 0 1 6 0v2"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="M8 6v12M16 6v12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="m9 6 9 6-9 6z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M12 5v14M5 12h14"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  )
}

function StarIcon({ isFilled = true }: { isFilled?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="m12 3.7 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.7-5 2.7 1-5.6-4.1-4 5.6-.8z"
        fill={isFilled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  )
}

function RatingStars({
  className,
  rating,
}: {
  className?: string
  rating: number
}) {
  const filledStars = Math.max(0, Math.min(5, Math.round(rating)))

  return (
    <span
      className={`rating-stars${className ? ` ${className}` : ''}`}
      aria-label={`${rating} de 5 estrelas`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon isFilled={index < filledStars} key={index} />
      ))}
    </span>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="m5 12.5 4.2 4.2L19 6.8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.1"
      />
    </svg>
  )
}

function ReviewsSection() {
  const reviewsTrackRef = useRef<HTMLDivElement>(null)
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const updateActiveReview = () => {
    const reviewsTrack = reviewsTrackRef.current

    if (!reviewsTrack) {
      return
    }

    const reviewCards = Array.from(
      reviewsTrack.querySelectorAll<HTMLElement>('.review-card'),
    )
    const closestReview = reviewCards.reduce(
      (closest, reviewCard, index) => {
        const distance = Math.abs(reviewCard.offsetLeft - reviewsTrack.scrollLeft)

        return distance < closest.distance ? { distance, index } : closest
      },
      { distance: Number.POSITIVE_INFINITY, index: 0 },
    )

    setActiveReviewIndex(closestReview.index)
  }

  const goToReview = (index: number) => {
    const reviewsTrack = reviewsTrackRef.current
    const reviewCard = reviewsTrack?.querySelectorAll<HTMLElement>('.review-card')[index]

    reviewCard?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
    setActiveReviewIndex(index)
  }

  return (
    <section className="section section-light reviews-section" aria-labelledby="reviews-title">
      <div className="section-inner">
        <div className="reviews-track-wrap">
          <h2 className="sr-only" id="reviews-title">Avaliações de alunos</h2>
          <div
            ref={reviewsTrackRef}
            className="reviews-track"
            aria-label="Avaliações de alunos"
            onScroll={updateActiveReview}
          >
            {reviews.map((review) => (
              <article className="review-card" key={review.author}>
                <RatingStars className="review-card-stars" rating={review.rating} />
                <blockquote>{review.text}</blockquote>
                <footer>
                  <strong>{review.author}</strong>
                </footer>
              </article>
            ))}
          </div>
          <div className="reviews-pagination" aria-label="Selecionar avaliação">
            {reviews.map((review, index) => (
              <button
                className={`reviews-pagination-dot${activeReviewIndex === index ? ' is-active' : ''}`}
                type="button"
                aria-label={`Ver avaliação de ${review.author}`}
                aria-current={activeReviewIndex === index ? 'true' : undefined}
                key={review.author}
                onClick={() => goToReview(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrophyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
      <path
        d="M7 4h10v2h3a1 1 0 0 1 1 1v1.1a4.9 4.9 0 0 1-4.4 4.9A5.6 5.6 0 0 1 13 16.9V19h3.2a1 1 0 0 1 1 1v1H6.8v-1a1 1 0 0 1 1-1H11v-2.1A5.6 5.6 0 0 1 7.4 13 4.9 4.9 0 0 1 3 8.1V7a1 1 0 0 1 1-1h3zm0 4H5v.1A2.9 2.9 0 0 0 7.1 11 7.5 7.5 0 0 1 7 9.8zm12 0h-2v1.8c0 .4 0 .8-.1 1.2A2.9 2.9 0 0 0 19 8.1z"
        fill="currentColor"
      />
    </svg>
  )
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches)

    motionQuery.addEventListener('change', updateMotionPreference)

    return () => motionQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  return prefersReducedMotion
}

function VideoToggleButton({
  className,
  isPaused,
  onClick,
}: {
  className: string
  isPaused: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`video-toggle ${className}`}
      type="button"
      aria-label={isPaused ? 'Reproduzir vídeo' : 'Pausar vídeo'}
      onClick={onClick}
    >
      {isPaused ? <PlayIcon /> : <PauseIcon />}
    </button>
  )
}

function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isPaused, setIsPaused] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false)

  const togglePlayback = () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    if (video.paused) {
      void video.play().catch(() => setIsPaused(true))
    } else {
      video.pause()
    }
  }

  return (
    <>
      <picture className="hero-poster" aria-hidden="true">
        <source srcSet={heroDesktopPoster} media="(min-width: 768px)" />
        <img src={heroMobilePoster} alt="" fetchPriority="high" />
      </picture>

      {!prefersReducedMotion && (
        <>
          <video
            ref={videoRef}
            className={`hero-media${isVideoReady ? ' is-ready' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            onLoadedData={() => {
              setIsVideoReady(true)
              setIsPaused(videoRef.current?.paused ?? false)
            }}
            onPause={() => setIsPaused(true)}
            onPlay={() => setIsPaused(false)}
          >
            <source src={heroDesktopVideo} type="video/webm" media="(min-width: 768px)" />
            <source src={heroMobileVideo} type="video/webm" />
          </video>
          <VideoToggleButton
            className="hero-video-toggle"
            isPaused={isPaused}
            onClick={togglePlayback}
          />
        </>
      )}
    </>
  )
}

function LazyStoreVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoWrapRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isPaused, setIsPaused] = useState(true)

  useEffect(() => {
    const videoWrap = videoWrapRef.current

    if (!videoWrap || shouldLoad) {
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      const timeoutId = globalThis.setTimeout(() => setShouldLoad(true), 0)
      return () => globalThis.clearTimeout(timeoutId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '240px' },
    )

    observer.observe(videoWrap)

    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    const video = videoRef.current

    if (!video || !prefersReducedMotion) {
      return
    }

    video.pause()
  }, [prefersReducedMotion])

  useEffect(() => {
    const video = videoRef.current

    if (!video || !shouldLoad || prefersReducedMotion) {
      return
    }

    video.defaultMuted = true
    video.muted = true
    video.loop = true

    void video.play().catch(() => setIsPaused(true))
  }, [prefersReducedMotion, shouldLoad])

  const togglePlayback = () => {
    const video = videoRef.current

    if (!video) {
      return
    }

    if (!shouldLoad) {
      setShouldLoad(true)
      return
    }

    if (video.paused) {
      void video.play().catch(() => setIsPaused(true))
    } else {
      video.pause()
    }
  }

  return (
    <div className="store-video-column">
      <div className="store-video-wrap" ref={videoWrapRef}>
        <video
          key={storeVideo}
          ref={videoRef}
          src={shouldLoad && !prefersReducedMotion ? storeVideo : undefined}
          poster={storeVideoPoster}
          autoPlay={!prefersReducedMotion}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onLoadedData={() => setIsPaused(videoRef.current?.paused ?? false)}
          onPause={() => setIsPaused(true)}
          onPlay={() => setIsPaused(false)}
        />
        {!prefersReducedMotion && (
          <VideoToggleButton
            className="store-video-toggle"
            isPaused={isPaused}
            onClick={togglePlayback}
          />
        )}
      </div>
    </div>
  )
}

function App() {
  const currentYear = new Date().getFullYear()
  const currentWeekday = new Date().getDay()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeScheduleFilter, setActiveScheduleFilter] =
    useState<(typeof scheduleFilters)[number]>('Todos')

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    const handleModalKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        menuToggleRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const menuLinks = Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>('a[href]') ?? [],
      )
      const focusableElements = [menuToggleRef.current, ...menuLinks].filter(
        (element): element is HTMLElement => element !== null,
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements.at(-1)

      if (!firstElement || !lastElement) {
        return
      }

      if (!focusableElements.includes(document.activeElement as HTMLElement)) {
        event.preventDefault()
        const nextElement = event.shiftKey ? lastElement : firstElement
        nextElement.focus()
        return
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleModalKeyboard)
    firstMobileLinkRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleModalKeyboard)
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 980px)')
    const closeMenuOnLargerScreen = () => {
      if (!mobileQuery.matches) {
        setIsMobileMenuOpen(false)
      }
    }

    mobileQuery.addEventListener('change', closeMenuOnLargerScreen)

    return () => {
      mobileQuery.removeEventListener('change', closeMenuOnLargerScreen)
    }
  }, [])

  return (
    <div className="site-shell">
      <header className={`site-header${isMobileMenuOpen ? ' is-menu-open' : ''}`}>
        <div className="logo-mark">
          <img src={logoImage} alt="Toca do Leão" />
        </div>

        <nav className="main-nav" aria-label="Menu principal">
          {navLinks.map((link) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              event="navigation_click"
              source={`nav_desktop_${link.href.slice(1)}`}
            >
              {link.label}
            </TrackedLink>
          ))}
        </nav>

        <div className="header-actions">
          <TrackedLink
            className="header-social-link"
            href={instagramUrl}
            event="instagram_click"
            newTab
            source="instagram_cabecalho"
          >
            <InstagramIcon />
            <span className="sr-only">Instagram da Toca do Leão</span>
          </TrackedLink>
          <TrackedLink
            className="header-social-link"
            href={youtubeUrl}
            event="youtube_click"
            newTab
            source="youtube_cabecalho"
          >
            <YouTubeIcon />
            <span className="sr-only">YouTube da Toca do Leão</span>
          </TrackedLink>
          <button
            ref={menuToggleRef}
            className="mobile-menu-toggle"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => {
              trackEvent('menu_toggle', isMobileMenuOpen ? 'fechar_menu' : 'abrir_menu')
              setIsMobileMenuOpen((isOpen) => !isOpen)
            }}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="mobile-menu"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <nav className="mobile-menu-nav" aria-label="Menu principal mobile">
              {navLinks.map((link, index) => (
                <TrackedLink
                  innerRef={index === 0 ? firstMobileLinkRef : undefined}
                  key={link.href}
                  href={link.href}
                  event="navigation_click"
                  source={`nav_mobile_${link.href.slice(1)}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ArrowRightIcon />
                </TrackedLink>
              ))}
            </nav>
            <div className="mobile-menu-socials" aria-label="Redes sociais">
              <TrackedLink
                className="mobile-menu-social-link"
                href={instagramUrl}
                event="instagram_click"
                newTab
                source="instagram_menu_mobile"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram da Toca do Leão</span>
              </TrackedLink>
              <TrackedLink
                className="mobile-menu-social-link"
                href={youtubeUrl}
                event="youtube_click"
                newTab
                source="youtube_menu_mobile"
              >
                <YouTubeIcon />
                <span className="sr-only">YouTube da Toca do Leão</span>
              </TrackedLink>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section" aria-label="Banner principal">
          <HeroMedia />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Jiu-Jitsu como estilo de vida.</h1>
            <p>Aulas para iniciantes, crianças e adultos em Cuiabá.</p>
            <WhatsappLink
              className="button button-primary"
              href={whatsappUrls.schedule}
              source="hero"
            >
              Agendar aula experimental grátis
            </WhatsappLink>
          </div>
          <a className="hero-scroll-indicator" href="#quem-somos">
            <span>Conheça a Toca</span>
            <ChevronDownIcon />
          </a>
        </section>

        <section id="quem-somos" className="section section-white who-we-are-section">
          <div className="section-inner who-we-are-layout">
            <div className="who-we-are-copy">
              <h2 className="section-kicker">Quem somos</h2>
              <div className="who-we-are-text story-panel">
                <p className="who-we-are-lead">
                  A Toca do Leão nasceu em Cuiabá durante a pandemia, a partir da vontade de manter viva a prática do Jiu-Jitsu e criar um espaço de treino com identidade própria, disciplina e espírito de equipe.
                </p>
                <p>
                  O que começou como um projeto de treino, disciplina e conexão entre pessoas foi crescendo até se tornar uma escola de Jiu-Jitsu e defesa pessoal preparada para receber crianças, adultos, iniciantes e graduados.
                </p>
                <p>
                  Mais do que um espaço de treino, a Toca carrega uma cultura de respeito, evolução constante e comunidade. Aqui, cada aluno encontra orientação técnica, acolhimento e um ambiente para crescer dentro e fora do tatame.
                </p>
                <TrackedLink
                  className="button button-secondary story-read-more"
                  href="#quem-somos"
                  event="story_read_more_click"
                  source="quem_somos_ler_mais"
                >
                  <PlusIcon />
                  Ler mais
                </TrackedLink>
              </div>
            </div>

            <section className="leadership-feature" aria-label="Professores da academia">
              <h3 className="leadership-subtitle">Liderança de campeões</h3>
              <p className="leadership-description">
                Conheça quem conduz o dia a dia dos treinos na nossa academia.
              </p>
              <div className="leadership-grid">
                {leaders.map((leader) => (
                  <article className="leadership-card" key={leader.name}>
                    <div className="leadership-photo">
                      <img src={leader.image} alt={leader.name} loading="lazy" decoding="async" />
                      <div className="leadership-caption">
                        <h3>{leader.name}</h3>
                        <p>{leader.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section id="programas" className="section section-light">
          <div className="section-inner">
            <div className="section-heading">
              <h2 className="section-kicker">Nossos Programas</h2>
              <p>
                Escolha o programa ideal de acordo com a sua necessidade.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.title}>
                  <div className="program-media">
                    <img src={program.image} alt={program.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="program-content">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <ul>
                      {program.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="program-actions">
                      <WhatsappLink
                        className="button program-button-schedule"
                        href={program.scheduleHref}
                        source={`${program.source}_agendar`}
                      >
                        {program.scheduleLabel}
                      </WhatsappLink>
                      <TrackedLink
                        className="button program-button-learn"
                        href="#"
                        event="program_learn_more_click"
                        source={`${program.source}_saiba_mais`}
                        onClick={(event) => event.preventDefault()}
                      >
                        Saiba mais
                        <ArrowRightIcon />
                      </TrackedLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="photo-gallery-wrap" aria-label="Fotos dos treinos na Toca do Leão">
          <div className="section-inner">
            <PhotoGallery images={mosaicImages} />
          </div>
        </section>

        <section id="primeiro-passo" className="section section-dark intro-section">
          <div className="section-inner intro-layout">
            <div className="intro-copy">
              <h2 className="section-kicker">Comece no seu ritmo</h2>
              <div className="text-stack text-stack-large">
                <p>
                  Nunca treinou? Comece com uma aula introdutória individualizada, pensada para
                  apresentar o tatame com segurança e atenção exclusiva.
                </p>
              </div>
              <WhatsappLink
                className="button button-primary"
                href={whatsappUrls.introduction}
                source="aula_introdutoria"
              >
                Agendar aula introdutória
              </WhatsappLink>
            </div>

            <section className="intro-benefits" aria-label="Benefícios da aula introdutória">
              <article>
                <div className="intro-benefit-icon">
                  <PersonalizedIcon />
                </div>
                <div>
                  <h3>Aula introdutória individualizada</h3>
                  <p>Um primeiro contato com atenção exclusiva para começar com calma.</p>
                </div>
              </article>
              <article>
                <div className="intro-benefit-icon">
                  <GuidanceIcon />
                </div>
                <div>
                  <h3>Orientação passo a passo</h3>
                  <p>Conheça os fundamentos e a dinâmica do tatame com acompanhamento próximo.</p>
                </div>
              </article>
              <article>
                <div className="intro-benefit-icon">
                  <GroupIcon />
                </div>
                <div>
                  <h3>A turma certa para você</h3>
                  <p>Depois da introdução, indicamos o grupo mais adequado ao seu momento.</p>
                </div>
              </article>
            </section>
          </div>
        </section>

        <section id="horarios" className="section section-white schedule-section">
          <div className="section-inner">
            <div className="section-heading">
              <h2 className="section-kicker">Horários</h2>
              <p>
                Confira nossa grade de treinos e encontre o melhor horário para você.
              </p>
            </div>

            <div className="schedule-filters" aria-label="Filtrar horários">
              {scheduleFilters.map((filter) => (
                <button
                  className={`schedule-filter${activeScheduleFilter === filter ? ' is-active' : ''}`}
                  type="button"
                  aria-pressed={activeScheduleFilter === filter}
                  key={filter}
                  onClick={() => {
                    setActiveScheduleFilter(filter)
                    trackEvent('schedule_filter_click', filter)
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="schedule-grid">
              {scheduleDays
                .map((day) => ({
                  day,
                  filteredSlots: day.slots.filter(
                    (slot) =>
                      activeScheduleFilter === 'Todos' ||
                      slot.title === activeScheduleFilter ||
                      slot.tags.some((tag) => tag.label === activeScheduleFilter),
                  ),
                }))
                .filter(({ filteredSlots }) => filteredSlots.length > 0)
                .map(({ day, filteredSlots }) => {
                  const isToday = day.weekday === currentWeekday

                  return (
                    <article
                      className="schedule-day-card"
                      aria-current={isToday ? 'date' : undefined}
                      key={day.day}
                    >
                      <header className="schedule-day-header">
                        <h3>{day.day}</h3>
                        {isToday && <span className="schedule-today-label">Hoje</span>}
                      </header>
                      <div className="schedule-slots">
                        {filteredSlots.map((slot) => (
                          <div className="schedule-slot" key={`${day.day}-${slot.time}-${slot.title}`}>
                            <time>{slot.time}</time>
                            <div>
                              <div className="schedule-slot-title">
                                <strong>{slot.title}</strong>
                                <div className="schedule-tags">
                                  {slot.tags.map((tag) => (
                                    <span
                                      className={`schedule-tag schedule-tag-${tag.tone}`}
                                      key={tag.label}
                                    >
                                      {tag.label}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  )
                })}
            </div>

            <div className="schedule-note">
              <p>Horários no fuso de Cuiabá. A grade pode ser ajustada em feriados, eventos especiais ou necessidades internas da academia.</p>
            </div>
          </div>
        </section>

        <section id="planos" className="section section-light pricing-section">
          <div className="section-inner">
            <div className="section-heading">
              <h2 className="section-kicker">Planos</h2>
              <p>
                Escolha o plano ideal para o seu objetivo.
              </p>
            </div>

            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article
                  className={`pricing-card${plan.featured ? ' is-featured' : ''}`}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="pricing-badge">
                      <TrophyIcon />
                      Mais escolhido
                    </span>
                  )}
                  <h3>{plan.name}</h3>
                  <p className="pricing-description">{plan.description}</p>
                  <div className="pricing-price">
                    <strong>{plan.price}</strong>
                    <span>{plan.period}</span>
                  </div>
                  <ul className="pricing-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <WhatsappLink
                    className={`button pricing-button${plan.featured ? ' button-card' : ' button-secondary'}`}
                    href={plan.href}
                    source={`${plan.source}_whatsapp`}
                  >
                    Escolher plano
                  </WhatsappLink>
                </article>
              ))}
            </div>

            <div className="pricing-note">
              <p>Planos e valores podem variar conforme campanhas, promoções ou condições vigentes.</p>
            </div>
          </div>
        </section>

        <section id="loja" className="section section-dark store-section">
          <div className="section-inner store-layout">
            <div className="store-copy">
              <h2 className="section-kicker">Toca Store</h2>
              <p className="store-intro">
                Produtos oficiais para treinos, graduações e uso no dia a dia — tudo disponível na própria academia.
              </p>

              <div className="store-product-photo">
                <img src={storePhoto} alt="Boné da Toca Jiu-Jitsu" loading="lazy" decoding="async" />
              </div>

              <div className="store-categories">
                {storeCategories.map((category) => (
                  <article className="store-category" key={category.title}>
                    <div className="store-category-icon">{category.icon}</div>
                    <div>
                      <h3>{category.title}</h3>
                      <small>{category.text}</small>
                    </div>
                  </article>
                ))}
              </div>

              <WhatsappLink
                className="button button-primary store-button"
                href={whatsappUrls.store}
                source="toca_store"
              >
                <ShopIcon />
                Consultar produtos
              </WhatsappLink>
            </div>

            <LazyStoreVideo />
          </div>
        </section>

        <section id="duvidas" className="section section-white faq-section">
          <div className="section-inner faq-layout">
            <div className="faq-heading">
              <div>
                <h2 className="section-kicker">Dúvidas frequentes</h2>
              </div>
              <p className="faq-intro">
                Reunimos aqui as principais informações para ajudar você a se preparar e aproveitar melhor sua experiência na academia.
              </p>
            </div>

            <div className="faq-list">
              {faqColumns.map((column, index) => (
                <div className="faq-column" key={`faq-column-${index}`}>
                  {column.map((faq) => (
                    <details
                      key={faq.question}
                      onToggle={(event) => {
                        if (event.currentTarget.open) {
                          trackEvent('faq_open', faq.question)
                        }
                      }}
                    >
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReviewsSection />

        <section id="contato" className="section section-white contact-section">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <h2 className="section-kicker">Entre em contato</h2>
              <div className="text-stack text-stack-large">
                <p>
                  Quer conhecer melhor a Toca ou tirar uma dúvida? Chame a nossa recepção no
                  WhatsApp ou venha nos visitar. Estamos em Cuiabá e será um prazer receber você.
                </p>
                <address>{fullAddress}</address>
              </div>

              <div className="contact-actions">
                <WhatsappLink
                  className="button button-primary button-whatsapp"
                  href={whatsappUrls.contact}
                  source="contato_whatsapp"
                >
                  <WhatsAppIcon />
                  Falar com a recepção no WhatsApp
                </WhatsappLink>
                <TrackedLink
                  className="button button-outline-dark"
                  href={mapsRouteUrl}
                  event="route_click"
                  newTab
                  onClick={openMapsRoute}
                  source="contato_como_chegar"
                >
                  <LocationIcon />
                  Como chegar
                </TrackedLink>
              </div>

              <div className="contact-socials">
                <strong>Acompanhe nas redes sociais</strong>
                <div className="contact-social-links">
                  <TrackedLink
                    className="header-social-link contact-social-link"
                    href={instagramUrl}
                    event="instagram_click"
                    newTab
                    source="instagram_contato"
                  >
                    <InstagramIcon />
                    <span className="sr-only">Siga a Toca no Instagram</span>
                  </TrackedLink>
                  <TrackedLink
                    className="header-social-link contact-social-link"
                    href={youtubeUrl}
                    event="youtube_click"
                    newTab
                    source="youtube_contato"
                  >
                    <YouTubeIcon />
                    <span className="sr-only">Inscreva-se no canal da Toca no YouTube</span>
                  </TrackedLink>
                </div>
              </div>
            </div>

            <div className="map-frame">
              <iframe
                title="Localização da Toca do Leão"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.6137355169635!2d-56.08886632409218!3d-15.612273118498576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0fa41085269%3A0x6d68be8f6a0134b6!2sToca do Leão Lifestyle Jiu-Jitsu!5e0!3m2!1spt-BR!2sbr!4v1780058142413!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <img
            className="footer-logo"
            src={logoImage}
            alt="Toca do Leão Lifestyle Jiu-Jitsu"
            loading="lazy"
            decoding="async"
          />
          <div className="footer-copy">
            <p>© {currentYear}. Todos os direitos reservados.</p>
            <p>Desenvolvido por Éder Rabelo</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
