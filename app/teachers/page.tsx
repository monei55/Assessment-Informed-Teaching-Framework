import { Header } from "@/components/Header";

const teacherCogs = [
  {
    title: "Curriculum Intent",
    description:
      "Understand what students are expected to know, understand and be able to do.",
    className: "learning",
  },
  {
    title: "Achievement Standards",
    description:
      "Clarify the expected standard of learning and the quality students need to demonstrate.",
    className: "learning",
  },
  {
    title: "Assessment Design",
    description:
      "Ensure students have a genuine opportunity to demonstrate the intended learning.",
    className: "assessment",
  },
  {
    title: "Marking Guide",
    description:
      "Understand what quality looks like and what distinguishes levels of performance.",
    className: "assessment",
  },
  {
    title: "Teaching Decisions",
    description:
      "Design learning for this cohort while maintaining the intended curriculum demand.",
    className: "pedagogy",
  },
  {
    title: "Visible Learning",
    description:
      "Make learning, quality and improvement clear and accessible to students.",
    className: "pedagogy",
  },
  {
    title: "Evidence of Learning",
    description:
      "Gather and interpret evidence to understand where students are and what they need next.",
    className: "impact",
  },
  {
    title: "Moderation",
    description:
      "Use shared professional understanding to make consistent and defensible judgements.",
    className: "impact",
  },
];

export default function TeachersPage() {
  return (
    <>
      <Header />

      <main>
        <section className="pathway-hero teacher-pathway-hero">
          <div className="container">
            <p className="eyebrow">Teacher Pathway</p>

            <h1>Strengthen the thinking behind your teaching.</h1>

            <p className="pathway-lead">
              Use the framework to connect curriculum, assessment, teaching,
              evidence and student success with greater clarity and confidence.
            </p>

            <div className="pathway-principle">
              <strong>For teachers</strong>
              <p>
                The goal is not to complete eight separate steps. It is to
                understand how eight interconnected parts of professional
                practice work together every time you plan, teach, assess and
                respond to learning.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">The connected system</p>

              <h2>Eight cogs. One purpose.</h2>

              <p>
                Each cog can be explored independently, but none operates in
                isolation. Strengthening one area should strengthen the decisions
                connected to it.
              </p>
            </div>

            <div className="teacher-cog-grid">
              {teacherCogs.map((cog, index) => (
                <article
                  className={`teacher-cog-card ${cog.className}`}
                  key={cog.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <div>
                    <h3>{cog.title}</h3>
                    <p>{cog.description}</p>
                  </div>

                  <em aria-hidden="true"></em>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container teacher-pathway-support">
            <div>
              <p className="eyebrow">Where should I begin?</p>

              <h2>Start with the professional decision in front of you.</h2>
            </div>

            <div>
              <p>
                Planning a new unit? Begin with <strong>Curriculum Intent</strong>.
              </p>

              <p>
                Reviewing an assessment? Enter through{" "}
                <strong>Assessment Design</strong>.
              </p>

              <p>
                Preparing for moderation? Explore the{" "}
                <strong>Marking Guide</strong>,{" "}
                <strong>Evidence of Learning</strong> and{" "}
                <strong>Moderation</strong> together.
              </p>

              <p>
                Students are unsure how to improve? Explore{" "}
                <strong>Visible Learning</strong> alongside the{" "}
                <strong>Marking Guide</strong> and{" "}
                <strong>Teaching Decisions</strong>.
              </p>
            </div>
          </div>
        </section>

        <section className="section teacher-pathway-cta">
          <div className="container">
            <p className="eyebrow">Begin exploring</p>

            <h2>Where does your current professional question lead you?</h2>

            <p>
              There is no single starting point. Choose the cog that best
              matches the work you are doing now, then follow the connections.
            </p>

            <a className="button" href="/curriculum-intent">
              Explore the Framework in Action
            </a>
          </div>
        </section>
      </main>
    </>
  );
}