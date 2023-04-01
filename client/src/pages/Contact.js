import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import axios from "axios";
import Bms from "./Bms";

function Contact() {
  const [contact, setContact] = useState();

  const form = useRef();
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };
  console.log(contact);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/hod/contact",
        contact
      );
      console.log(response);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        emailjs
          .sendForm(
            "service_7xopafq",
            "template_1d58zbf",
            form.current,
            "qE3vKuQtV9hkmjpEk"
          )
          .then(
            (result) => {
              console.log(result.text);
              console.log("message sent");
              alert("message send succesfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Nav />
      <h2 className="contact-h">Contact us</h2>
      <div className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            id="name"
            onChange={changeHandler}
          />
          <label>Email</label>
          <input
            type="email"
            name="user_email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
            id="email"
            onChange={changeHandler}
          />
          <label>Message</label>
          <textarea
            name="message"
            rows={4}
            id="message"
            onChange={changeHandler}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
