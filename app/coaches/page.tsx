import { Header } from "@/components/Header";
import Link from "next/link";

const coachCogs = [
  {
    title: "Curriculum Intent",
    description:
      "Build shared clarity about what students are expected to know, understand and be able to do.",
    className: "learning",
  },
  {
    title: "Achievement Standards",
    description:
      "Support teachers to interpret the expected standard consistently and identify the quality of evidence students need to demonstrate.",
    className: "learning",
  },
  {
    title: "Assessment Design",
    description:
      "Facilitate collaborative analysis so assessment genuinely preserves curriculum intent and cognitive demand.",
    className: "assessment",
  },
  {
    title: "Marking Guide",
    description:
      "Build shared understanding of progression so teachers can recognise what changes as evidence becomes stronger.",
    className: "assessment",
  },
  {
    title: "Teaching Decisions",
    description:
      "Use curriculum and evidence conversations to help teachers make deliberate decisions about what needs to be taught, modelled and practised.",
    className: "pedagogy",
  },
  {
    title: "Visible Learning",
    description:
      "Support teachers to translate curriculum and quality into learning walls, success indicators and examples students can actually use.",
    className: "pedagogy",
  },
  {
    title: "Evidence of Learning",
    description:
      "Help teachers interpret student evidence, identify patterns and determine what teaching or support is needed next.",
    className: "impact",
  },
  {
    title: "Moderation",
    description:
      "Facilitate professional dialogue that strengthens consistency, shared judgement and collective understanding of quality.",
    className: "impact",
  },
];

export default function CoachesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pathway-hero coach-pathway-hero">
          <div className="container">
            <p className="eyebrow">Instructional Coach / Middle Leader Lens</p>

            <h1>Make the professional reasoning visible so others can use it.</h1>

            <p className="pathway-lead">
              Support teachers to connect curriculum, assessment, teaching and
              evidence with increasing confidence, consistency and independence.
            </p>

            <div className="pathway-principle">
              <strong>For instructional coaches and middle leaders</strong>

              <p>
                The goal is not to become the person who always has the answer.
                Effective instructional leadership builds the capability of
                others to make strong professional decisions for themselves.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The connected system</p>

              <h2>The same eight cogs. A different sphere of influence.</h2>

              <p>
                The framework does not change. What changes is how you use it —
                moving from making decisions for your own classroom to helping
                others strengthen their professional reasoning and practice.
              </p>
            </div>

            <div className="teacher-cog-grid">
              {coachCogs.map((cog, index) => (
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

        <section className="section section-soft">
          <div className="container teacher-pathway-support">
            <div>
              <p className="eyebrow">How does the lens change?</p>

              <h2>Move from doing the work to building capability.</h2>
            </div>

            <div>
              <p>
                <strong>Model it.</strong> Make the professional reasoning visible
                so teachers can see how strong decisions are made.
              </p>

              <p>
                <strong>Coach it.</strong> Use questions, evidence and professional
                dialogue to help teachers strengthen their own thinking.
              </p>

              <p>
                <strong>Build capability.</strong> Create routines and structures
                that allow teams to use the framework independently over time.
              </p>
            </div>
          </div>
        </section>

        <section className="section coach-lens-comparison">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">From teacher practice to instructional leadership</p>

              <h2>Ask a different professional question.</h2>

              <p>
                The same framework can be viewed differently depending on your role.
                The coach or middle leader steps back from the individual decision
                and focuses on how to strengthen the thinking of others.
              </p>
            </div>

            <div className="lens-shift-grid">
              <article className="lens-shift-card">
                <span>Teacher lens</span>
                <h3>What do I need to understand and do?</h3>
              </article>

              <article className="lens-shift-card">
                <span>Coach / Middle Leader lens</span>
                <h3>How do I help others understand, apply and strengthen this?</h3>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">A practical coaching cycle</p>

              <h2>Use the framework to structure professional dialogue.</h2>
            </div>

            <div className="coach-cycle-grid">
              <article className="coach-cycle-card">
                <span>01</span>
                <h3>Clarify</h3>
                <p>
                  What does the curriculum require and what should successful
                  learning look like?
                </p>
              </article>

              <article className="coach-cycle-card">
                <span>02</span>
                <h3>Examine</h3>
                <p>
                  Where is that intent visible in the assessment, marking guide,
                  teaching and student evidence?
                </p>
              </article>

              <article className="coach-cycle-card">
                <span>03</span>
                <h3>Question</h3>
                <p>
                  What professional reasoning led to the current decision and what
                  assumptions need to be tested?
                </p>
              </article>

              <article className="coach-cycle-card">
                <span>04</span>
                <h3>Strengthen</h3>
                <p>
                  What change in planning, teaching, assessment or feedback would
                  have the greatest impact?
                </p>
              </article>

              <article className="coach-cycle-card">
                <span>05</span>
                <h3>Build independence</h3>
                <p>
                  What will help the teacher or team use this reasoning without
                  relying on the coach next time?
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section coach-pathway-cta">
          <div className="container">
            <p className="eyebrow">Framework in Action</p>

            <h2>See how the framework changes through the coaching lens.</h2>

            <p>
              Follow the same professional reasoning journey used in the Teacher
              lens, but focus on modelling thinking, facilitating dialogue and
              building collective capability.
            </p>

           <Link className="button" href="/coaches/framework-in-action">
  Explore the Coach / Middle Leader Framework →
</Link>
          </div>
        </section>
      </main>
    </>
  );
}