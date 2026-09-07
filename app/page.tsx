const projects = [
  {
    number: "01",
    title: "Mesh App",
    type: "Business management platform",
    description:
      "A comprehensive business management platform that brings together CRM, sales, project and task management, time tracking, documents, invoicing, finance, reporting and automation, providing businesses with a centralized system to manage their daily operations.",
    stack: ["Laravel", "Next.js", "MySQL"],
    accent: "violet",
    image: "/projects/mesh-app.jpg",
  },
  {
    number: "02",
    title: "CRM & Webshop",
    type: "German client · outsourced development",
    description:
      "A CRM and webshop for an international business, with pipeline management, invoicing, forecasting, order processing and delivery tracking.",
    stack: ["Next.js", "Refine", "Supabase"],
    accent: "lime",
    image: "/projects/crm-webshop.jpg",
  },
  {
    number: "03",
    title: "Woostock",
    type: "Commerce management & integration",
    description:
      "A custom commerce management platform with real-time two-way synchronization with WooCommerce. Products, customers and orders are synchronized between the application and online store, keeping both systems consistently up to date.",
    stack: ["Laravel", "Next.js", "WooCommerce API"],
    accent: "coral",
    image: "/projects/woostock.jpg",
  },
  {
    number: "04",
    title: "Jobsmentor",
    type: "Multilingual job platform",
    description:
      "A multilingual, role-based job platform supporting candidates, companies and super administrators. Candidates could apply for jobs, companies managed their own users, postings and applications, while super administrators managed companies and platform-wide operations.",
    stack: ["Laravel", "Next.js", "REST APIs"],
    accent: "blue",
    image: "/projects/jobsmentor.jpg",
  },
];

const capabilities = [
  [
    "01",
    "Web applications",
    "Building focused, reliable platforms that support real business workflows.",
  ],
  [
    "02",
    "Backend & APIs",
    "Designing Laravel backends, database logic, integrations and secure REST APIs.",
  ],
  [
    "03",
    "Product interfaces",
    "Creating responsive dashboards, forms and dynamic interfaces with Next.js and React.",
  ],
];

const toolkit = [
  {
    name: "Frontend",
    description: "Interfaces people enjoy using",
    tools: ["Next.js", "React", "Tailwind CSS", "refine"],
    icon: "code",
    tone: "violet",
  },
  {
    name: "Backend",
    description: "Logic, APIs & integrations",
    tools: ["Laravel", "PHP", "Node.js", "REST APIs"],
    icon: "server",
    tone: "orange",
  },
  {
    name: "Data",
    description: "Reliable data foundations",
    tools: ["MySQL", "PostgreSQL", "Supabase"],
    icon: "database",
    tone: "blue",
  },
  {
    name: "Workflow",
    description: "From local work to delivery",
    tools: ["Git", "Bitbucket", "Docker", "WordPress"],
    icon: "workflow",
    tone: "green",
  },
];

function ToolkitIcon({ name }: { name: string }) {
  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
      </svg>
    );
  }

  if (name === "server") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="6" rx="1" />
        <rect x="4" y="14" width="5" height="6" rx="1" />
        <path d="M8 7h.01M8 17h.01M12 7h5M12 17h5" />
      </svg>
    );
  }

  if (name === "database") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="5.5" rx="7" ry="3" />
        <path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7h8a4 4 0 0 1 4 4v1M17 17H9a4 4 0 0 1-4-4v-1M15 4l3 3-3 3M9 20l-3-3 3-3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav shell" aria-label="Main navigation">
        <a
          className="brand"
          href="#top"
          aria-label="aabdylidev home"
        >
          <code>
            &lt;<span>artioledev</span>/&gt;
          </code>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero shell" id="top">
        <div className="hero-copy">
          

          <h1>
            Artiole Abdyli-full stack developer
            <br />
            <em></em>
          </h1>

          <p className="hero-intro">
            I&apos;m Artiolë, a full stack developer creating thoughtful
            digital products and business systems with Laravel and Next.js.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work
            </a>

            <a
              className="text-link"
              href="mailto:abdylartiola1@gmail.com"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Decorative developer illustration"
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <div className="code-window">
            <div className="window-bar">
              <i />
              <i />
              <i />
              <span>app.tsx</span>
            </div>

            <pre>
              <code>
                <b>const</b> developer = &#123;
                {"\n"} name: <strong>&quot;Artiolë&quot;</strong>,
                {"\n"} focus: [
                <strong>&quot;Laravel&quot;</strong>,{" "}
                <strong>&quot;Next.js&quot;</strong>],
                {"\n"} experience: <mark>4+</mark> years,
                {"\n"} mindset:{" "}
                <strong>&quot;build useful things&quot;</strong>
                {"\n"}&#125;;
              </code>
            </pre>
          </div>

          <div className="floating-card card-build"></div>

          <div className="floating-card card-location">
            <span>⌖</span>

            <div>
              <small>Based in</small>
              <b>Kosovo &amp; Sweden</b>
            </div>
          </div>

          <div className="grid-lines" />
        </div>

        <div className="hero-foot">
          <span>Full stack developer · 2026</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="statement shell" id="about">
        <p className="section-label">01 — About me</p>

        <div className="statement-content">
          <h2>
            Good software is where <em>clarity</em> meets capability.
          </h2>

          <div>
            <p>
              For more than four years at Mesh Web Company, I&apos;ve worked
              across the full product lifecycle—from the data and APIs
              underneath to the interfaces people use every day.
            </p>

            <p>
              I&apos;m at home in complex business applications: turning
              workflows into calm, practical software that teams can rely on.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="work-section" id="work">
        <div className="shell">
          <div className="section-head">
            <p className="section-label">02 — Selected work</p>

            <p className="muted">
              A few systems I&apos;ve helped bring to life.
            </p>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article
                className={`project project-${project.accent}`}
                key={project.title}
              >
                {/* PROJECT IMAGE */}
                <div className="project-visual">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="project-image"
                  />
                </div>

                {/* PROJECT INFO */}
                <div className="project-info">
                  <p className="project-type">
                    {project.type}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Also built: SDM Ingenieurbüro, Physio in Motion, and several
            WordPress websites for international clients.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="capabilities shell">
        <div className="section-head">
          <h2>WHAT I DO</h2>

          <p className="muted">
            End-to-end development, grounded in the needs of the people
            using it.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map(([number, title, text]) => (
            <div className="capability" key={number}>
              <span>{number}</span>

              <h3>{title}</h3>

              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="stack shell">
        <div className="stack-heading">
          <div>
            <h2>TECHNICAL SKILLS</h2>
          </div>
        </div>

        <div className="stack-grid">
          {toolkit.map((item, index) => (
            <article
              className={`tool-card tool-card-${item.tone}`}
              key={item.name}
            >
              <div className="tool-card-top">
                <span className="tool-icon">
                  <ToolkitIcon name={item.icon} />
                </span>

                <span className="tool-index">
                  0{index + 1}
                </span>
              </div>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="tool-tags">
                {item.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <div className="contact-card">
          <p className="contact-kicker">05 — Contact</p>

          <h2 className="contact-title">
            Let&apos;s build something great.
          </h2>

          <p className="contact-intro">
            Have a project, an idea, or a business challenge? I&apos;d love
            to hear about it.
          </p>

          <div className="contact-options">
            <a
              className="contact-option"
              href="mailto:abdylartiola1@gmail.com"
            >
              <span className="contact-icon">✉</span>

              <span>
                <small>Email me</small>
                <b>abdylartiola1@gmail.com</b>
              </span>
            </a>

            <a
              className="contact-option"
              href="https://www.linkedin.com/in/artiole-abdyli"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">in</span>

              <span>
                <small>Connect</small>
                <b>LinkedIn profile ↗</b>
              </span>
            </a>
          </div>

          <a
            className="contact-button"
            href="mailto:abdylartiola1@gmail.com"
          >
            Start a conversation <span>↗</span>
          </a>
        </div>

        <div className="contact-bottom shell">
          <span>© 2026 aabdylidev</span>
          <span>
            Kosovo &amp; Sweden · Available remotely
          </span>
        </div>
      </footer>
    </main>
  );
}