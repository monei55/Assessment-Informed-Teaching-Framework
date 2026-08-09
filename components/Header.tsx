 const links = [
  { label: "Home", href: "#top" },
  { label: "Framework", href: "#framework" },
  { label: "Learning", href: "#learning" },
  { label: "Assessment", href: "#assessment" },
  { label: "Pedagogy", href: "#pedagogy" },
  { label: "Impact", href: "#impact" },
  { label: "Resources", href: "#tools" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#top"
          aria-label="Assessment Informed Teaching Framework home"
        >
          <span className="brand-mark" aria-hidden="true">
            <span className="mark learning" />
            <span className="mark assessment" />
            <span className="mark pedagogy" />
            <span className="mark impact" />
          </span>

          <span>
            <strong>Assessment Informed</strong>
            <small>Teaching Framework</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="button button-small" href="#four-questions">
          Explore
        </a>
      </div>
    </header>
  );
}