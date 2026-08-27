const navItems = ["Overview", "Search", "Entities", "Timeline", "Locations"];

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">OMNISCOPE<span>™</span></div>

        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="status">
          <i /> SYSTEM ONLINE
        </div>
      </header>

      <section className="content-wrap">
        <div className="eyebrow">PUBLIC INTELLIGENCE / VAUREL</div>

        <h1>See the public web as a connected intelligence layer.</h1>

        <p className="lede">
          OMNISCOPE organizes public-source information into a research
          workspace built for discovery, context, and verification.
        </p>
      </section>
    </main>
  );
}
