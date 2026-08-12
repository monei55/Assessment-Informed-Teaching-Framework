type CogActionItem = {
  cog: string;
  question: string;
  evidence: string;
  connection: string;
  className: "learning" | "assessment" | "pedagogy" | "impact";
};

type CogsInActionProps = {
  eyebrow?: string;
  title: string;
  context: string;
  items: CogActionItem[];
};

export function CogsInAction({
  eyebrow = "See the Cogs in Action",
  title,
  context,
  items,
}: CogsInActionProps) {
  return (
    <section className="section cogs-action-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{context}</p>
        </div>

        <div className="cogs-action-grid">
          {items.map((item) => (
            <article
              className={`cogs-action-card ${item.className}`}
              key={item.cog}
            >
              <div className="cogs-action-header">
                <span className="cogs-action-cog">⚙</span>

                <div>
                  <p className="cogs-action-label">{item.cog}</p>
                  <h3>{item.question}</h3>
                </div>
              </div>

              <div className="cogs-action-evidence">
                <span>In this example</span>
                <p>{item.evidence}</p>
              </div>

              <div className="cogs-action-connection">
                <strong>Why this turns the next cogs</strong>
                <p>{item.connection}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="cogs-action-centre">
          <span>Student Success</span>
          <strong>
            The value comes from the connections between the decisions.
          </strong>
        </div>
      </div>
    </section>
  );
}