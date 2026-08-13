import Link from "next/link";

const lenses = [
  {
    role: "Teacher",
    sphere: "My classroom",
    title: "Use the framework to strengthen my practice.",
    description:
      "Work through curriculum intent, assessment, pedagogy and impact to make informed teaching decisions that improve student learning.",
    href: "/curriculum-intent",
    className: "teacher-path",
    number: "01",
  },
  {
    role: "Instructional Coach / Middle Leader",
    sphere: "Supporting others",
    title: "Use the framework to build the capability of others.",
    description:
      "Use the same reasoning process to support teachers, strengthen professional judgement and build shared clarity about effective teaching and learning.",
    href: "/coaches",
    className: "coach-path",
    number: "02",
  },
  {
    role: "School Leader",
    sphere: "Leading systematic practice",
    title: "Use the framework to lead coherent teaching and learning.",
    description:
      "Apply the same reasoning at a whole-school level to build the conditions, capability and systematic practices that strengthen student achievement.",
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
          <p className="eyebrow">Framework in Action</p>

          <h2>The framework stays the same. The lens changes how you use it.</h2>

          <p>
            Curriculum intent, assessment, pedagogy and impact remain connected
            at every level. What changes is the sphere of influence — from
            strengthening your own classroom practice, to supporting others,
            to leading coherent and systematic practice across a school.
          </p>
        </div>

        <div className="role-pathways-grid">
          {lenses.map((lens) => (

            <Link
              className={`role-pathway-card ${lens.className}`}
              href={lens.href}
              key={lens.role}
            >
              <span className="role-pathway-number">{lens.number}</span>

              <div className="role-pathway-copy">
                <p className="role-pathway-role">{lens.role}</p>

                <span className="role-pathway-sphere">
                  {lens.sphere}
                </span>

                <h3>{lens.title}</h3>

                <p>{lens.description}</p>
              </div>

              <span className="role-pathway-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="role-pathways-core">
          <span>At every level</span>
          <strong>Student Achievement remains our core business.</strong>
        </div>
      </div>
    </section>
  );
}