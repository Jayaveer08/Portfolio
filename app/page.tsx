import ThemeToggle from "./theme-toggle";
import Preloader from "./preloader";
import HeroConsole from "./hero-console";
import GooeyNav from "./gooey-nav";
import CustomCursor from "./custom-cursor";
import DepthCarousel from "./depth-carousel";

const projects = [
  {
    no: "01",
    title: "EventVerse",
    type: "Full-stack platform",
    description:
      "Full-stack event ticketing platform with React 18 + TypeScript and Supabase (PostgreSQL + Auth + Realtime), interactive seat map selection, Stripe payment processing, and PDF ticket generation.",
    stack: "React · TypeScript · Supabase · Stripe",
    source: "https://github.com/Jayaveer08/event-verse",
    live: "https://eventverse-lime.vercel.app",
  },
  {
    no: "02",
    title: "TaskTrackr",
    type: "Backend engineering",
    description:
      "Java Spring Boot Task Manager API with MySQL, Spring Security, JWT authentication, BCrypt hashing, REST endpoints for tasks/projects with pagination, and Mockito service-layer unit tests.",
    stack: "Java 17 · Spring Boot · Spring Security · MySQL · JWT",
    source: "https://github.com/Jayaveer08/TaskTrackr",
  },
  {
    no: "03",
    title: "Smart Blog Studio",
    type: "AI-assisted product",
    description:
      "Enterprise-grade Wix-inspired blog editor & publishing studio built with React, Lexical WYSIWYG Framework, FastAPI backend, real-time AI Script Assistant, bubble selection menus, and live site previewing.",
    stack: "React · Lexical · FastAPI · Tailwind · Gemini AI",
    source: "https://github.com/Jayaveer08/Smart-Blog-editor",
    live: "https://smart-blog-editor-eight.vercel.app",
  },
  {
    no: "04",
    title: "Brahmo India Clinical AI",
    type: "Healthcare AI platform",
    description:
      "Clinical decision support system for Indian doctors covering T2DM & CVD with patient-specific AI assistant, Indian drug directory, RSSDI/CSI guidelines, lab report scanner UI, and Supabase integration.",
    stack: "React · TypeScript · Supabase · AI Engine",
    source: "https://github.com/Jayaveer08/brahmo-india-clinical",
    live: "https://brahmo-india-clinical-silk.vercel.app",
  },
  {
    no: "05",
    title: "Moodify",
    type: "Applied AI",
    description:
      "AI-powered music recommendation system that detects mood from voice using Librosa pitch/tempo analysis, Whisper speech recognition, text sentiment analysis, and personalised Spotify recommendations.",
    stack: "Python · Flask · Whisper · Librosa · Spotify API",
    source:
      "https://github.com/Jayaveer08/Moodify-Let-Your-Mood-Choose-the-Music",
    live: "https://moodstream-q4lr.onrender.com/",
  },
  {
    no: "06",
    title: "Dual-Agent AI Assistant",
    type: "Generative AI / RAG",
    description:
      "Multi-agent placement assistant with a FAQ Agent and Placement Agent orchestrated via LangChain, FAISS vector search, and Hugging Face embeddings for retrieval-augmented generation (RAG).",
    stack: "LangChain · FAISS · Hugging Face · FastAPI · React",
    source: "https://github.com/Jayaveer08",
  },
  {
    no: "07",
    title: "TextBrief",
    type: "Natural language processing",
    description:
      "Context-aware abstractive summariser using BART and Hugging Face Transformers, optimised inference pipeline with 88% modal accuracy, deployed as an interactive Streamlit web app.",
    stack: "Python · BART · Hugging Face · Streamlit",
    source: "https://github.com/Jayaveer08/TextBrief",
    live: "https://textbrief.streamlit.app/",
  },
];

const skillGroups = [
  {
    label: "Languages",
    chips: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C"],
  },
  {
    label: "Backend",
    chips: [
      "Spring Boot",
      "Spring Security",
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT",
      "Docker",
    ],
  },
  {
    label: "Frontend",
    chips: ["React", "HTML", "CSS", "Tailwind", "Lexical", "Next.js"],
  },
  {
    label: "AI / ML",
    chips: [
      "Hugging Face",
      "BART",
      "LangChain",
      "FAISS",
      "Gemini API",
      "Whisper",
      "Librosa",
    ],
  },
  {
    label: "Data & Cloud",
    chips: [
      "MySQL",
      "MongoDB",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Vercel",
    ],
  },
  {
    label: "Testing & Tools",
    chips: ["JUnit 5", "Mockito", "Postman", "Swagger UI", "Git"],
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
                  Engineering &amp; Technology. I build scalable backend systems
                  and intelligent AI-powered products — turning complex problems
                  into fast, meaningful, production-ready code.
                </p>
                <p>
                  Strong foundation in DSA, OOP, and SOLID principles — I approach
                  every problem with clarity and precision. I believe the best
                  software is invisible — it just works.
                </p>
                <a
                  className="about-ref-cta"
                  href="mailto:nallapatijayaveer@gmail.com"
                >
                  Get in touch →
                </a>
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
                In a previous <em className="accent-italic">life.</em>
              </h2>
              <span>2025&ndash;2026</span>
            </div>
            <div className="exp-ref-list">
              <article className="exp-ref-row">
                <div className="exp-ref-meta">
                  <span className="exp-ref-no">01</span>
                  <time>May<br/>— July</time>
                </div>
                <div className="exp-ref-body">
                  <h3>AI Intern</h3>
                  <p className="exp-ref-company">SWECHA</p>
                  <ul className="exp-bullets">
                    <li>Built and deployed <strong>TextBrief</strong> — an NLP summarisation tool using BART and Hugging Face Transformers.</li>
                    <li>Optimised the inference pipeline achieving <strong>88% modal accuracy</strong> for high-volume text inputs.</li>
                    <li>Demonstrated the interactive Streamlit application live to <strong>50+ attendees</strong> across technical sessions.</li>
                  </ul>
                  <div className="exp-ref-chips">
                    <span>PYTHON</span>
                    <span>HUGGING FACE</span>
                    <span>NLP</span>
                    <span>STREAMLIT</span>
                  </div>
                </div>

              </article>

              <article className="exp-ref-row">
                <div className="exp-ref-meta">
                  <span className="exp-ref-no">02</span>
                  <time>August<br/>— November</time>
                </div>
                <div className="exp-ref-body">
                  <h3>Technical Lead &amp; Developer</h3>
                  <p className="exp-ref-company">SDC — SREYAS DEVELOPER CONFERENCE</p>
                  <ul className="exp-bullets">
                    <li>Spearheaded technical operations and digital systems across the <strong>Sreyas Developer Conference (SDC) Technical Event</strong>.</li>
                    <li>Managed digital logistics, registration workflows, and platform execution for over <strong>800+ attendees</strong>.</li>
                    <li>Coordinated cross-functional teams to deliver live event streaming, schedule coordination, and technical showcases.</li>
                  </ul>
                  <div className="exp-ref-chips">
                    <span>EVENT MANAGEMENT</span>
                    <span>TECHNICAL LEADERSHIP</span>
                    <span>SYSTEM DEVELOPMENT</span>
                  </div>
                </div>

              </article>

              <article className="exp-ref-row">
                <div className="exp-ref-meta">
                  <span className="exp-ref-no">03</span>
                  <time>February<br/>— April</time>
                </div>
                <div className="exp-ref-body">
                  <h3>Intern</h3>
                  <p className="exp-ref-company">EVOASTRA</p>
                  <ul className="exp-bullets">
                    <li>Completed a <strong>remote engineering internship</strong>, collaborating with development teams to build scalable software solutions.</li>
                    <li>Engineered responsive web interfaces and integrated RESTful API endpoints for client-facing applications.</li>
                    <li>Participated in active code reviews, bug fixes, and feature testing to ensure production code quality.</li>
                  </ul>
                  <div className="exp-ref-chips">
                    <span>SOFTWARE DEVELOPMENT</span>
                    <span>REMOTE INTERNSHIP</span>
                    <span>WEB APPLICATIONS</span>
                  </div>
                </div>

              </article>
            </div>

            {/* Education Strip */}
            <div className="edu-bar">
              <div className="edu-bar-left">
                <span className="edu-bar-label">EDUCATION</span>
                <h3 className="edu-bar-degree">B.Tech in Computer Science &amp; Engineering</h3>
                <span className="edu-bar-specialization">Specialization: Artificial Intelligence &amp; Machine Learning</span>
              </div>
              <div className="edu-bar-right">
                <span className="edu-bar-school">Sreyas Institute of Engineering &amp; Technology</span>
                <span className="edu-bar-year">2023 — 2027</span>
              </div>
            </div>

            {/* Achievements & Certifications */}
            <div className="achievements-ref">
              <div className="achievements-ref-label">— Certifications &amp; Achievements</div>
              <div className="achievements-ref-grid">
                <div>
                  <h4>1st Place — HackFest</h4>
                  <p>Out of 300+ teams · 24-hour hackathon winner</p>
                </div>
                <div>
                  <h4>SDC Technical Organiser</h4>
                  <p>800+ attendees · End-to-end event execution &amp; logistics</p>
                </div>
                <div>
                  <h4>Hackathons, Tech &amp; Sports</h4>
                  <p>Active participant in hackathons, technical events &amp; sports</p>
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
            <a
              className="contact-link"
              href="mailto:nallapatijayaveer@gmail.com"
            >
              nallapatijayaveer@gmail.com <span aria-hidden="true">↗</span>
            </a>
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
