const teacherLensSections = [
  { label: "Why it Matters", href: "#why-it-matters" },
  { label: "Understand", href: "#understand" },
  { label: "Professional Walkthrough", href: "#professional-walkthrough" },
  { label: "Show me the Evidence", href: "#show-evidence" },
  { label: "Show me the Connection", href: "#show-connection" },
  { label: "Design the Question", href: "#design-the-question" },
  { label: "Marking Guide", href: "#marking-guide" },
  { label: "Visible Learning", href: "#visible-learning" },
  { label: "Learning Wall", href: "#learning-wall" },
  { label: "Bump-it-Up Wall", href: "#bump-it-up-wall" },
  { label: "Teaching Decisions", href: "#teaching-decisions" },
  { label: "Evidence of Learning", href: "#evidence-of-learning" },
  { label: "Trace the Judgement", href: "#trace-judgement" },
  { label: "Moderation", href: "#moderation" },
  { label: "Connect", href: "#connect" },
];

export function TeacherLensNav() {
  return (
    <aside className="teacher-lens-nav" aria-label="Teacher lens navigation">
      <div className="teacher-lens-nav-inner">
        <p className="teacher-lens-nav-eyebrow">Teacher Lens</p>

        <strong className="teacher-lens-nav-title">
          Framework in Action
        </strong>

        <nav className="teacher-lens-nav-links">
          {teacherLensSections.map((section, index) => (
            <a href={section.href} key={section.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}