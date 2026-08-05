const links = ["Framework", "In Practice", "Professional Language", "Tools", "About"];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Assessment Informed Teaching Framework home">
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
            <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>{link}</a>
          ))}
        </nav>
        <a className="button button-small" href="#four-questions">Explore</a>
      </div>
    </header>
  );
}
