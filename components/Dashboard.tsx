const cards = [
  { label: "ACTIVE SOURCES", value: "128", note: "+12 this week" },
  { label: "ENTITIES", value: "42", note: "People & organizations" },
  { label: "LOCATIONS", value: "19", note: "Tracked regions" },
  { label: "EVENTS", value: "76", note: "Timeline records" }
];

export default function Dashboard() {
  return (
    <section className="dashboard" id="dashboard">
      <div className="section-heading">
        <div>
          <div className="eyebrow">WORKSPACE / OVERVIEW</div>
          <h2>Intelligence dashboard</h2>
        </div>
        <span className="updated">LAST SYNC 21:42 UTC</span>
      </div>

      <div className="stat-grid">
        {cards.map((card) => (
          <article className="stat-card" key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
            <p>{card.note}</p>
          </article>
        ))}
      </div>

      <div className="activity-panel">
        <div className="panel-title">RECENT ACTIVITY</div>
        <div className="activity-row">
          <span>Public source indexed</span>
          <b>12 min ago</b>
        </div>
        <div className="activity-row">
          <span>Entity relationship updated</span>
          <b>31 min ago</b>
        </div>
        <div className="activity-row">
          <span>Timeline record added</span>
          <b>1 hr ago</b>
        </div>
      </div>
    </section>
  );
}
