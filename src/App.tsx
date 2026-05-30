import './App.css'

import heroImage from './assets/hero.png'
import logoImage from './assets/logo-amarela-fundotransparente-semtexto.png'
import mosaicOne from './assets/foto-mosaico-1.jpg'
import mosaicTwo from './assets/foto-mosaico-2.jpg'
import mosaicThree from './assets/foto-mosaico-3.jpg'
import mosaicFour from './assets/foto-mosaico-4.jpg'
import mosaicFive from './assets/foto-mosaico-5.jpg'
import mosaicSix from './assets/foto-mosaico-6.jpg'
import mosaicSeven from './assets/foto-mosaico-7.jpg'
import mosaicEight from './assets/foto-mosaico-8.jpg'
import adultProgram from './assets/programa-adultos.png'
import kidsProgram from './assets/programa-kids.jpg'
import womenProgram from './assets/programa-mulheres.jpg'
import nogiProgram from './assets/programa-nogi.jpg'
import storeVideo from './assets/loja.mp4'

const instagramUrl = 'https://www.instagram.com/tocadoleaojj/'
const whatsappNumber = '556592799166'
const scheduleWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Olá, gostaria de agendar uma aula experimental.',
)}`
const contactWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Olá, gostaria de mais informações.',
)}`

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Programas', href: '#programas' },
  { label: 'Loja', href: '#loja' },
  { label: 'Contato', href: '#contato' },
]

const mosaicImages = [
  mosaicOne,
  mosaicTwo,
  mosaicThree,
  mosaicFour,
  mosaicFive,
  mosaicSix,
  mosaicSeven,
  mosaicEight,
]

const programs = [
  {
    title: 'Jiu-Jitsu Kids',
    image: kidsProgram,
    paragraphs: [
      'Aulas conduzidas respeitando a idade, o ritmo e o nível de concentração de cada criança.',
      'Para os alunos mais novos, o aprendizado acontece de forma mais lúdica, com atividades que desenvolvem coordenação motora, disciplina, atenção, respeito e autoconfiança sem perder o aspecto leve e divertido da infância.',
      'Conforme a criança cresce e amadurece, o nível de exigência aumenta gradualmente. As aulas passam a trabalhar mais técnica, responsabilidade, postura no tatame, noção de defesa e evolução dentro do Jiu-Jitsu.',
      'O objetivo é formar crianças mais confiantes, disciplinadas e preparadas — dentro e fora do tatame.',
    ],
  },
  {
    title: 'Jiu-Jitsu Adultos',
    image: adultProgram,
    paragraphs: [
      'Pensado para receber tanto quem nunca treinou quanto quem já tem experiência na arte suave.',
      'Para quem está começando, a academia oferece uma aula introdutória, com orientação adequada para o primeiro contato com o Jiu-Jitsu. O aluno aprende os fundamentos com segurança, sem pressão e com acompanhamento técnico desde o início.',
      'Além disso, os treinos são organizados entre turmas de iniciantes e avançados, permitindo que cada aluno evolua no ritmo certo. Quem está começando constrói uma base sólida; quem já é graduado encontra treinos mais técnicos, intensos e refinados.',
      'As aulas são mistas, abertas para homens e mulheres, em um ambiente de respeito, disciplina e evolução constante.',
    ],
  },
  {
    title: 'No-gi',
    image: nogiProgram,
    paragraphs: [
      'Treino de Jiu-Jitsu sem kimono, com uma dinâmica mais rápida e direta.',
      'As aulas trabalham movimentação, controle corporal, transições, quedas, domínio de posições e finalizações usando pegadas adaptadas ao corpo e à roupa de treino.',
      'É uma modalidade importante para desenvolver velocidade, resistência, explosão, leitura de movimento e adaptação em situações onde não há pegadas no kimono.',
      'Ideal para quem busca complementar o treino com kimono, melhorar o condicionamento e ampliar o repertório técnico no grappling.',
    ],
  },
  {
    title: 'Jiu-Jitsu para Mulheres',
    image: womenProgram,
    paragraphs: [
      'Criada especialmente para mulheres, nossa turma feminina oferece um ambiente seguro, técnico e acolhedor para aprender Jiu-Jitsu com confiança, respeito e acompanhamento adequado.',
      'Mais do que uma atividade física, o Jiu-Jitsu é uma ferramenta poderosa de defesa pessoal, proteção e fortalecimento. A prática desenvolve autoconfiança, consciência corporal, controle emocional e o poder de se defender em situações reais, ajudando a mulher a se sentir mais segura, preparada e independente.',
      'A academia já conta com várias mulheres treinando, formando uma turma consolidada, receptiva e preparada para receber desde quem nunca pisou no tatame até quem já tem experiência.',
      'Aqui, cada mulher encontra espaço para aprender, evoluir, se proteger, se fortalecer e fazer parte de uma comunidade que respeita seu ritmo, sua jornada e seus objetivos.',
    ],
  },
]

const storeItems = [
  {
    title: 'Kimonos',
    text: 'Modelos para treino e competição.',
  },
  {
    title: 'Rashguards',
    text: 'Tecidos respiráveis para No-Gi.',
  },
  {
    title: 'Shorts & Calças de Compressão',
    text: 'Conforto e mobilidade no tatame.',
  },
  {
    title: 'Faixas',
    text: 'Todas as graduações.',
  },
  {
    title: 'Acessórios',
    text: 'Bonés e mais.',
  },
]

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

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo-link" href="#inicio" aria-label="Logo da Toca do Leão">
          <img src={logoImage} alt="Logo da Toca do Leão" />
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="button button-small" href={scheduleWhatsappUrl} target="_blank" rel="noreferrer">
            Agendar aula grátis
          </a>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section" aria-label="Banner principal">
          <img className="hero-media" src={heroImage} alt="" fetchPriority="high" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Jiu-Jitsu como estilo de vida.</h1>
            <a className="button button-primary" href={scheduleWhatsappUrl} target="_blank" rel="noreferrer">
              AGENDE UMA AULA EXPERIMENTAL GRÁTIS
            </a>
          </div>
        </section>

        <section id="sobre" className="section section-white">
          <div className="section-inner">
            <div className="section-copy">
              <h2 className="section-kicker">Sobre nós</h2>
              <div className="text-stack text-stack-large">
                <p>
                  A Toca do Leão é uma escola especializada em artes marciais e defesa pessoal,
                  dedicada ao Jiu-Jitsu como estilo de vida.
                </p>
                <p>
                  Da criança até o adulto, acolhemos quem está começando, refinamos a técnica de
                  quem já treina e damos estrutura para quem quer competir.
                </p>
                <p>
                  Treinamos corpo e mente, construímos faixas e, acima de tudo, cultivamos uma
                  comunidade que se respeita dentro e fora do tatame.
                </p>
              </div>
            </div>

            <div className="photo-mosaic" aria-label="Mosaico de fotos da Toca do Leão">
              {mosaicImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Foto ${index + 1} da Toca do Leão`}
                  loading={index > 1 ? 'lazy' : 'eager'}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="programas" className="section section-light">
          <div className="section-inner">
            <div className="section-heading">
              <h2 className="section-kicker">Programas</h2>
              <p>
                Metodologia de ensino específica para todos os níveis, com orientação técnica, boa
                estrutura e atenção ao desenvolvimento de cada aluno.
              </p>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.title}>
                  <div className="program-media">
                    <img src={program.image} alt={program.title} loading="lazy" />
                  </div>
                  <div className="program-content">
                    <h2>{program.title}</h2>
                    <div className="text-stack">
                      {program.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="loja" className="section section-dark">
          <div className="section-inner store-layout">
            <div className="store-copy">
              <h2 className="section-kicker">Toca Store</h2>
              <p className="store-intro">
                Produtos selecionados para acompanhar sua rotina dentro e fora do tatame, unindo
                conforto, durabilidade e identidade para quem faz do Jiu-Jitsu parte do dia a dia.
              </p>

              <div className="store-list">
                {storeItems.map((item) => (
                  <article className="store-item" key={item.title}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="store-video-wrap">
              <video src={storeVideo} autoPlay muted loop playsInline aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="contato" className="section section-white contact-section">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <h2 className="section-kicker">Contato</h2>
              <div className="text-stack text-stack-large">
                <p>
                  Estamos em Cuiabá-MT. Venha fazer parte da nossa família, conhecer de perto a
                  estrutura, os professores e o ambiente.
                </p>
                <p>Ficou com alguma dúvida? Chame o nosso time no WhatsApp</p>
              </div>

              <div className="contact-actions">
                <a
                  className="button button-primary button-whatsapp"
                  href={contactWhatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
                <div className="instagram-follow">
                  <strong>Siga-nos no Instagram</strong>
                  <a className="button button-secondary" href={instagramUrl} target="_blank" rel="noreferrer">
                    <InstagramIcon />
                    @tocadoleaojj
                  </a>
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
        <p>© {currentYear} — Todos os direitos reservados · Toca do Leão | Lifestyle Jiu-Jitsu - Desenvolvido por Éder Rabelo</p>
      </footer>
    </div>
  )
}

export default App
