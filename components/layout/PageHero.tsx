type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  insight: string;
  estimatedTime?: string;
};

export function PageHero({
  eyebrow,
  title,
  lead,
  insight,
  estimatedTime = "8 min read",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container narrow">

        <p className="eyebrow">{eyebrow}</p>

        <div className="page-meta">
          <span className="reading-time">
            ⏱ {estimatedTime}
          </span>
        </div>

        <h1>{title}</h1>

        <p className="page-lead">
          {lead}
        </p>
        <blockquote className="professional-insight">
          <strong>Professional Insight</strong>

          <p>{insight}</p>
        </blockquote>

      </div>
    </section>
  );
} 
