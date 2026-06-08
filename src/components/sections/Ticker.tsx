const tickerItems = [
  "Barista Coffee",
  "Kylin",
  "Wanchai",
  "Drizzle & Dust",
  "India",
  "Sri Lanka",
  "Maldives",
  "BSE: INTELLCAP",
];

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <section className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span key={index} className="ticker-item">
            {item}
            <span
              style={{
                display: "inline-block",
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "var(--c-obsidian)",
                opacity: 0.4,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </section>
  );
}