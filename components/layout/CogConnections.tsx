type CogConnection = {
  title: string;
  description: string;
  href: string;
  className: "learning" | "assessment" | "pedagogy" | "impact";
};

type CogConnectionsProps = {
  currentCog: string;
  intro?: string;
  connections: CogConnection[];
};

export function CogConnections({
  currentCog,
  intro = "This cog does not work in isolation. Strengthening it changes the decisions connected to every other part of the system.",
  connections,
}: CogConnectionsProps) {
  return (
    <section className="section cog-connections-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Connect</p>
          <h2>How {currentCog} turns the other cogs</h2>
          <p>{intro}</p>
        </div>

        <div className="cog-connections-layout">
          <div className="cog-current">
            <span>Current Cog</span>
            <strong>{currentCog}</strong>
            <p>
              Strengthening this area should improve the quality of decisions
              made across the wider teaching and learning process.
            </p>
          </div>

          <div className="cog-connections-grid">
            {connections.map((connection) => (
              <a
                className={`cog-connection-card ${connection.className}`}
                href={connection.href}
                key={connection.title}
              >
                <div>
                  <h3>{connection.title}</h3>
                  <p>{connection.description}</p>
                </div>

                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="cog-connections-insight">
          <strong>Remember</strong>
          <p>
            The framework is about keeping Student Achievement as our core business.
          </p>
        </div>
      </div>
    </section>
  );
}