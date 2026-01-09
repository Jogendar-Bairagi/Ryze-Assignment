import Header from "./Header";
export default function Pricing() {
  return (
    <>
     <Header />
    <section className="pricing">
      <h2>Simple Pricing</h2>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p>For small teams</p>
          <strong>₹0 / month</strong>
        </div>

        <div className="pricing-card featured">
          <h3>Pro</h3>
          <p>Advanced AI workflows</p>
          <strong>₹2,499 / month</strong>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p>Custom solutions</p>
          <strong>Contact Sales</strong>
        </div>
      </div>
    </section>
    </>
  );
}
