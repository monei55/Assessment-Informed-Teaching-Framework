type ReasoningStep = {
  number: string;
  title: string;
  description: string;
};

type ProfessionalReasoningProps = {
  title?: string;
  intro?: string;
  steps: ReasoningStep[];
};

export function ProfessionalReasoning({
  title = "Professional Reasoning",
  intro = "Work through the thinking before moving to the next instructional decision.",
  steps,
}: ProfessionalReasoningProps) {
  return (
    <section className="section reasoning-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Understand</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>

        <div className="reasoning-flow">
          {steps.map((step, index) => (
            <div className="reasoning-flow-item" key={step.number}>
              <article className="reasoning-flow-card">
                <span className="reasoning-flow-number">{step.number}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>

              {index < steps.length - 1 && (
                <span className="reasoning-flow-arrow" aria-hidden="true">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="reasoning-checkpoint">
          <span>Professional Reasoning Checkpoint</span>
          <p>
            Before moving on, can you clearly explain what students are expected
            to know, understand and do?
          </p>
        </div>
      </div>
    </section>
  );
}