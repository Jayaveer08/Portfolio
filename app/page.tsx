import ThemeToggle from "./theme-toggle";
import Preloader from "./preloader";
import HeroConsole from "./hero-console";
import GooeyNav from "./gooey-nav";
import CustomCursor from "./custom-cursor";
import DepthCarousel from "./depth-carousel";
import EmailLink from "./email-link";

const projects = [
  {
    no: "01",
    title: "EventVerse",
    type: "Full-stack platform",
    description:
      "Full-stack event ticketing platform with React, TypeScript and Supabase PostgreSQL Realtime, supporting interactive seat map selection with live availability updates. Integrated Stripe payment processing via Supabase Edge Function with client-side PDF ticket generation.",
    stack: "React · TypeScript · Supabase · Stripe",
    source: "https://github.com/Jayaveer08/event-verse",
    live: "https://eventverse-lime.vercel.app",
  },
  {
    no: "02",
    title: "Smart Blog Studio",
    type: "Full-stack platform",
    description:
      "Production-grade full-stack blog platform REST endpoints with a FastAPI backend and React/Lexical rich-text editor frontend, applying OOP and modular software design; secured with JWT auth and MongoDB persistence. Configured CI/CD via GitHub Actions with Pytest tests.",
    stack: "Python · FastAPI · MongoDB · JWT · Gemini API · Docker · React",
    source: "https://github.com/Jayaveer08/Smart-Blog-editor",
    live: "https://smart-blog-editor-eight.vercel.app",
  },
  {
    no: "03",
    title: "TaskTrackr",
    type: "Backend engineering",
    description:
      "Full-stack task management REST API built with Java and Spring Boot, implementing JWT-based authentication, role-aware CRUD endpoints, pagination, and Swagger-documented API contracts. Verified with JUnit5 and Mockito unit/integration test suites.",
    stack: "Java · Spring Boot · JPQL · RBAC · JWT · JUnit5 · Mockito",
    source: "https://github.com/Jayaveer08/TaskTrackr",
  },
  {
    no: "04",
    title: "Supply Chain Demand Predictor",
    type: "Machine learning & backend",
    description:
      "Real-world sales demand forecasting system enabling businesses to forecast demand in real time, powered by three ML models behind a Python FastAPI backend with an interactive Streamlit frontend.",
    stack: "Python · FastAPI · Streamlit · Machine Learning",
    source: "https://github.com/Jayaveer08",
  },
  {
    no: "05",
    title: "TextBrief",
    type: "Natural language processing",
    description:
      "End-to-end Python NLP text-summarization pipeline using Hugging Face Transformer models (BART), applying model evaluation and complexity trade-offs to deliver context-aware abstractive summaries on long-form input, deployed on Streamlit.",
    stack: "Python · BART · Hugging Face · Streamlit",
    source: "https://github.com/Jayaveer08/TextBrief",
    live: "https://textbrief.streamlit.app/",
  },
  {
    no: "06",
    title: "Brahmo India Clinical AI",
    type: "Healthcare AI platform",
    description:
      "Clinical decision support system for Indian doctors covering T2DM & CVD with patient-specific AI assistant, Indian drug directory, RSSDI/CSI guidelines, lab report scanner UI, and Supabase integration.",
    stack: "React · TypeScript · Supabase · AI Engine",
    source: "https://github.com/Jayaveer08/brahmo-india-clinical",
    live: "https://brahmo-india-clinical-silk.vercel.app",
  },
  {
    no: "07",
    title: "Dual-Agent AI Assistant",
    type: "Generative AI / RAG",
    description:
      "Multi-agent placement assistant with FAQ and Placement agents orchestrated via LangChain, FAISS vector search, and Hugging Face embeddings for retrieval-augmented generation (RAG).",
    stack: "LangChain · FAISS · Hugging Face · FastAPI · React",
    source: "https://github.com/Jayaveer08",
  },
];

const skillGroups = [
  {
    label: "Languages",
    chips: ["Python", "Java", "C", "TypeScript", "JavaScript", "SQL"],
  },
  {
    label: "Core CS",
    chips: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Complexity Analysis",
      "System Design",
    ],
  },
  {
    label: "Backend",
    chips: [
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "JWT Auth",
      "Spring Security",
      "Flask",
    ],
  },
  {
    label: "Web & Frontend",
    chips: [
      "React",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Next.js",
      "Lexical",
    ],
  },
  {
    label: "Databases",
    chips: ["SQL", "MongoDB", "Supabase PostgreSQL", "MySQL"],
  },
  {
    label: "Testing & QA",
    chips: [
      "Pytest",
      "JUnit 5",
      "Mockito",
      "Test Plan Development",
      "QA Practices",
    ],
  },
  {
    label: "DevOps & Tools",
    chips: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Swagger UI",
      "Vercel",
    ],
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Preloader />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="Jayaveer Nallapati, home"
        >
          JN
        </a>
        <GooeyNav />
        <div className="header-tools">
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        {/* ── 01 INTRO ── */}
        <section className="intro-clean" id="top" aria-labelledby="intro-title">
          <HeroConsole />
        </section>

        {/* ── 02 ABOUT ── */}
        <section className="about-ref" id="about" aria-labelledby="about-title">
          <div className="about-ref-inner section-shell">
            <div className="about-ref-label">— Identity &amp; Mission</div>
            <div className="about-ref-grid">
              <div className="about-ref-left">
                <h2 id="about-title">
                  Building with{" "}
                  <em className="accent-italic">purpose</em>{" "}and{" "}
                  <em className="accent-italic">precision.</em>
                </h2>
                <p>
                  I&apos;m Jayaveer Nallapati, a final-year B.Tech Computer
                  Science (AI &amp; ML) student at Sreyas Institute of
                  Engineering and Technology (CGPA: 9.06). Experienced in building,
                  testing, and debugging full-stack and backend systems in Python,
                  FastAPI, and Java/Spring Boot.
                </p>
                <p>
                  Strong foundation in data structures, algorithms, object-oriented design,
                  and complexity analysis with hands-on exposure to REST API design,
                  relational &amp; NoSQL databases, and QA practices like Pytest and JUnit.
                  Comfortable translating ambiguous requirements into working solutions
                  in agile, product-driven teams.
                </p>
                <EmailLink
                  className="about-ref-cta"
                  copiedText="Opening Gmail... ✓"
                >
                  Get in touch →
                </EmailLink>
              </div>

              {/* Engineering Methodology Flowchart: THINK → BUILD → IMPROVE */}
              <div className="eng-methodology-card">
                <div className="eng-card-header">
                  <span className="eng-pulse-dot" />
                  <span className="eng-kicker">ENGINEERING METHODOLOGY</span>
                </div>

                <div className="eng-flow-steps">
                  {/* Step 1: Think */}
                  <div className="eng-step">
                    <div className="eng-step-content">
                      <div className="eng-step-top">
                        <span className="eng-no">01</span>
                        <h3 className="eng-title">THINK</h3>
                      </div>
                      <span className="eng-tag">Architecture &amp; Design</span>
                    </div>
                  </div>

                  <div className="eng-connector">
                    <span className="eng-line" />
                  </div>

                  {/* Step 2: Build */}
                  <div className="eng-step">
                    <div className="eng-step-content">
                      <div className="eng-step-top">
                        <span className="eng-no">02</span>
                        <h3 className="eng-title">BUILD</h3>
                      </div>
                      <span className="eng-tag">Clean Implementation</span>
                    </div>
                  </div>

                  <div className="eng-connector">
                    <span className="eng-line" />
                  </div>

                  {/* Step 3: Improve */}
                  <div className="eng-step">
                    <div className="eng-step-content">
                      <div className="eng-step-top">
                        <span className="eng-no">03</span>
                        <h3 className="eng-title">IMPROVE</h3>
                      </div>
                      <span className="eng-tag">Performance &amp; Scale</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 03 WORK ── */}
        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-shell work-head">
            <div className="section-tag">
              <strong>03</strong>
              <span>/ Selected work</span>
            </div>
            <h2 id="work-title">
              Things I&apos;ve
              <br />
              made work.
            </h2>
            <p>
              Seven products across full-stack engineering, backend systems, and
              applied AI/ML.
            </p>
          </div>
          <div className="section-shell" style={{ marginTop: "3rem" }}>
            <DepthCarousel projects={projects} />
          </div>
        </section>

        {/* ── 04 EXPERIENCE ── */}
        <section className="exp-ref" id="experience" aria-labelledby="exp-title">
          <div className="section-shell">
            <div className="exp-ref-head">
              <h2 id="exp-title">
                Experience &amp; <em className="accent-italic">Background.</em>
              </h2>
              <span>2024&ndash;2026</span>
            </div>
            <div className="exp-ref-list">
              <article className="exp-ref-row">
                <div className="exp-ref-meta">
                  <span className="exp-ref-no">01</span>
                  <time>May<br/>— July</time>
                </div>
                <div className="exp-ref-body">
                  <h3>Software Development Intern</h3>
                  <p className="exp-ref-company">SWECHA · TELANGANA, INDIA</p>
                  <ul className="exp-bullets">
                    <li>Designed and built <strong>TextBrief</strong>, an end-to-end Python NLP text-summarization pipeline using Hugging Face Transformer models (BART), applying model evaluation and complexity trade-offs to deliver context-aware abstractive summaries on long-form input.</li>
                    <li>Deployed as an interactive Streamlit web app; demonstrated to <strong>50+ users</strong> across internship sessions with real-time inference on variable-length documents.</li>
                    <li>Optimized the Hugging Face inference pipeline for throughput and quality by removing redundant tokenization steps and benchmarking output across input-length thresholds.</li>
                  </ul>
                  <div className="exp-ref-chips">
                    <span>PYTHON</span>
                    <span>NLP (BART)</span>
                    <span>HUGGING FACE</span>
                    <span>STREAMLIT</span>
                    <span>PIPELINE OPTIMIZATION</span>
                  </div>
                </div>
              </article>

              <article className="exp-ref-row">
                <div className="exp-ref-meta">
                  <span className="exp-ref-no">02</span>
                  <time>February<br/>— April</time>
                </div>
                <div className="exp-ref-body">
                  <h3>Software Development Intern</h3>
                  <p className="exp-ref-company">EVOASTRA · TELANGANA, INDIA</p>
                  <ul className="exp-bullets">
                    <li>Built a real-world <strong>Supply Chain Demand Prediction System</strong> enabling businesses to forecast sales demand in real time, powered by three ML models behind a Python FastAPI backend with a Streamlit frontend.</li>
                    <li>Participated in requirement gathering, system design discussions, testing, and validation across the SDLC, ensuring data accuracy through structured reporting and QA checks in an agile team.</li>
                  </ul>
                  <div className="exp-ref-chips">
                    <span>PYTHON</span>
                    <span>FASTAPI</span>
                    <span>MACHINE LEARNING</span>
                    <span>STREAMLIT</span>
                    <span>SDLC &amp; QA</span>
                  </div>
                </div>
              </article>

              <article className="exp-ref-row">
                <div className="exp-ref-meta">
                  <span className="exp-ref-no">03</span>
                  <time>Technical Lead<br/>&amp; Organizer</time>
                </div>
                <div className="exp-ref-body">
                  <h3>Technical Lead &amp; Event Organizer</h3>
                  <p className="exp-ref-company">SDG / DEVELOPER WORKSHOPS</p>
                  <ul className="exp-bullets">
                    <li>Organized the SDG technical event and led developer workshops reaching <strong>800+ attendees</strong> across multiple sessions.</li>
                    <li>Managed end-to-end technical planning, logistics, digital workflows, and coordination across student developer teams.</li>
                  </ul>
                  <div className="exp-ref-chips">
                    <span>TECHNICAL LEADERSHIP</span>
                    <span>WORKSHOPS</span>
                    <span>EVENT ARCHITECTURE</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Education Strip */}
            <div className="edu-bar">
              <div className="edu-bar-left">
                <span className="edu-bar-label">EDUCATION</span>
                <h3 className="edu-bar-degree">Bachelor of Technology - Computer Science And Engineering</h3>
                <span className="edu-bar-specialization">Specialization: Artificial Intelligence &amp; Machine Learning (AI&amp;ML) · CGPA: 9.06</span>
              </div>
              <div className="edu-bar-right">
                <span className="edu-bar-school">Sreyas Institute of Engineering and Technology</span>
                <span className="edu-bar-year">2023 — 2027 · Telangana, India</span>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="achievements-ref">
              <div className="achievements-ref-label">— Achievements &amp; Highlights</div>
              <div className="achievements-ref-grid">
                <div>
                  <h4>1st Place — HackFest Winner</h4>
                  <p>Secured 1st place out of 300+ teams, designing and deploying a full-stack web application under a 24-hour time constraint.</p>
                </div>
                <div>
                  <h4>SDG Technical Event &amp; Workshops</h4>
                  <p>Organized technical events and developer workshops reaching 800+ attendees with end-to-end planning and logistics.</p>
                </div>
                <div>
                  <h4>AI/ML Prototypes &amp; Projects</h4>
                  <p>Building hackathon prototypes, production-grade APIs, and exploring cutting-edge AI/ML models.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 05 SKILLS ── */}
        <section className="skills" id="skills" aria-labelledby="skills-title">
          <div className="section-shell skills-inner">
            <div className="skills-head">
              <div className="section-tag">
                <strong>05</strong>
                <span>/ Toolkit</span>
              </div>
              <h2 id="skills-title">
                Built across
                <br />
                the whole stack.
              </h2>
              <p className="skills-sub">
                Languages, frameworks, and tools I reach for when building
                products.
              </p>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <span className="skill-group-label">{group.label}</span>
                  <div className="skill-chips">
                    {group.chips.map((chip) => (
                      <span className="skill-chip" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 06 CONTACT ── */}
        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-mark" aria-hidden="true">
            JN
          </div>
          <div className="section-shell contact-inner">
            <div className="section-tag">
              <strong>06</strong>
              <span>/ Contact</span>
            </div>
            <p>Have a role, project, or useful problem?</p>
            <h2 id="contact-title">
              Let&apos;s make
              <br />
              it work.
            </h2>
            <EmailLink
              className="contact-link"
              copiedText="Email copied! Opening Gmail... ↗"
            >
              nallapatijayaveer@gmail.com <span aria-hidden="true">↗</span>
            </EmailLink>
            <div className="contact-socials">
              <a href="tel:+919949703104" className="contact-social-link" aria-label="Call Jayaveer">
                +91 99497 03104 <span aria-hidden="true">↗</span>
              </a>
              <a href="https://github.com/Jayaveer08" target="_blank" rel="noreferrer" className="contact-social-link">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.linkedin.com/in/jayaveer-nallapati/" target="_blank" rel="noreferrer" className="contact-social-link">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://leetcode.com/u/Jayaveer31/" target="_blank" rel="noreferrer" className="contact-social-link">
                LeetCode <span aria-hidden="true">↗</span>
              </a>
            </div>
            <footer>
              <span>© 2026 Jayaveer Nallapati</span>
              <span>Telangana, India</span>
              <div>
                <a href="https://github.com/Jayaveer08" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/jayaveer-nallapati/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://leetcode.com/u/Jayaveer31/" target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}