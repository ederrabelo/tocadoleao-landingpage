import './App.css'

import { useEffect, useRef, useState, type ReactNode, type Ref } from 'react'

import heroDesktopPoster from './assets/hero-desktop-frameinicial.webp'
import heroMobilePoster from './assets/hero-mobile-frameinicial.webp'
import heroTabletPoster from './assets/hero-tablet-frameinicial.webp'
import heroDesktopVideo from './assets/hero-desktop.webm'
import heroMobileVideo from './assets/hero-mobile.webm'
import heroTabletVideo from './assets/hero-tablet.webm'
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
    highlights: ['Coordenação motora', 'Convivência e respeito'],
    scheduleHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de agendar uma aula Kids.',
    ),
    scheduleLabel: 'Agendar aula kids',
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
    scheduleLabel: 'Agendar aula adultos',
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
    scheduleLabel: 'Agendar No-Gi',
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
    scheduleLabel: 'Agendar turma feminina',
    learnHref: createWhatsappUrl(
      'Olá, vim pelo site e gostaria de saber mais sobre a metodologia do programa Mulheres.',
    ),
    source: 'programa_mulheres',
  },
]

const leaders = [
  {
    name: 'Lukas David',
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
  onClick?: () => void
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
      onClick={() => {
        trackEvent(event, source)
        onClick?.()
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
        <source srcSet={heroMobilePoster} media="(max-width: 760px)" />
        <source srcSet={heroTabletPoster} media="(max-width: 980px)" />
        <img src={heroDesktopPoster} alt="" fetchPriority="high" />
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
            <source src={heroMobileVideo} type="video/webm" media="(max-width: 760px)" />
            <source src={heroTabletVideo} type="video/webm" media="(max-width: 980px)" />
            <source src={heroDesktopVideo} type="video/webm" />
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
          ref={videoRef}
          src={shouldLoad && !prefersReducedMotion ? storeVideo : undefined}
          poster={storeVideoPoster}
          autoPlay={!prefersReducedMotion}
          muted
          loop={!prefersReducedMotion}
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
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        <TrackedLink
          className="logo-link"
          href="#inicio"
          event="navigation_click"
          source="logo_cabecalho"
        >
          <img src={logoImage} alt="Toca do Leão" />
        </TrackedLink>

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
              <div className="who-we-are-text">
                <p className="who-we-are-lead">
                  A Toca do Leão é uma escola de Jiu-Jitsu e defesa pessoal em Cuiabá, preparada
                  para receber diferentes idades e níveis de experiência.
                </p>
                <p>
                  Crianças, adultos, iniciantes e graduados encontram uma rotina de treino com
                  orientação técnica, respeito e uma comunidade presente dentro e fora do tatame.
                </p>
              </div>
              <TrackedLink
                className="button button-outline-dark who-we-are-button"
                href="/historia"
                event="navigation_click"
                source="historia_quem_somos"
              >
                Conheça nossa história
              </TrackedLink>
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
                    </div>
                    <div className="leadership-card-body">
                      <p className="leadership-role">{leader.role}</p>
                      <h3>{leader.name}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className="section section-dark intro-section">
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
                Quero conhecer a aula introdutória
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

        <section className="photo-gallery-wrap" aria-label="Fotos dos treinos na Toca do Leão">
          <div className="section-inner">
            <PhotoGallery images={mosaicImages} />
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
                        className="button button-card"
                        href={program.scheduleHref}
                        source={`${program.source}_agendar`}
                      >
                        {program.scheduleLabel}
                      </WhatsappLink>
                      <WhatsappLink
                        className="button button-outline-dark"
                        href={program.learnHref}
                        source={`${program.source}_saiba_mais`}
                      >
                        Saiba mais
                      </WhatsappLink>
                    </div>
                  </div>
                </article>
              ))}
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

        <section id="contato" className="section section-light contact-section">
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
