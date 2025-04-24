import React, { useEffect, useState } from "react";
import "./contact.css";
import send from "../../images/Send.svg";

function Contact() {
  return (
    <div id="contact" className="contact">
      <form action="https://formspree.io/f/xyzwydvv" method="POST">

        <div className="Contact-content">
          <h1>Contact Me</h1>
          <p>
            Feel free to contact me directly at{" "}
            <a href="mailto:tantawihiba@gmail.com">tantawihiba@gmail.com</a> or
            through this form
          </p>

          <div className="Contact-form">
            <textarea
              className="email"
              id="email"
              name="email"
              placeholder="someone@example.com"
              required
            ></textarea>
            <br />
            <textarea
              className="msg"
              id="msg"
              name="msg"
              placeholder="your message..."
              required
            ></textarea>
            <br />
          </div>

          <button className="btn" type="submit">
            Submit &nbsp;
            <img src={send} alt="send icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
