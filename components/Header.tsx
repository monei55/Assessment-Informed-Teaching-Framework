import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Framework", href: "/#framework" },
  { label: "Clarity", href: "/#clarity-lenses" },
  { label: "Resources", href: "/#tools" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
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
        </Link>

        <nav aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="button button-small" href="/#pathways">
          Framework in Action
        </Link>
      </div>
    </header>
  );
}