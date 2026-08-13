 const links = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "#framework" },
  { label: "Clarity", href: "#clarity-lenses" },
  { label: "Resources", href: "#tools" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="#/"
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

        <a className="button button-small" href="/#pathways">
          Framework in Action
        </a>
      </div>
    </header>
  );
}