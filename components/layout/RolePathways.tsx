const pathways = [
  {
    role: "Teacher",
    title: "Understand it. Apply it. Respond to learning.",
    description:
      "Strengthen the professional reasoning behind planning, teaching, assessment and responsive decision-making.",
    href: "/teachers",
    className: "teacher-path",
    number: "01",
  },
  {
    role: "Instructional Coach / Middle Leader",
    title: "Model it. Coach it. Build capability.",
    description:
      "Support educators to make their thinking visible, strengthen professional judgement and build confidence over time.",
    href: "/coaches",
    className: "coach-path",
    number: "02",
  },
  {
    role: "School Leader",
    title: "Lead it. Enable it. Monitor impact.",
    description:
      "Build the conditions, coherence and professional capability required for high-quality instructional decision-making across the school.",
    href: "/leaders",
    className: "leader-path",
    number: "03",
  },
];

export function RolePathways() {
  return (
    <section className="section role-pathways-section" id="pathways">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Choose your pathway</p>

          <h2>How will you use the framework?</h2>

          <p>
            The professional reasoning model remains the same. Your pathway
            changes according to how you will apply, support or lead the work.
          </p>
        </div>

        <div className="role-pathways-grid">
          {pathways.map((pathway) => (
            <a
              className={`role-pathway-card ${pathway.className}`}
              href={pathway.href}
              key={pathway.role}
            >
              <span className="role-pathway-number">{pathway.number}</span>

              <div className="role-pathway-copy">
                <p className="role-pathway-role">{pathway.role}</p>
                <h3>{pathway.title}</h3>
                <p>{pathway.description}</p>
              </div>

              <span className="role-pathway-arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>

        <p className="role-pathways-note">
          Already familiar with the framework? You can also enter through any
          of the eight connected cogs and go directly to the area you need.
        </p>
      </div>
    </section>
  );
}