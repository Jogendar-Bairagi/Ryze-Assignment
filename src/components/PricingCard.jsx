export default function PricingCard({ title, highlight }) {
  return (
    <div className={`card ${highlight ? "highlight" : ""}`}>
      {highlight && <span className="badge">Most Popular</span>}
      <h3>{title}</h3>
      <p>Plan description here</p>
      <button>Get Started</button>
    </div>
  );
}
