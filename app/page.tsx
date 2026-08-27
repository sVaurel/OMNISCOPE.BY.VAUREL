import Dashboard from "../components/Dashboard";

const metrics = [
  ["01", "DISCOVER", "Find public information across sources."],
  ["02", "CONNECT", "Bring related entities, places, and events together."],
  ["03", "VERIFY", "Keep source context visible while researching."]
];

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          OMNISCOPE<span>™</span>
        </div>

        <nav aria-label="Primary navigation">
          {["Overview", "Search", "Entities", "Timeline", "Locations"].map(
            (item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            )
          )}
        </nav>

        <div className="status">
          <i /> SYSTEM ONLINE
        </div>
      </header>

      <section className="hero content-wrap" id="overview">
        <div className="eyebrow">PUBLIC INTELLIGENCE / VAUREL / 2026</div>

        <h1>See the public web as a connected intelligence layer.</h1>

        <p className="lede">
          OMNISCOPE organizes public-source information into a research
          workspace built for discovery, context, and verification.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#dashboard">
            Open workspace
          </a>

          <a className="button" href="#about">
            Read the project
          </a>
        </div>
      </section>

      <section className="metrics" id="about">
        {metrics.map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <Dashboard />

      <section className="statement content-wrap">
        <div className="eyebrow">PROJECT DIRECTION</div>

        <p>
          Research should feel less like opening disconnected tabs and more
          like building a map of what is already public.
        </p>
      </section>
    </main>
  );
}
