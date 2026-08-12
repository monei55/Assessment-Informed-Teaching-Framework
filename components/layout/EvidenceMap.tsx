"use client";

import { useState } from "react";

type EvidenceAspect = {
  id: string;
  label: string;
  evidence: string;
  cDescriptor: string;
  judgement: string;
  strongerEvidence: string;
  aExample: string;
  className: string;
  highlight: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

type EvidenceMapProps = {
  imageSrc: string;
  imageAlt: string;
  aspects: EvidenceAspect[];
};

export function EvidenceMap({
  imageSrc,
  imageAlt,
  aspects,
}: EvidenceMapProps) {
  const [activeAspect, setActiveAspect] = useState(aspects[0]);
  const [showAExample, setShowAExample] = useState(false);

  return (
    <section className="evidence-map">
      <div className="evidence-map-heading">
        <span className="evidence-source-label">
          Trace the judgement
        </span>

        <h3>Where is the evidence — and what does it demonstrate?</h3>

        <p>
          Select an aspect of the marking guide to trace the evidence in the
          student work sample and see how it contributes to the overall
          judgement.
        </p>
      </div>

      <div className="evidence-map-layout">
        <div className="evidence-map-controls">
          {aspects.map((aspect) => (
            <button
              key={aspect.id}
              type="button"
              className={`evidence-map-button ${aspect.className} ${
                activeAspect.id === aspect.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveAspect(aspect);
                setShowAExample(false);
              }}
              aria-pressed={activeAspect.id === aspect.id}
            >
              {aspect.label}
            </button>
          ))}
        </div>

        <div className="evidence-map-work">
          <div className="evidence-map-left">
            <div className="evidence-map-image">
              <div className="evidence-map-image-stage">
                <img src={imageSrc} alt={imageAlt} />

                <div
                  className={`evidence-map-highlight ${activeAspect.className}`}
                  style={{
                    top: `${activeAspect.highlight.top}%`,
                    left: `${activeAspect.highlight.left}%`,
                    width: `${activeAspect.highlight.width}%`,
                    height: `${activeAspect.highlight.height}%`,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {showAExample && (
              <div className="a-example-reveal">
                <div className="a-example-heading">
                  <div>
                    <span>Possible A-level student response</span>
                    <strong>{activeAspect.label}</strong>
                  </div>

                  <span className="a-example-grade">A</span>
                </div>

                <div className="a-student-work">
                  <div className="a-student-work-top">
                    <strong>Science Investigation — Keeping drinks warm</strong>
                    <span>Student response</span>
                  </div>

                  <p className="a-student-writing">
                    {activeAspect.aExample}
                  </p>
                </div>

                <div className="a-example-note">
                  <strong>Notice the difference</strong>

                  <p>
                    Look for the change in precision, reasoning and
                    sophistication — not simply more writing.
                  </p>
                </div>

                <small className="a-example-disclaimer">
                  This is one possible example of evidence at this level.
                  Students are not expected to reproduce this exact response.
                </small>
              </div>
            )}
          </div>

          <div className="evidence-map-detail">
            <span className="evidence-map-detail-label">
              {activeAspect.label}
            </span>

            <div className="evidence-map-detail-block">
              <strong>Evidence in the work sample</strong>
              <p>{activeAspect.evidence}</p>
            </div>

            <div className="evidence-map-detail-block evidence-map-standard">
              <strong>C-level marking guide connection</strong>
              <p>{activeAspect.cDescriptor}</p>
            </div>

            <div className="evidence-map-detail-block evidence-map-judgement">
              <strong>What can we conclude?</strong>
              <p>{activeAspect.judgement}</p>
            </div>

            <div className="evidence-map-detail-block evidence-map-stronger">
              <strong>What would stronger evidence look like?</strong>
              <p>{activeAspect.strongerEvidence}</p>

              <button
                type="button"
                className="a-example-toggle"
                onClick={() => setShowAExample((current) => !current)}
                aria-expanded={showAExample}
              >
                <span className="a-example-toggle-grade">A</span>

                <span>
                  {showAExample
                    ? "Hide possible A-level response"
                    : "See a possible A-level response"}
                </span>

                <span
                  className={`a-example-toggle-arrow ${
                    showAExample ? "open" : ""
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}