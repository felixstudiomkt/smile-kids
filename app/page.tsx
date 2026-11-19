import conteudo from "../content/felix-site.json";

const whatsappUrl = conteudo.whatsapp.valor;
const instagramUrl = "https://www.instagram.com/smilekidsodontologia/";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=R.%20Pres.%20Kennedy%2C%20622%2C%20Cascavel%2C%20PR";

const visitSteps = [
  ["01", "Chegar e conhecer", "Sem pressa: a criança explora o espaço e se sente segura antes de qualquer cuidado."],
  ["02", "Contar a história", "Você compartilha hábitos, rotina e dúvidas. A escuta faz parte da consulta."],
  ["03", "Virar explorador", "Cadeira e instrumentos ganham nomes leves, simples e do universo infantil."],
  ["04", "Cuidar com calma", "A avaliação respeita o tempo da criança e observa cada etapa do desenvolvimento."],
  ["05", "Levar uma missão", "A família sai com orientações possíveis de aplicar no dia a dia."],
];

const carePillars = [
  ["♥", "Acolher", "Atendimento especializado, gentil e sem pressa — para criar boas memórias desde o início."],
  ["✦", "Ensinar", "Pais e filhos aprendem uma rotina simples de higiene, alimentação e prevenção."],
  ["↻", "Acompanhar", "O desenvolvimento bucal é observado de perto, da primeira infância à adolescência."],
];

const services = [
  ["Prevenção", "Acompanhamento, profilaxia, flúor e orientação personalizada para cada idade."],
  ["Odontopediatria", "Cuidados restauradores e tratamentos infantis com linguagem lúdica e abordagem humanizada."],
  ["Ortodontia", "Avaliação da mordida, do crescimento e do alinhamento no momento certo do desenvolvimento."],
];

const faqs = [
  ["Quando deve ser a primeira consulta?", "A recomendação é começar com o nascimento do primeiro dentinho ou ainda no primeiro ano de vida. Essa visita é, sobretudo, um momento de orientação e acolhimento."],
  ["Meu filho tem medo de dentista. Como vocês lidam?", "A aproximação acontece aos poucos. A criança conhece o ambiente e os instrumentos em linguagem infantil, sem atropelar o tempo de adaptação."],
  ["Dente de leite também precisa de tratamento?", "Sim. Dentes de leite participam da mastigação, da fala e guardam o espaço dos permanentes. Cuidar cedo ajuda a evitar dor e problemas futuros."],
  ["Qual pasta de dente devo usar?", "A indicação depende da idade e da rotina da criança. Na consulta, a família recebe orientação individual sobre flúor, quantidade e frequência de escovação."],
  ["Como posso agendar?", "É só tocar em qualquer botão de agendamento do site. Você será direcionado ao WhatsApp da Smile Kids para combinar o melhor horário."],
];

export default function Home() {
  return (
    <main>
      <div className="funbar" aria-label="Destaques da clínica">
        <div className="marquee-track">
          <span>Odontopediatria em Cascavel</span><b>✦</b><span>Primeira visita desde os primeiros dentinhos</span><b>✦</b><span>Filosofia Cárie Zero</span><b>✦</b><span>Acolhimento sem trauma</span><b>✦</b>
          <span aria-hidden="true">Odontopediatria em Cascavel</span><b aria-hidden="true">✦</b><span aria-hidden="true">Primeira visita desde os primeiros dentinhos</span><b aria-hidden="true">✦</b><span aria-hidden="true">Filosofia Cárie Zero</span><b aria-hidden="true">✦</b><span aria-hidden="true">Acolhimento sem trauma</span><b aria-hidden="true">✦</b>
        </div>
      </div>

      <nav className="nav-shell" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Smile Kids — início">
          <img src="/smile-kids-logo.png" alt="Smile Kids Odontologia" />
        </a>
        <div className="nav-links">
          <a href="#primeira-visita">Primeira visita</a>
          <a href="#cuidados">Cuidados</a>
          <a href="#sobre">Sobre</a>
          <a href="#duvidas">Dúvidas</a>
        </div>
        <a className="button button-coral nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar consulta</a>
      </nav>

      <header className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span>✦</span> Odontopediatria em Cascavel/PR</p>
          <h1>O sorriso do seu filho merece uma <em>aventura sem medo.</em></h1>
          <p className="hero-lead">{conteudo.apresentacao.valor}</p>
          <div className="hero-actions">
            <a className="button button-coral" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar primeira visita <span>↗</span></a>
            <a className="text-link" href="#primeira-visita">Descobrir como funciona <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div className="avatar-stack" aria-hidden="true"><span>👧🏻</span><span>👦🏽</span><span>👶🏼</span></div>
            <p><strong>21 anos</strong><br />cuidando de pequenos sorrisos</p>
          </div>
        </div>

        <div className="hero-art">
          <div className="sunburst" />
          <div className="photo-frame">
            <img src={conteudo.foto.valor} alt={conteudo.descricaoFoto.valor} />
          </div>
          <div className="speech speech-top">Sem medo,<br /><strong>só cuidado.</strong></div>
          <div className="speech speech-bottom"><span>★</span> Cárie Zero<br />é possível!</div>
          <span className="spark spark-one" aria-hidden="true">✦</span>
          <span className="spark spark-two" aria-hidden="true">✦</span>
        </div>
      </header>

      <div className="ticker" aria-hidden="true"><span>SORRIR</span><b>☺</b><span>CUIDAR</span><b>✦</b><span>APRENDER</span><b>♥</b><span>BRINCAR</span></div>

      <section className="visit section" id="primeira-visita">
        <div className="section-heading side-heading">
          <div><p className="kicker">Primeira visita</p><h2>Uma aventura em <span>5 passinhos.</span></h2></div>
          <p>Tudo foi pensado para a criança se sentir segura — e para você sair sabendo exatamente como cuidar.</p>
        </div>
        <div className="path-line" aria-hidden="true" />
        <div className="visit-grid">
          {visitSteps.map(([number, title, text], index) => (
            <article className={`visit-card card-${index + 1}`} key={number}>
              <span className="step-number">{number}</span>
              <span className="step-icon" aria-hidden="true">{index === 0 ? "👋" : index === 1 ? "💬" : index === 2 ? "🔎" : index === 3 ? "🦷" : "★"}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="center-action"><a className="button button-coral" href={whatsappUrl} target="_blank" rel="noreferrer">Marcar a primeira visita <span>↗</span></a></div>
      </section>

      <section className="care section" id="cuidados">
        <div className="section-heading">
          <p className="kicker">Nosso jeito de cuidar</p>
          <h2>É leve para a criança.<br /><span>É tranquilizador para você.</span></h2>
        </div>
        <div className="pillar-grid">
          {carePillars.map(([icon, title, text]) => (
            <article className="pillar-card" key={title}>
              <span className="pillar-icon" aria-hidden="true">{icon}</span>
              <p className="mini-label">Nosso cuidado</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services section">
        <div className="scribble scribble-left" aria-hidden="true">✦</div>
        <div className="scribble scribble-right" aria-hidden="true">•••••</div>
        <div className="section-heading light-heading side-heading">
          <div><p className="kicker">Cuidados completos</p><h2>Cada fase tem um cuidado. <span>Nós acompanhamos todas.</span></h2></div>
          <p>Prevenção no centro de tudo, com soluções claras quando o sorriso precisa de atenção.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, text], index) => (
            <article className="service-card" key={title}>
              <span className="service-index">0{index + 1}</span>
              <div className="service-icon" aria-hidden="true">{index === 0 ? "✦" : index === 1 ? "☺" : "↗"}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${title}`}>Quero saber mais <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-media">
          <div className="about-blob" />
          <div className="about-photo">
            <img src="https://static.wixstatic.com/media/ab37c8_de2380c42cf948ccb67513ef30ea880e~mv2.png/v1/fill/w_900,h_1100,al_c,q_90/img.png" alt="Dra. Anne Caroline Marassi, da Smile Kids" />
          </div>
          <div className="experience-seal"><strong>21+</strong><span>anos de<br />experiência</span></div>
        </div>
        <div className="about-copy">
          <p className="kicker">Quem cuida do sorriso</p>
          <h2>Dra. Anne <span>Caroline Marassi</span></h2>
          <p className="about-lead">Odontologia infantil e ortodontia com um olhar gentil, educativo e profundamente humano.</p>
          <p>Há mais de duas décadas, a Dra. Anne acompanha famílias para transformar a ida ao dentista em uma experiência natural. Na Smile Kids, prevenção não é só um tratamento: é conhecimento compartilhado com pais e filhos, no ritmo de cada criança.</p>
          <ul className="check-list">
            <li><span>✓</span> Odontopediatria com abordagem acolhedora</li>
            <li><span>✓</span> Filosofia Cárie Zero e educação familiar</li>
            <li><span>✓</span> Acompanhamento do crescimento e ortodontia</li>
          </ul>
          <a className="button button-teal" href={whatsappUrl} target="_blank" rel="noreferrer">Conhecer a Smile Kids <span>↗</span></a>
        </div>
      </section>

      <section className="promise section">
        <p className="kicker">Nosso compromisso</p>
        <blockquote>“Prevenir é mais simples, mais leve e mais amoroso.”</blockquote>
        <div className="promise-grid">
          <div><strong>01</strong><h3>Famílias informadas</h3><p>Explicamos com calma para você cuidar com confiança em casa.</p></div>
          <div><strong>02</strong><h3>Ambiente lúdico</h3><p>Um espaço pensado para acolher, encantar e diminuir a ansiedade.</p></div>
          <div><strong>03</strong><h3>Escolhas transparentes</h3><p>Indicações justas, com respeito ao tempo e à necessidade da criança.</p></div>
        </div>
      </section>

      <section className="content section">
        <div className="section-heading side-heading">
          <div><p className="kicker">Para cuidar em casa</p><h2>Informação também <span>protege sorrisos.</span></h2></div>
          <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">Ver dicas no Instagram <span>↗</span></a>
        </div>
        <div className="content-grid">
          <article className="content-card featured-card">
            <span className="card-tag">Primeira consulta</span><div className="card-art tooth-art" aria-hidden="true">☺</div>
            <h3>Quando levar meu filho ao dentista pela primeira vez?</h3><p>O cuidado pode começar antes mesmo de aparecer o primeiro dentinho.</p>
          </article>
          <article className="content-card">
            <span className="card-tag">Hábitos</span><div className="card-art brush-art" aria-hidden="true">✦</div>
            <h3>Como transformar a escovação em uma rotina mais leve</h3><p>Pequenas escolhas ajudam a criar autonomia sem transformar o momento em disputa.</p>
          </article>
          <article className="content-card">
            <span className="card-tag">Emergências</span><div className="card-art star-art" aria-hidden="true">★</div>
            <h3>Meu filho bateu o dente. O que fazer primeiro?</h3><p>Manter a calma e buscar orientação rápida pode fazer toda a diferença.</p>
          </article>
        </div>
      </section>

      <section className="faq section" id="duvidas">
        <div className="faq-intro">
          <p className="kicker">Dúvidas frequentes</p>
          <h2>Perguntas de <span>mãe e pai.</span></h2>
          <p>Informação clara deixa o cuidado mais tranquilo. Se a sua dúvida não estiver aqui, fale diretamente com a equipe.</p>
          <a className="button button-teal" href={whatsappUrl} target="_blank" rel="noreferrer">Tirar uma dúvida <span>↗</span></a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<span aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-copy">
          <p className="kicker">O primeiro passo</p>
          <h2>Vamos começar essa <span>aventura juntos?</span></h2>
          <p>Fale com a equipe, conte a idade do seu filho e combine o melhor momento para a primeira visita.</p>
          <a className="button button-coral" href={whatsappUrl} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a>
        </div>
        <div className="contact-details">
          {conteudo.horario.valor && <div className="contact-card"><div><small>Horário de atendimento</small><strong>{conteudo.horario.valor}</strong></div></div>}
          <a className="contact-card" href={mapsUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">⌖</span><div><small>Onde estamos</small><strong>R. Presidente Kennedy, 622</strong><p>Centro · Cascavel/PR · 85810-040</p></div><b>↗</b></a>
          <a className="contact-card" href={instagramUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">◎</span><div><small>Acompanhe</small><strong>@smilekidsodontologia</strong><p>Dicas e rotina da clínica no Instagram</p></div><b>↗</b></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img src="/smile-kids-logo.png" alt="Smile Kids Odontologia" />
          <p>Porque prevenir é o maior gesto de amor que você pode oferecer ao seu filho.</p>
        </div>
        <div className="footer-links"><strong>Explore</strong><a href="#primeira-visita">Primeira visita</a><a href="#cuidados">Cuidados</a><a href="#sobre">Sobre a Dra. Anne</a><a href="#duvidas">Dúvidas</a></div>
        <div className="footer-links"><strong>Contato</strong><a href={whatsappUrl} target="_blank" rel="noreferrer">Agendar no WhatsApp</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href={mapsUrl} target="_blank" rel="noreferrer">Como chegar</a></div>
        <div className="footer-base"><span>© 2026 Smile Kids Odontologia</span><span>Odontopediatria e Ortodontia · Cascavel/PR</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">✆<span>Agendar</span></a>
    </main>
  );
}
