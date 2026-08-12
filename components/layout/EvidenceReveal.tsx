"use client";

import { useState } from "react";

type EvidenceCategory = string;

type EvidenceSegment = {
  text: string;
  category?: EvidenceCategory;
};

type EvidenceNotice = {
  category: EvidenceCategory;
  text: string;
  reasoning: string;
};

type EvidenceFilter = {
  label: string;
  value: EvidenceCategory;
  className: "learning" | "assessment" | "pedagogy" | "impact";
};

type EvidenceRevealProps = {
  eyebrow?: string;
  title: string;
  sourceLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  instruction?: string;
  segments: EvidenceSegment[];
  filters: EvidenceFilter[];
  notices: EvidenceNotice[];
  overallReasoning: string;
  tryPrompt?: string;
};

export function EvidenceReveal({
  eyebrow = "Show me the evidence",
  title,
  sourceLabel,
  imageSrc,
  imageAlt = "",
  instruction = "Click on the aspects below to identify the different parts.",
  segments,
  filters,
  notices,
  overallReasoning,
  tryPrompt = "What can you identify in your own curriculum and assessment documents?",
}: EvidenceRevealProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const visibleNotices =
    activeFilter === "all"
      ? notices
      : notices.filter((notice) => notice.category === activeFilter);

  const activeReasoning =
    activeFilter === "all"
      ? overallReasoning
      : notices.find((notice) => notice.category === activeFilter)?.reasoning ??
        overallReasoning;

  return (
    <section className="section evidence-reveal-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>
            Select a lens to see how different parts of the source evidence
            inform professional reasoning.
          </p>
        </div>

        <div className="evidence-reveal-grid">
          <article className="evidence-source-card">
            <span className="evidence-source-label">{sourceLabel}</span>

{imageSrc && (
  <div className="evidence-source-image">
    <img src={imageSrc} alt={imageAlt} />
  </div>
)}

<div className="evidence-excerpt">
              <p>
                {segments.map((segment, index) => {
                  const isHighlighted =
                    segment.category &&
                    (activeFilter === "all" ||
                      activeFilter === segment.category);

                  return (
                    <span
                      key={`${segment.text}-${index}`}
                      className={
                        isHighlighted
                          ? `evidence-highlight ${segment.category}`
                          : undefined
                      }
                    >
                      {segment.text}
                    </span>
                  );
                })}
              </p>
            </div>

            <div className="evidence-filter-area">
              <p className="evidence-filter-instruction">{instruction}</p>

              <div className="evidence-filter-row">
                <button
                  type="button"
                  className={`evidence-filter all ${
                    activeFilter === "all" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("all")}
                  aria-pressed={activeFilter === "all"}
                >
                  {activeFilter === "all" && (
                    <span aria-hidden="true">✓</span>
                  )}
                  Show all
                </button>

                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    type="button"
                    className={`evidence-filter ${filter.className} ${
                      activeFilter === filter.value ? "active" : ""
                    }`}
                    onClick={() => setActiveFilter(filter.value)}
                    aria-pressed={activeFilter === filter.value}
                  >
                    {activeFilter === filter.value && (
                      <span aria-hidden="true">✓</span>
                    )}

                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </article>

          <article className="evidence-notice-card">
            <span className="evidence-notice-label">
              What should I notice?
            </span>

            <ul>
              {visibleNotices.map((notice) => (
                <li key={notice.text}>{notice.text}</li>
              ))}
            </ul>

            <div className="evidence-reasoning">
              <strong>Professional reasoning</strong>
              <p>{activeReasoning}</p>
            </div>
          </article>
        </div>

        <div className="evidence-try">
          <span>Now try it with yours</span>
          <p>{tryPrompt}</p>
        </div>
      </div>
    </section>
  );
}