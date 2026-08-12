import { FrameworkCycle } from "@/components/FrameworkCycle";
import { Header } from "@/components/Header";
import { QuestionCard } from "@/components/QuestionCard";
import { RolePathways } from "@/components/layout/RolePathways";

const clarityLenses = [
  {
    number: "01",
    title: "Learning Clarity",
    question: "What are students expected to learn?",
    description:
      "Understand the curriculum intent, achievement standard, cognitive demand and essential learning.",
    tone: "learning" as const,
  },
  {
    number: "02",
    title: "Assessment Clarity",
    question: "How will students demonstrate successful learning?",
    description:
      "Understand what quality looks like and ensure assessment provides genuine opportunities to demonstrate it.",
    tone: "assessment" as const,
  },
  {
    number: "03",
    title: "Pedagogical Clarity",
    question: "What will best support this cohort to succeed?",
    description:
      "Design responsive learning experiences that maintain high expectations while addressing diverse needs.",
    tone: "pedagogy" as const,
  },
  {
    number: "04",
    title: "Impact Clarity",
    question: "What is the evidence telling us?",
    description:
      "Interpret evidence, evaluate impact and determine the next instructional response.",
    tone: "impact" as const,
  },
];

const startingPoints = [
  {
    icon: "01",
    title: "Unpack a Unit",
    description:
      "Understand curriculum intent, the achievement standard and what students must learn.",
    href: "#learning",
    tone: "learning",
  },
  {
    icon: "02",
    title: "Improve an Assessment",
    description:
      "Check alignment, accessibility, cognitive demand and opportunities for students to demonstrate success.",
    href: "#assessment",
    tone: "assessment",
  },
  {
    icon: "03",
    title: "Make Learning Visible",
    description:
      "Develop learning walls, success criteria, exemplars and bump-it-up continua with greater clarity.",
    href: "#visible-learning",
    tone: "pedagogy",
  },
  {
    icon: "04",
    title: "Strengthen Moderation",
    description:
      "Build confidence in interpreting marking guides and making consistent professional judgements.",
    href: "#walkthroughs",
    tone: "impact",
  },
  {
    icon: "05",
    title: "Coach and Lead Others",
    description:
      "Use professional questions that build capability rather than check compliance.",
    href: "#professional-use",
    tone: "leadership",
  },
  {
    icon: "06",
    title: "Explore the Complete Model",
    description:
      "See how curriculum, assessment, pedagogy, evidence and student success operate as one connected system.",
    href: "#framework",
    tone: "framework",
  },
];

const walkthroughs = [
  {
    label: "Classroom Walkthrough",
    title: "From achievement standard to learning wall",
    description:
      "Follow the reasoning used to unpack intended learning and make success visible for students.",
  },
  {
    label: "Assessment Walkthrough",
    title: "Making an assessment more accessible",
    description:
      "See how irrelevant barriers can be removed without reducing the intended cognitive demand.",
  },
  {
    label: "Moderation Walkthrough",
    title: "Understanding quality before marking",
    description:
      "Use the marking guide before teaching to clarify what students must demonstrate at each level.",
  },
  {
    label: "Leadership Walkthrough",
    title: "Coaching professional reasoning",
    description:
      "Explore questions leaders can use to deepen planning, assessment and teaching conversations.",
  },
];

const toolkitItems = [
  {
    title: "Department Resources",
    description:
      "Find relevant guidance and understand where it supports the reasoning process.",
  },
  {
    title: "Planning Tools",
    description:
      "Use concise prompts and templates to unpack units and design aligned learning.",
  },
  {
    title: "Assessment Tools",
    description:
      "Check alignment, accessibility, cognitive demand and evidence of success.",
  },
  {
    title: "Visible Learning Tools",
    description:
      "Develop purposeful learning walls, exemplars and bump-it-up resources.",
  },
  {
    title: "Coaching Questions",
    description:
      "Support teachers and leaders to reason through important professional decisions.",
  },
  {
    title: "Reflection Tools",
    description:
      "Identify where clarity is strong and where further capability needs to be developed.",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy hero-reveal">
              <p className="eyebrow">
                Assessment Informed Teaching Framework
              </p>

              <h1>Better instructional decisions begin with clarity.</h1>

              <p className="hero-subtitle">
                A Professional Reasoning Model for Developing Educator
                Capability
              </p>

              <p className="hero-lead">
                Connect curriculum, assessment, pedagogy and evidence through
                one coherent model that strengthens professional capability
                and improves learning for every student.
              </p>

              <div className="hero-actions">
                <a className="button" href="#strengthen">
                  Start Your Professional Journey
                </a>

                <a className="button button-secondary" href="#framework">
                  Explore the Connected Model
                </a>
              </div>

              <div
                className="hero-meta"
                aria-label="Designed for professional use"
              >
                <span>Teachers</span>
                <span>Instructional Coaches</span>
                <span>School Leaders</span>
                <span>Professional Learning Teams</span>
              </div>
            </div>

            <div className="cycle-reveal">
              <FrameworkCycle />
            </div>
          </div>
        </section>

        {/* PURPOSE */}
        <section className="section purpose-section">
          <div className="container purpose-grid">
            <div>
              <p className="eyebrow">Why this framework exists</p>

              <h2>Professional reasoning is rarely taught explicitly.</h2>
            </div>

            <div className="purpose-copy">
              <p>
                Educators are expected to unpack curriculum, design assessment,
                plan teaching, interpret evidence and respond to student need.
              </p>

              <p>
                This framework makes that connected thinking visible so it can
                be learned, practised and refined.
              </p>

              <div className="key-takeaway">
                <strong>Key takeaway</strong>
                <p>
                  The framework does not provide answers for educators. It
                  develops educators who can make sound decisions for their own
                  students, curriculum and context.
                </p>
              </div>
            </div>
          </div>
        </section>

<RolePathways />

        {/* SELF-SELECTION */}
        <section className="section section-soft" id="strengthen">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Choose your starting point</p>

              <h2>What would you like to strengthen today?</h2>

              <p>
                Begin with the professional challenge in front of you. The
                framework will help you connect it to the wider reasoning
                process.
              </p>
            </div>

            <div className="starting-grid">
              {startingPoints.map((item) => (
                <a
                  className={`starting-card ${item.tone}`}
                  href={item.href}
                  key={item.title}
                >
                  <span className="starting-number">{item.icon}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <span className="starting-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTED MODEL */}
        <section className="section section-dark" id="framework">
          <div className="container split-grid">
            <div>
              <p className="eyebrow eyebrow-light">
                The Professional Reasoning Model
              </p>

              <h2>Every component influences the next.</h2>

              <p>
                Curriculum intent, achievement standards, assessment, marking
                guides, teaching decisions, visible learning, evidence and
                moderation operate as one connected system.
              </p>

              <p>
                When one component becomes clearer, the whole system becomes
                stronger. When one is overlooked, students&apos; opportunities
                to experience success can be reduced.
              </p>

              <a className="text-link" href="#clarity-lenses">
                Explore the four clarity lenses →
              </a>
            </div>

            <div className="reasoning-path">
              <div className="reasoning-step learning">
                <span>01</span>
                <div>
                  <strong>Understand the intended learning</strong>
                  <small>
                    Begin with curriculum intent and the achievement standard.
                  </small>
                </div>
              </div>

              <div className="reasoning-step assessment">
                <span>02</span>
                <div>
                  <strong>Clarify successful learning</strong>
                  <small>
                    Analyse the assessment task and marking guide before
                    teaching.
                  </small>
                </div>
              </div>

              <div className="reasoning-step pedagogy">
                <span>03</span>
                <div>
                  <strong>Design for this cohort</strong>
                  <small>
                    Select teaching approaches that provide equitable access to
                    success.
                  </small>
                </div>
              </div>

              <div className="reasoning-step impact">
                <span>04</span>
                <div>
                  <strong>Interpret evidence and respond</strong>
                  <small>
                    Use evidence to improve teaching and begin the next cycle.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR LENSES */}
        <section className="section" id="clarity-lenses">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Four connected lenses</p>

              <h2>One professional challenge. Four ways of thinking.</h2>

              <p>
                The clarity lenses are not separate modules. They work together
                whenever educators plan, teach, assess, moderate and respond.
              </p>
            </div>

            <div className="question-grid">
              {clarityLenses.map((lens) => (
                <QuestionCard key={lens.number} {...lens} />
              ))}
            </div>
          </div>
        </section>

        {/* VISIBLE LEARNING */}
        <section className="section visible-section" id="visible-learning">
          <div className="container visible-grid">
            <div>
              <p className="eyebrow">From clarity to visible learning</p>

              <h2>Make learning and quality visible for students.</h2>

              <p>
                Learning walls and bump-it-up walls become powerful when they
                are built from a clear understanding of curriculum, assessment
                and quality.
              </p>

              <div className="key-takeaway">
                <strong>Key takeaway</strong>
                <p>
                  The wall is not the strategy. The professional clarity behind
                  it gives the wall instructional value.
                </p>
              </div>
            </div>

            <div className="visible-steps">
              <article>
                <span>01</span>
                <div>
                  <h3>Make the learning visible</h3>
                  <p>
                    Clarify learning intentions, key terminology, progression
                    and cognitive demand.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Make quality visible</h3>
                  <p>
                    Use criteria, exemplars and annotated work to show what
                    successful learning looks like.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Make improvement visible</h3>
                  <p>
                    Help students identify where they are and what they need to
                    do next.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WALKTHROUGHS */}
        <section className="section section-soft" id="walkthroughs">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Real professional examples</p>

              <h2>See the reasoning, not just the finished product.</h2>

              <p>
                Professional Walkthroughs show how educators reason through
                authentic curriculum, assessment, teaching and leadership
                decisions.
              </p>
            </div>

            <div className="walkthrough-grid">
              {walkthroughs.map((walkthrough) => (
                <article className="walkthrough-card" key={walkthrough.title}>
                  <span>{walkthrough.label}</span>
                  <h3>{walkthrough.title}</h3>
                  <p>{walkthrough.description}</p>

                  <a href="#">
                    Explore walkthrough
                    <span aria-hidden="true"> →</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROFESSIONAL USE */}
        <section className="section" id="professional-use">
          <div className="container professional-use-grid">
            <div>
              <p className="eyebrow">For every educator</p>

              <h2>Learn it. Apply it. Coach it. Lead it.</h2>

              <p>
                The reasoning process remains consistent. The depth and purpose
                change according to the professional context.
              </p>
            </div>

            <div className="professional-use-list">
              <div>
                <strong>Learn</strong>
                <p>Build understanding of the connected reasoning process.</p>
              </div>

              <div>
                <strong>Apply</strong>
                <p>Use the process during planning, teaching and assessment.</p>
              </div>

              <div>
                <strong>Coach</strong>
                <p>Guide reflective conversations that strengthen capability.</p>
              </div>

              <div>
                <strong>Lead</strong>
                <p>
                  Establish coherent whole-school approaches without reducing
                  the work to compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLKIT */}
        <section className="section toolkit-section" id="tools">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Professional toolkit</p>

              <h2>Use resources at the point they strengthen reasoning.</h2>

              <p>
                Tools and Department resources will be connected to the part of
                the process where they are most useful.
              </p>
            </div>

            <div className="toolkit-grid">
              {toolkitItems.map((item, index) => (
                <a className="toolkit-card" href="#" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <em aria-hidden="true">→</em>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section final-cta" id="about">
          <div className="container">
            <p className="eyebrow eyebrow-light">
              Professional reasoning develops through deliberate practice
            </p>

            <h2>Every instructional decision shapes a student&apos;s opportunity to learn.</h2>

            <p>
              Strengthen the reasoning behind those decisions and build the
              professional capability to respond with clarity and confidence.
            </p>

            <a className="button button-light" href="#strengthen">
              Choose Your Starting Point
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>Assessment Informed Teaching Framework</strong>
            <p>
              A Professional Reasoning Model for Developing Educator Capability
            </p>
          </div>

          <p>
            Professional Reasoning · Professional Capability · Better
            Instructional Decisions · Student Success
          </p>
        </div>
      </footer>
    </>
  );
}