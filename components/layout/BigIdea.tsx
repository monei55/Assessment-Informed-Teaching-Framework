import type { ReactNode } from "react";

type BigIdeaProps = {
  title?: string;
  children: ReactNode;
};

export function BigIdea({
  title = "The Big Idea",
  children,
}: BigIdeaProps) {
  return (
    <section className="section">
      <div className="container narrow">
        <div className="big-idea">
          <p className="eyebrow">Think</p>
          <h2>{title}</h2>

          <div className="big-idea-copy">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}