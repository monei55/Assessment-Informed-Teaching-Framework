type QuestionCardProps = {
  number: string;
  title: string;
  question: string;
  description: string;
  tone: "learning" | "assessment" | "pedagogy" | "impact";
};

export function QuestionCard({
  number,
  title,
  question,
  description,
  tone,
}: QuestionCardProps) {
  return (
    <article
      className={`question-card ${tone}`}
      id={tone}
      aria-labelledby={`${tone}-title`}
    >
      <div className="question-number">{number}</div>

      <h3 id={`${tone}-title`}>{title}</h3>

      <p className="question-prompt">{question}</p>

      <p>{description}</p>

      <a href={`/${tone}`}>
        Explore {title}
        <span aria-hidden="true"> →</span>
      </a>
    </article>
  );
}