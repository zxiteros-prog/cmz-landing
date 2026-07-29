import Image from "next/image";

const phoneDisplay = "+55 92 8127-4784";
const whatsapp = "559281274784";
const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
  "Olá! Gostaria de conhecer as soluções da CMZ Fitness para equipar minha academia."
)}`;

const categories = [
  { number: "01", title: "Musculação", text: "Máquinas seletorizadas e plate loaded para operações profissionais." },
  { number: "02", title: "Cardio", text: "Esteiras, bicicletas, elípticos e escadas de alta performance." },
  { number: "03", title: "Peso livre", text: "Halteres, anilhas, barras, bancos e estruturas para treinos completos." },
  { number: "04", title: "Funcional", text: "Acessórios e soluções versáteis para áreas de treinamento funcional." },
];

const differentiators = [
  { title: "Importação direta", text: "Seleção criteriosa de equipamentos e acesso competitivo ao mercado internacional." },
  { title: "Garantia", text: "Segurança e acompanhamento para proteger o investimento do seu projeto." },
  { title: "Suporte técnico", text: "Conhecimento especializado antes, durante e depois da instalação." },
  { title: "Preço competitivo", text: "Eficiência comercial sem abrir mão de qualidade, desempenho e durabilidade." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="CMZ Fitness — início">
          <Image src="/brand/cmz-logo-white-yellow.png" alt="CMZ Fitness" width={2048} height={341} priority />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">A CMZ</a>
          <a href="#equipamentos">Equipamentos</a>
          <a href="#diferenciais">Diferenciais</a>
          <a href="#lideranca">Liderança</a>
        </nav>
        <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Falar com a CMZ <span>↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <Image
          className="hero-image"
          src="/images/hero-gym.webp"
          alt="Academia premium equipada com máquinas profissionais"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content shell reveal">
          <span className="eyebrow light">Equipamentos profissionais para academia</span>
          <h1>Performance começa com os equipamentos certos.</h1>
          <p>
            Há mais de 10 anos oferecendo importação direta, qualidade e suporte especializado para academias em toda a Região Norte.
          </p>
          <div className="hero-actions">
            <a className="button button-yellow" href={whatsappLink} target="_blank" rel="noreferrer">
              Solicitar orçamento <span>↗</span>
            </a>
            <a className="text-link" href="#sobre">Conheça a CMZ <span>↓</span></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">CMZ / 01</div>
      </section>

      <section className="numbers" aria-label="Números da CMZ">
        <div className="shell stats-grid">
          <article><strong>10+</strong><span>Anos de mercado</span></article>
          <article><strong>30+</strong><span>Anos de experiência no setor</span></article>
          <article><strong>50+</strong><span>Academias atendidas</span></article>
          <article><strong>Norte</strong><span>Atuação regional especializada</span></article>
        </div>
      </section>

      <section className="section about shell" id="sobre">
        <div className="section-label"><span>02</span><p>A CMZ Fitness</p></div>
        <div className="about-content">
          <span className="eyebrow">Quem somos</span>
          <h2>Experiência internacional.<br />Presença regional.</h2>
          <div className="about-grid">
            <p className="lead">
              A CMZ nasceu da fusão de experiências construídas ao longo de décadas no mercado fitness.
            </p>
            <div>
              <p>
                Unimos conhecimento técnico, importação direta e atendimento próximo para equipar academias e grandes redes com soluções profissionais, confiáveis e competitivas.
              </p>
              <p>
                Nossa atuação conecta as necessidades da Região Norte às principais tendências, tecnologias e fornecedores do mercado internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="equipamentos">
        <div className="shell section">
          <div className="section-label dark-label"><span>03</span><p>Portfólio</p></div>
          <div className="section-heading-row">
            <div>
              <span className="eyebrow">Linha completa</span>
              <h2>Do primeiro equipamento à academia completa.</h2>
            </div>
            <p>Máquinas, esteiras, escadas, halteres e tudo o que o seu projeto precisa para operar com excelência.</p>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <article className="category-card" key={item.number}>
                <span className="category-number">{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="category-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section advantages shell" id="diferenciais">
        <div className="advantages-intro">
          <div className="section-label"><span>04</span><p>Diferenciais</p></div>
          <span className="eyebrow">Por que a CMZ</span>
          <h2>Uma operação preparada para entregar confiança.</h2>
          <p className="intro-copy">Não entregamos apenas equipamentos. Entregamos segurança para decisões que impactam toda a operação da academia.</p>
        </div>
        <div className="advantage-list">
          {differentiators.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise" id="lideranca">
        <div className="shell expertise-grid">
          <div className="expertise-visual">
            <Image src="/images/cassio-muniz.webp" alt="Cássio Muniz, CEO da CMZ Fitness" fill sizes="(max-width: 900px) 100vw, 45vw" />
            <div className="portrait-caption"><span>CEO</span><strong>Cássio Muniz</strong></div>
          </div>
          <div className="expertise-copy">
            <div className="section-label light-label"><span>05</span><p>Liderança</p></div>
            <span className="eyebrow light">Conhecimento técnico</span>
            <h2>Mais de três décadas dedicadas ao mercado fitness.</h2>
            <p>
              À frente da CMZ, Cássio Muniz acompanha de perto a evolução do setor há mais de 30 anos, com participação em feiras internacionais como a Sport Show China.
            </p>
            <p>
              Essa vivência conecta a realidade das academias da Região Norte às tendências, tecnologias e soluções do mercado global.
            </p>
            <div className="leadership-points">
              <span>Importação direta</span><span>Visão internacional</span><span>Conhecimento técnico</span>
            </div>
          </div>
        </div>
      </section>

      <section className="region section shell">
        <div className="region-card">
          <div className="region-copy">
            <span className="eyebrow">Amazônia Legal</span>
            <h2>Estratégia nacional com raízes na Região Norte.</h2>
            <p>
              Atendemos academias, redes, condomínios, hotéis, clubes e centros esportivos, compreendendo as particularidades logísticas e operacionais da região.
            </p>
          </div>
          <div className="region-mark">N</div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="shell contact-grid">
          <div>
            <span className="eyebrow light">Fale com um especialista</span>
            <h2>Vamos equipar seu próximo projeto?</h2>
            <p>Converse diretamente com a CMZ e encontre a solução ideal para a sua academia.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-yellow button-large" href={whatsappLink} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a>
            <a className="contact-line" href={`tel:+${whatsapp}`}>{phoneDisplay}</a>
            <a className="contact-line" href="https://instagram.com/cmzfitness_equipamentos" target="_blank" rel="noreferrer">@cmzfitness_equipamentos</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-top">
          <Image src="/brand/cmz-logo-white-yellow.png" alt="CMZ Fitness" width={2048} height={341} />
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
        <div className="shell footer-grid">
          <div><span>Contato</span><a href={`tel:+${whatsapp}`}>{phoneDisplay}</a><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a></div>
          <div><span>Endereço</span><p>Sala Comercial nº 09, 1º andar<br />Rua Rafael Assayag, nº 556<br />Bairro Alvorada, Manaus — AM</p></div>
          <div><span>Empresa</span><p>CNPJ 63.110.932/0001-07</p><p>Atuação na Amazônia Legal</p></div>
          <div><span>Social</span><a href="https://instagram.com/cmzfitness_equipamentos" target="_blank" rel="noreferrer">Instagram ↗</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} CMZ Fitness</span><span>Equipamentos para academia</span></div>
      </footer>
    </main>
  );
}
