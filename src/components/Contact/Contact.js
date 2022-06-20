import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // logged into the emailjs documents
    emailjs
      .sendForm(
        "service_mnlpocp",
        "template_e52nnsk",
        form.current,
        "S2T381xxZlzIZpAGU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setText('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      {/* {check emailjs template for naming convention} */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
