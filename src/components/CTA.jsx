import Header from "../components/Header";
export default function CTA() {
  return (
    <>
     <Header />
    <div className="demo-page">
      <div className="demo-card">
        <h1>Book a Demo</h1>
        <p className="subtitle">See how our product works for your needs</p>

        <form className="demo-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Your company" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell us what you are looking for"></textarea>
          </div>

          <button type="submit" className="submit-btn">Book Demo</button>
        </form>
      </div>
    </div>
    </>
  );
}
