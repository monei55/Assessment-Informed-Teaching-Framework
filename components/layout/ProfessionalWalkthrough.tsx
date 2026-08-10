type WalkthroughStep = {
  title: string;
  description: string;
};

type ProfessionalWalkthroughProps = {
  eyebrow?: string;
  title: string;
  context: string;
  steps: WalkthroughStep[];
};

export function ProfessionalWalkthrough({
  eyebrow = "Professional Walkthrough",
  title,
  context,
  steps,
}: ProfessionalWalkthroughProps) {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{context}</p>
        </div>

        <div className="walkthrough-process">
          {steps.map((step, index) => (
            <article className="walkthrough-process-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
