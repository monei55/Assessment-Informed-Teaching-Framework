import Link from "next/link";
import { Header } from "@/components/Header";

const leaderCogs = [
  {
    title: "Curriculum Intent",
    description:
      "Establish shared expectations for how curriculum intent is understood and enacted across the school.",
    className: "learning",
  },
  {
    title: "Achievement Standards",
    description:
      "Build consistency in how teachers interpret the expected standard and recognise quality across classrooms and year levels.",
    className: "learning",
  },
  {
    title: "Assessment Design",
    description:
      "Ensure assessment processes preserve curriculum intent, cognitive demand and opportunities for students to demonstrate the full progression.",
    className: "assessment",
  },
  {
    title: "Marking Guide",
    description:
      "Ensure teachers have clear tools, shared language and collaborative processes for making defensible judgements.",
    className: "assessment",
  },
  {
    title: "Teaching Decisions",
    description:
      "Create the conditions for curriculum, assessment and evidence to inform deliberate and responsive teaching decisions.",
    className: "pedagogy",
  },
  {
    title: "Visible Learning",
    description:
      "Develop shared expectations for making learning, quality and progression visible and useful to students.",
    className: "pedagogy",
  },
  {
    title: "Evidence of Learning",
    description:
      "Use multiple sources of evidence to understand the impact of teaching and identify where improvement is needed.",
    className: "impact",
  },
  {
    title: "Moderation",
    description:
      "Establish structures that strengthen collective understanding, consistency and confidence in professional judgement.",
    className: "impact",
  },
];

const leadershipActions = [
  {
    number: "01",
    title: "Align it",
    description:
      "Establish shared expectations, language and processes so curriculum, assessment, teaching and evidence are connected across the school.",
  },
  {
    number: "02",
    title: "Enable it",
    description:
      "Provide the time, structures, professional learning, resources and leadership support teachers need to use the framework well.",
  },
  {
    number: "03",
    title: "Monitor impact",
    description:
      "Use implementation evidence and student learning evidence to determine whether the system is strengthening teaching and improving outcomes.",
  },
];

const leadershipCycle = [
  {
    number: "01",
    title: "Clarify",
    description:
      "What are our shared expectations for curriculum, assessment, teaching and evidence?",
  },
  {
    number: "02",
    title: "Look",
    description:
      "What evidence tells us how consistently those expectations are understood and enacted?",
  },
  {
    number: "03",
    title: "Diagnose",
    description:
      "Is the issue one of clarity, capability, time, resources, process or leadership support?",
  },
  {
    number: "04",
    title: "Respond",
    description:
      "What leadership action will address the cause rather than simply treating the visible symptom?",
  },
  {
    number: "05",
    title: "Monitor impact",
    description:
      "What evidence will tell us whether the response strengthened practice and improved student learning?",
  },
];

export default function LeadersPage() {
  return (
    <>
      <Header />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="pathway-hero leader-pathway-hero">
          <div className="container">
            <p className="eyebrow">Principal / School Leader Lens</p>

            <h1>
              Create the conditions for strong practice to happen consistently.
            </h1>

            <p className="pathway-lead">
              Align expectations, enable professional capability and monitor
              impact so curriculum, assessment, teaching and evidence operate as
              one connected school-wide system.
            </p>

            <div className="pathway-principle">
              <strong>For principals and school leaders</strong>

              <p>
                The role of the school leader is not to personally do every part
                of the framework. It is to ensure the conditions, capability and
                systems exist for the work to happen well across the school.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            THE EIGHT COGS
        ====================================================== */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The connected system</p>

              <h2>
                The same eight cogs. A school-wide sphere of influence.
              </h2>

              <p>
                The framework remains the same. The leadership lens looks across
                classrooms, teams and processes to determine whether the cogs are
                aligned, supported and working together consistently.
              </p>
            </div>

            <div className="teacher-cog-grid">
              {leaderCogs.map((cog, index) => (
                <article
                  className={`teacher-cog-card ${cog.className}`}
                  key={cog.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div>
                    <h3>{cog.title}</h3>
                    <p>{cog.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            ALIGN / ENABLE / MONITOR
        ====================================================== */}

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">How does the lens change?</p>

              <h2>
                Move from individual practice to coherence, capability and
                impact.
              </h2>

              <p>
                School leadership creates the conditions in which strong
                professional reasoning can become consistent practice rather
                than depending on individual teachers or leaders.
              </p>
            </div>

            <div className="leader-action-grid">
              {leadershipActions.map((action) => (
                <article className="leader-action-card" key={action.title}>
                  <span>{action.number}</span>

                  <h3>{action.title}</h3>

                  <p>{action.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            THREE LENSES
        ====================================================== */}

        <section className="section leader-lens-comparison">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">How the lens shifts</p>

              <h2>
                The framework stays constant. The professional question changes.
              </h2>

              <p>
                Each role views the same connected system from a different sphere
                of influence.
              </p>
            </div>

            <div className="leader-lens-shift-grid">
              <article className="leader-lens-shift-card">
                <span>Teacher Lens</span>

                <h3>What do I need to understand and do?</h3>

                <p>
                  Use curriculum, assessment and evidence to make deliberate
                  decisions about teaching and learning.
                </p>
              </article>

              <article className="leader-lens-shift-card">
                <span>Coach / Middle Leader Lens</span>

                <h3>
                  How do I help others understand, apply and strengthen this?
                </h3>

                <p>
                  Make professional reasoning visible and build the capability of
                  others to use it independently.
                </p>
              </article>

              <article className="leader-lens-shift-card">
                <span>Principal / School Leader Lens</span>

                <h3>
                  How do I create the conditions for this to happen consistently?
                </h3>

                <p>
                  Align expectations, enable capability and monitor whether the
                  connected system is improving practice and learning.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            PRACTICAL LEADERSHIP CYCLE
        ====================================================== */}

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A practical leadership cycle</p>

              <h2>Move from visibility to informed action.</h2>

              <p>
                School leaders need enough visibility of the connected system to
                know where support, capability building or structural change will
                have the greatest impact.
              </p>
            </div>

            <div className="leader-cycle-grid">
              {leadershipCycle.map((step) => (
                <article className="leader-cycle-card" key={step.number}>
                  <span>{step.number}</span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            SYSTEM CONDITIONS
        ====================================================== */}

        <section className="section leader-system-check">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A leadership question</p>

              <h2>
                What would need to be true for this work to happen well in every
                classroom?
              </h2>

              <p>
                Rather than relying on individual expertise, consider the
                conditions that make strong practice possible and sustainable.
              </p>
            </div>

            <div className="leader-system-grid">
              <article>
                <span>Shared clarity</span>

                <h3>Do we have common expectations?</h3>

                <p>
                  Teachers understand the curriculum, cognitive demand,
                  progression of quality and agreed approaches.
                </p>
              </article>

              <article>
                <span>Capability</span>

                <h3>Do people know how to do the work?</h3>

                <p>
                  Professional learning, modelling, coaching and collaboration
                  deliberately build the required expertise.
                </p>
              </article>

              <article>
                <span>Structures</span>

                <h3>Have we made the work possible?</h3>

                <p>
                  Time, planning processes, moderation routines and resources
                  support the expected practice.
                </p>
              </article>

              <article>
                <span>Evidence</span>

                <h3>How will we know it is working?</h3>

                <p>
                  Leaders examine implementation and student learning evidence
                  and use it to determine the next improvement response.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            FRAMEWORK IN ACTION CTA
        ====================================================== */}

        <section className="section section-soft leader-pathway-cta">
          <div className="container">
            <p className="eyebrow">Framework in Action</p>

            <h2>
              Examine the connected system through the leadership lens.
            </h2>

            <p>
              Follow the same framework used in the Teacher and Coach / Middle
              Leader lenses, but focus on alignment, enabling conditions,
              collective capability and impact.
            </p>

            <Link
              className="button"
              href="/leaders/framework-in-action"
            >
              Explore the Principal / School Leader Framework →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}