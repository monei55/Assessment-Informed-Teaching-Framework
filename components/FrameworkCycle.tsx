const items = [
  ["Learning", "Clarify the learning", "learning"],
  ["Assessment", "Plan the evidence", "assessment"],
  ["Pedagogy", "Select the pedagogy", "pedagogy"],
  ["Impact", "Evaluate and respond", "impact"],
];

export function FrameworkCycle() {
  return (
    <div className="cycle-card" aria-label="Assessment Informed Teaching cycle">
      <div className="cycle-orbit">
        <div className="cycle-centre"><span>Responsive</span><strong>Decision-Making</strong></div>
        {items.map(([title, subtitle, className], index) => (
          <div className={`cycle-node ${className} node-${index + 1}`} key={title}>
            <strong>{title}</strong><span>{subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
