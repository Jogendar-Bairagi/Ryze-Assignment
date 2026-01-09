import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Ryze</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/CTA">
        <button className="nav-cta">Book a Demo</button></Link>
      </nav>
    </header>
  );
}
    