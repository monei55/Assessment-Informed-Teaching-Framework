const cogs = [
  {
    title: "Curriculum Intent",
    shortTitle: "Curriculum",
    className: "learning",
    position: "cog-top",
  },
  {
    title: "Achievement Standards",
    shortTitle: "Standards",
    className: "learning",
    position: "cog-upper-left",
  },
  {
    title: "Assessment Design",
    shortTitle: "Assessment",
    className: "assessment",
    position: "cog-upper-right",
  },
  {
    title: "Marking Guide",
    shortTitle: "Marking Guide",
    className: "assessment",
    position: "cog-right",
  },
  {
    title: "Teaching Decisions",
    shortTitle: "Teaching",
    className: "pedagogy",
    position: "cog-lower-right",
  },
  {
    title: "Evidence of Learning",
    shortTitle: "Evidence",
    className: "impact",
    position: "cog-bottom",
  },
  {
    title: "Moderation",
    shortTitle: "Moderation",
    className: "impact",
    position: "cog-lower-left",
  },
  {
    title: "Visible Learning",
    shortTitle: "Visible Learning",
    className: "pedagogy",
    position: "cog-left",
  },
];

export function FrameworkCycle() {
  return (
    <div
      className="cog-framework"
      aria-label="Connected professional reasoning model centred on student success"
    >
      <div className="cog-system">
        <div className="cog-connector cog-connector-one" aria-hidden="true" />
        <div className="cog-connector cog-connector-two" aria-hidden="true" />
        <div className="cog-connector cog-connector-three" aria-hidden="true" />

        <div className="student-cog" aria-label="Student Success">
          <span className="student-cog-icon" aria-hidden="true">
            ●
          </span>
          <span>Student</span>
          <strong>Success</strong>
        </div>

{cogs.map((cog, index) => (
  <div
    key={cog.title}
    className={`framework-cog ${cog.className} ${cog.position} ${
      index % 2 === 0 ? "cog-clockwise" : "cog-counter"
    }`}
    aria-label={`${cog.title}: part of the connected professional reasoning model`}
  >
    <span className="cog-teeth" aria-hidden="true" />

    <span className="cog-label">
      <strong className="cog-title-full">{cog.title}</strong>
      <strong className="cog-title-short">{cog.shortTitle}</strong>
    </span>
  </div>
))}
      </div>

      <p className="cog-caption">
        Every component works together to strengthen students&apos; opportunity
        to learn and succeed.
      </p>
    </div>
  );
}