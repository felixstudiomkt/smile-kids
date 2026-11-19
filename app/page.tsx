import conteudo from "../content/felix-site.json";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  BrushingHabitsIllustration,
  CheckIcon,
  ClockIcon,
  EmergencyCareIllustration,
  FamilyBookIcon,
  FirstVisitIllustration,
  HeartOutlineIcon,
  HonestChoiceIcon,
  InstagramIcon,
  MapPinIcon,
  PillarCareIcon,
  PillarFollowIcon,
  PillarTeachIcon,
  PlayfulSpaceIcon,
  PlusIcon,
  ServiceOrthoIcon,
  ServicePediatricIcon,
  ServicePreventionIcon,
  SmileBadgeIcon,
  SparkleIcon,
  StepExplorerIcon,
  StepMissionIcon,
  StepStoryIcon,
  StepToothIcon,
  StepWelcomeIcon,
  TrustBadges,
  VisitTrailSvg,
  WhatsAppIcon,
  HeroUnderlineSvg,
} from "../components/Icons";
import { SiteHeader } from "../components/SiteHeader";

const DEFAULT_HERO_PHOTO = "/smile-kids-hero-family-v2.png";
const whatsappUrl = conteudo.whatsapp.valor;
const instagramUrl = "https://www.instagram.com/smilekidsodontologia/";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=R.%20Pres.%20Kennedy%2C%20622%2C%20Cascavel%2C%20PR";

const visitSteps = [
  {
    number: "01",
    title: "Chegar e conhecer",
    text: "Sem pressa: a criança explora o espaço e se sente segura antes de qualquer cuidado.",
    tone: "yellow",
    Icon: StepWelcomeIcon,
  },
  {
    number: "02",
    title: "Contar a história",
    text: "Você compartilha hábitos, rotina e dúvidas. A escuta faz parte da consulta.",
    tone: "teal",
    Icon: StepStoryIcon,
  },
  {
    number: "03",
    title: "Virar explorador",
    text: "Cadeira e instrumentos ganham nomes leves, simples e do universo infantil.",
    tone: "coral",
    Icon: StepExplorerIcon,
  },
  {
    number: "04",
    title: "Cuidar com calma",
    text: "A avaliação respeita o tempo da criança e observa cada etapa do desenvolvimento.",
    tone: "yellow",
    Icon: StepToothIcon,
  },
  {
    number: "05",
    title: "Levar uma missão",
    text: "A família sai com orientações possíveis de aplicar no dia a dia.",
    tone: "teal",
    Icon: StepMissionIcon,
  },
] as const;

const carePillars = [
  {
    title: "Acolher",
    text: "Atendimento especializado, gentil e sem pressa — para criar boas memórias desde o início.",
    tone: "yellow",
    Icon: PillarCareIcon,
  },
  {
    title: "Ensinar",
    text: "Pais e filhos aprendem uma rotina simples de higiene, alimentação e prevenção.",
    tone: "teal",
    Icon: PillarTeachIcon,
  },
  {
    title: "Acompanhar",
    text: "O desenvolvimento bucal é observado de perto, da primeira infância à adolescência.",
    tone: "coral",
    Icon: PillarFollowIcon,
  },
] as const;

const services = [
  {
    title: "Prevenção",
    text: "Acompanhamento, profilaxia, flúor e orientação personalizada para cada idade.",
    tone: "coral",
    Icon: ServicePreventionIcon,
  },
  {
    title: "Odontopediatria",
    text: "Cuidados restauradores e tratamentos infantis com linguagem lúdica e abordagem humanizada.",
    tone: "yellow",
    Icon: ServicePediatricIcon,
  },
  {
    title: "Ortodontia",
    text: "Avaliação da mordida, do crescimento e do alinhamento no momento certo do desenvolvimento.",
    tone: "teal",
    Icon: ServiceOrthoIcon,
  },
] as const;

const promises = [
  {
    title: "Famílias informadas",
    text: "Explicamos com calma para você cuidar com confiança em casa.",
    Icon: FamilyBookIcon,
  },
  {
    title: "Ambiente lúdico",
    text: "Um espaço pensado para acolher, encantar e diminuir a ansiedade.",
    Icon: PlayfulSpaceIcon,
  },
  {
    title: "Escolhas transparentes",
    text: "Indicações justas, com respeito ao tempo e à necessidade da criança.",
    Icon: HonestChoiceIcon,
  },
] as const;

const faqs = [
  [
    "Quando deve ser a primeira consulta?",
    "A recomendação é começar com o nascimento do primeiro dentinho ou ainda no primeiro ano de vida. Essa visita é, sobretudo, um momento de orientação e acolhimento.",
  ],
  [
    "Meu filho tem medo de dentista. Como vocês lidam?",
    "A aproximação acontece aos poucos. A criança conhece o ambiente e os instrumentos em linguagem infantil, sem atropelar o tempo de adaptação.",
  ],
  [
    "Dente de leite também precisa de tratamento?",
    "Sim. Dentes de leite participam da mastigação, da fala e guardam o espaço dos permanentes. Cuidar cedo ajuda a evitar dor e problemas futuros.",
  ],
  [
    "Qual pasta de dente devo usar?",
    "A indicação depende da idade e da rotina da criança. Na consulta, a família recebe orientação individual sobre flúor, quantidade e frequência de escovação.",
  ],
  [
    "Como posso agendar?",
    "É só tocar em qualquer botão de agendamento do site. Você será direcionado ao WhatsApp da Smile Kids para combinar o melhor horário.",
  ],
] as const;

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Smile Kids Odontologia",
  description:
    "Odontopediatria e ortodontia com acolhimento, prevenção e filosofia Cárie Zero em Cascavel/PR.",
  medicalSpecialty: ["PediatricDentistry", "Orthodontics"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Presidente Kennedy, 622",
    addressLocality: "Cascavel",
    addressRegion: "PR",
    postalCode: "85810-040",
    addressCountry: "BR",
  },
  sameAs: [instagramUrl],
  founder: {
    "@type": "Person",
    name: "Dra. Anne Caroline Marassi",
  },
  ...(conteudo.horario.valor ? { openingHours: conteudo.horario.valor } : {}),
};

export default function Home() {
  const isDefaultHeroPhoto = conteudo.foto.valor === DEFAULT_HERO_PHOTO;

  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clinicJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SiteHeader whatsappUrl={whatsappUrl} />

      <main id="conteudo-principal">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <h1 id="hero-title">
              O sorriso do seu filho merece uma{" "}
              <em>
                aventura{" "}
                <span className="hero-accent-end">
                  sem medo.
                  <HeroUnderlineSvg />
                </span>
              </em>
            </h1>
            <p className="hero-lead">{conteudo.apresentacao.valor}</p>
            <div className="hero-actions">
              <a
                className="button button-coral"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Agendar primeira visita</span>
                <ArrowUpRightIcon size={18} />
              </a>
              <a className="text-link" href="#primeira-visita">
                <span>Descobrir como funciona</span>
                <ArrowDownIcon size={17} />
              </a>
            </div>
            <div className="trust-row">
              <TrustBadges />
              <div className="trust-meta">
                <p>
                  <strong>21 anos</strong> cuidando de pequenos sorrisos
                </p>
                <span className="trust-location">
                  <MapPinIcon size={14} />
                  <span>Odontopediatria e Ortodontia · Cascavel/PR</span>
                </span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="sunburst" aria-hidden="true" />
            <div className="photo-frame">
              {isDefaultHeroPhoto ? (
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/smile-kids-hero-family-v2-640.webp 640w, /smile-kids-hero-family-v2-960.webp 960w"
                    sizes="(max-width: 760px) 300px, 420px"
                  />
                  <img
                    src="/smile-kids-hero-family-v2.jpg"
                    alt={conteudo.descricaoFoto.valor}
                    width={800}
                    height={1000}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
              ) : (
                <img
                  src={conteudo.foto.valor}
                  alt={conteudo.descricaoFoto.valor}
                  width={800}
                  height={1000}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              )}
            </div>
            <div className="speech speech-top">
              Sem medo,
              <br />
              <strong>só cuidado.</strong>
            </div>
            <div className="speech speech-bottom">
              <SparkleIcon size={16} className="speech-sparkle" />
              <span>
                Cárie Zero
                <br />
                <strong>é possível!</strong>
              </span>
            </div>
            <SparkleIcon size={34} className="spark spark-one" />
            <SparkleIcon size={24} className="spark spark-two" />
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((dup) => (
              <div className="ticker-group" key={dup}>
                <span>SORRIR</span>
                <SmileBadgeIcon size={28} className="ticker-icon" />
                <span>CUIDAR</span>
                <SparkleIcon size={24} className="ticker-icon" />
                <span>APRENDER</span>
                <HeartOutlineIcon size={26} className="ticker-icon" />
                <span>BRINCAR</span>
                <SparkleIcon size={24} className="ticker-icon" />
              </div>
            ))}
          </div>
        </div>

        <section
          className="visit section"
          id="primeira-visita"
          aria-labelledby="visit-title"
        >
          <div className="section-heading side-heading">
            <h2 id="visit-title">
              Uma aventura em <span>5 passinhos.</span>
            </h2>
            <p>
              Tudo foi pensado para a criança se sentir segura — e para você
              sair sabendo exatamente como cuidar.
            </p>
          </div>

          <div className="visit-stage">
            <VisitTrailSvg />
            <ol className="visit-grid">
              {visitSteps.map(({ number, title, text, tone, Icon }) => (
                <li className="visit-card" key={number}>
                  <div className="visit-card-head">
                    <span className="step-number">Passo {number}</span>
                    <span className={`step-icon tone-${tone}`} aria-hidden="true">
                      <Icon size={26} />
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="center-action">
            <a
              className="button button-coral"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Marcar a primeira visita</span>
              <ArrowUpRightIcon size={18} />
            </a>
          </div>
        </section>

        <section
          className="care section"
          id="cuidados"
          aria-labelledby="care-title"
        >
          <div className="section-heading">
            <h2 id="care-title">
              É leve para a criança.
              <br />
              <span>É tranquilizador para você.</span>
            </h2>
          </div>
          <div className="pillar-grid">
            {carePillars.map(({ title, text, tone, Icon }) => (
              <article className={`pillar-card pillar-${tone}`} key={title}>
                <span className={`pillar-icon tone-${tone}`} aria-hidden="true">
                  <Icon size={34} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="services section" aria-labelledby="services-title">
          <div className="services-ornament ornament-left" aria-hidden="true">
            <SparkleIcon size={72} />
          </div>
          <div className="services-ornament ornament-right" aria-hidden="true">
            <SparkleIcon size={44} />
          </div>

          <div className="section-heading light-heading side-heading">
            <h2 id="services-title">
              Cada fase tem um cuidado. <span>Nós acompanhamos todas.</span>
            </h2>
            <p>
              Prevenção no centro de tudo, com soluções claras quando o sorriso
              precisa de atenção.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ title, text, tone, Icon }) => (
              <article className="service-card" key={title}>
                <div className={`service-icon tone-${tone}`} aria-hidden="true">
                  <Icon size={30} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  className="service-link"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar sobre ${title}`}
                >
                  <span>Quero saber mais</span>
                  <ArrowRightIcon size={17} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="sobre" aria-labelledby="about-title">
          <div className="about-media">
            <div className="about-blob" aria-hidden="true" />
            <div className="about-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/dra-anne-marassi-480.webp 480w, /dra-anne-marassi.webp 646w"
                  sizes="(max-width: 760px) 280px, 380px"
                />
                <img
                  src="/dra-anne-marassi.jpg"
                  alt="Dra. Anne Caroline Marassi, odontopediatra e ortodontista da Smile Kids"
                  width={646}
                  height={788}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="experience-seal">
              <strong>21+</strong>
              <span>
                anos de
                <br />
                experiência
              </span>
            </div>
          </div>

          <div className="about-copy">
            <h2 id="about-title">
              Dra. Anne <span>Caroline Marassi</span>
            </h2>
            <p className="about-lead">
              Odontologia infantil e ortodontia com um olhar gentil, educativo e
              profundamente humano.
            </p>
            <p>
              Há mais de duas décadas, a Dra. Anne acompanha famílias para
              transformar a ida ao dentista em uma experiência natural. Na Smile
              Kids, prevenção não é só um tratamento: é conhecimento
              compartilhado com pais e filhos, no ritmo de cada criança.
            </p>
            <ul className="check-list">
              <li>
                <span className="check-badge" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <span>Odontopediatria com abordagem acolhedora</span>
              </li>
              <li>
                <span className="check-badge" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <span>Filosofia Cárie Zero e educação familiar</span>
              </li>
              <li>
                <span className="check-badge" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <span>Acompanhamento do crescimento e ortodontia</span>
              </li>
            </ul>
            <a
              className="button button-teal"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Conhecer a Smile Kids</span>
              <ArrowUpRightIcon size={18} />
            </a>
          </div>
        </section>

        <section className="promise section" aria-labelledby="promise-title">
          <h2 id="promise-title" className="sr-only">
            Nosso compromisso com as famílias
          </h2>
          <blockquote>
            “Prevenir é mais simples, mais leve e mais amoroso.”
          </blockquote>
          <div className="promise-grid">
            {promises.map(({ title, text, Icon }) => (
              <div className="promise-item" key={title}>
                <span className="promise-icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content section" aria-labelledby="content-title">
          <div className="section-heading side-heading">
            <h2 id="content-title">
              Informação também <span>protege sorrisos.</span>
            </h2>
            <a
              className="text-link"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Ver dicas no Instagram</span>
              <ArrowUpRightIcon size={17} />
            </a>
          </div>
          <div className="content-grid">
            <article className="content-card featured-card">
              <span className="card-tag">Primeira consulta</span>
              <div className="card-art art-yellow">
                <FirstVisitIllustration />
              </div>
              <h3>Quando levar meu filho ao dentista pela primeira vez?</h3>
              <p>
                O cuidado pode começar antes mesmo de aparecer o primeiro
                dentinho.
              </p>
            </article>
            <article className="content-card">
              <span className="card-tag">Hábitos</span>
              <div className="card-art art-coral">
                <BrushingHabitsIllustration />
              </div>
              <h3>Como transformar a escovação em uma rotina mais leve</h3>
              <p>
                Pequenas escolhas ajudam a criar autonomia sem transformar o
                momento em disputa.
              </p>
            </article>
            <article className="content-card">
              <span className="card-tag">Emergências</span>
              <div className="card-art art-yellow">
                <EmergencyCareIllustration />
              </div>
              <h3>Meu filho bateu o dente. O que fazer primeiro?</h3>
              <p>
                Manter a calma e buscar orientação rápida pode fazer toda a
                diferença.
              </p>
            </article>
          </div>
        </section>

        <section className="faq section" id="duvidas" aria-labelledby="faq-title">
          <div className="faq-intro">
            <h2 id="faq-title">
              Perguntas de <span>mãe e pai.</span>
            </h2>
            <p>
              Informação clara deixa o cuidado mais tranquilo. Se a sua dúvida
              não estiver aqui, fale diretamente com a equipe.
            </p>
            <a
              className="button button-teal"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Tirar uma dúvida</span>
              <ArrowUpRightIcon size={18} />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>
                  <span>{question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    <PlusIcon size={18} />
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section
          className="contact section"
          id="contato"
          aria-labelledby="contact-title"
        >
          <div className="contact-copy">
            <h2 id="contact-title">
              Vamos começar essa <span>aventura juntos?</span>
            </h2>
            <p>
              Fale com a equipe, conte a idade do seu filho e combine o melhor
              momento para a primeira visita.
            </p>
            <a
              className="button button-coral"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Chamar no WhatsApp</span>
              <ArrowUpRightIcon size={18} />
            </a>
          </div>

          <div className="contact-details">
            {conteudo.horario.valor && (
              <div className="contact-card contact-card-static">
                <span className="contact-icon" aria-hidden="true">
                  <ClockIcon size={22} />
                </span>
                <div>
                  <small>Horário de atendimento</small>
                  <strong>{conteudo.horario.valor}</strong>
                </div>
              </div>
            )}

            <a
              className="contact-card"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon" aria-hidden="true">
                <MapPinIcon size={22} />
              </span>
              <div>
                <small>Onde estamos</small>
                <strong>R. Presidente Kennedy, 622</strong>
                <p>
                  Centro · Cascavel/PR ·{" "}
                  <span className="nowrap">85810-040</span>
                </p>
              </div>
              <span className="contact-arrow" aria-hidden="true">
                <ArrowUpRightIcon size={20} />
              </span>
            </a>

            <a
              className="contact-card"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon" aria-hidden="true">
                <InstagramIcon size={22} />
              </span>
              <div>
                <small>Acompanhe</small>
                <strong>@smilekidsodontologia</strong>
                <p>Dicas e rotina da clínica no Instagram</p>
              </div>
              <span className="contact-arrow" aria-hidden="true">
                <ArrowUpRightIcon size={20} />
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <picture>
              <source srcSet="/smile-kids-logo.webp" type="image/webp" />
              <img
                src="/smile-kids-logo.png"
                alt="Smile Kids Odontologia"
                width={440}
                height={178}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <p>
              Porque prevenir é o maior gesto de amor que você pode oferecer ao
              seu filho.
            </p>
          </div>
          <div className="footer-links">
            <strong>Explore</strong>
            <a href="#primeira-visita">Primeira visita</a>
            <a href="#cuidados">Cuidados</a>
            <a href="#sobre">Sobre a Dra. Anne</a>
            <a href="#duvidas">Dúvidas</a>
          </div>
          <div className="footer-links">
            <strong>Contato</strong>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar no WhatsApp
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Como chegar
            </a>
          </div>
          <div className="footer-base">
            <span>© 2026 Smile Kids Odontologia</span>
            <span>Odontopediatria e Ortodontia · Cascavel/PR</span>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <WhatsAppIcon size={22} />
        <span>Agendar</span>
      </a>
    </>
  );
}
