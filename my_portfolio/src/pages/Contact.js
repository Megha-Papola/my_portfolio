import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-box">
        <h1>Contact Me</h1>

        <div className="contact-content">
          <div className="contact-info">
            <p><strong>Email:</strong> meghapapola05@gmail.com</p>
            <p><strong>Phone:</strong> 7465962348</p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/megha-papola-626a14287/" target="_blank" rel="noreferrer">
                Megha Papola
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Megha-Papola" target="_blank" rel="noreferrer">
                meghapapola
              </a>
            </p>
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="5" placeholder="Your Message" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
