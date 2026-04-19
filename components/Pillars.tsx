const PILLARS = [
  {
    glyph: "I.",
    title: "Heritage",
    body:
      "Cathedrals, cantatas, correspondence. We archive the inheritance worth passing down.",
  },
  {
    glyph: "II.",
    title: "Craft",
    body:
      "From bespoke tailoring to stone masonry — the discipline of making things well, slowly.",
  },
  {
    glyph: "III.",
    title: "Letters",
    body: "Classical languages, literature, and rhetoric — the humanities as daily practice.",
  },
  {
    glyph: "IV.",
    title: "Community",
    body: "Dinners, correspondence circles, and annual gatherings across the continent.",
  },
];

export default function Pillars() {
  return (
    <div className="pillars">
      {PILLARS.map((p) => (
        <div key={p.glyph} className="pillar">
          <div className="glyph">{p.glyph}</div>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
