type WhyItMattersProps = {
  clearTitle?: string;
  unclearTitle?: string;
  clearItems: string[];
  unclearItems: string[];
};

export function WhyItMatters({
  clearTitle = "When this is clear",
  unclearTitle = "When this is unclear",
  clearItems,
  unclearItems,
}: WhyItMattersProps) {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Why it matters</p>
          <h2>Clarity changes the decisions that follow.</h2>
        </div>

        <div className="comparison-grid">
          <article className="comparison comparison-positive">
            <span className="comparison-label">Aligned practice</span>
            <h3>{clearTitle}</h3>

            <ul>
              {clearItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="comparison comparison-risk">
            <span className="comparison-label">Risk to learning</span>
            <h3>{unclearTitle}</h3>

            <ul>
              {unclearItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}