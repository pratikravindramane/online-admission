import React, { useRef, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import it from "../img/it.png";
import cs from "../img/cs.jpg";
import baf from "../img/baf.png";
import bms from "../img/bms.png";
function Index() {
  const [contact, setContact] = useState();
  const form = useRef();
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };
  // console.log(contact);
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
  const staticCourse = [
    {
      title: "BScIT (Math)",
      src: it,
      p: "Aspirants are taught all the tools needed for the computer programming languages in addition to all the necessary tools that are needed in the industry of IT. This course places equal importance to theory as well as the practical aspect. This degree is primarily focused on subjects like software, databases and networking. This program will give a strategic advantage top the building IT professionals.",
      to: "/it",
    },
    {
      title: "BScCs",
      src: cs,
      p: "Computer Science degree emphasises mathematical and theoretical foundation of computing. In addition to basic skills in the design of information processing systems. The syllabus develops requisite professional skills and problem-solving abilities for pursuing a career in the software industry.",
      to: "/cs",
    },
    {
      title: "BAF",
      src: baf,
      p: "Bachelor of Commerce in Accounting and Finance, also known as BAF Course, is an undergraduate programme that provides training in the areas of accounting and finance. The duration of the course shall be six semesters spread over in three years. The objective of this course was to improve self-employment and provide benefits to the organisations by providing them with suitably trained people in the field of Accounting & Finance by mode of interaction, presentations, projects, industrial visits and practical training. BAF degree will help you to gain knowledge in areas of Financial Accounting, Cost Accounting, Auditing, IT, Taxation, Economics and Business Law and Business Communications.",
      to: "/baf",
    },
    {
      title: "BMS",
      src: bms,
      p: "BMS provides a basic understanding of management education. This course exposes students to practical aspects like project work, group studies, case studies and presentations. The curriculum is designed to inculcate academic expertise among the students in their chosen area among Marketing, Finance and HRM and pursue full-fledged degree in the same area. At the end of its three years, a student graduates with additional skills, such as Communication Skills, Public Relations Skills, Leadership Skills, Teamwork, Team Building, Research Skills and Presentation Skills.",
      to: "/bms",
    },
  ];
  return (
    <div>
      <Nav />
      <div className="index">
        <div className="header">
          <img
            src="https://ghatkopar.universalcollege.edu.in/wp-content/uploads/2021/08/MSG-building-1.jpg"
            alt=""
          />
        </div>
        <div className="index-course">
          <h1>Courses</h1>
          <div className="coursesss">
            {staticCourse &&
              staticCourse.map((courses) => (
                <>
                  <div className="course-card">
                    <img src={courses.src} alt="" />
                    <div className="content">
                      <h2 className="course-title">{courses.title}</h2>
                      <p>{courses.p}</p>
                      <Link to={courses.to} className="course-card-link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>

        <div>
          <h1 className="about-tittle">About us</h1>
          <div className="about flex">
            <div className="about-info">
              <div>
                <h3>Random1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nemo alias, quae repudiandae commodi amet eum itaque
                  earum enim sint.
                </p>
              </div>
              <br />
              <div>
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Expedita maiores deleniti veritatis non quo iure, ea facere
                  vero. Asperiores id pariatur, ipsam cumque earum, qui
                  laudantium itaque, quia inventore adipisci eius quisquam
                  reprehenderit error neque ab harum rem similique est.
                </p>
              </div>
              <br />

              <div>
                <h3>One Peice</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt, fugiat?
                </p>
              </div>
            </div>
            <img
              src="https://educationusa.state.gov/sites/default/files/styles/rollover_image_654x475/public/field_image_rollover/student3.jpg?itok=4hvF1Ka-"
              alt=""
            />
          </div>
        </div>
        <div className="contact">
          <h1>Contact Us</h1>
          <div className="flex">
            <img
              src="https://medicine.wustl.edu/wp-content/uploads/phoneapp-700x467.jpg"
              alt=""
            />
            <div className="contact">
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input
                  type="text"
                  name="user_name"
                  onChange={changeHandler}
                  id="name"
                />
                <label>Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
                  onChange={changeHandler}
                />
                <label>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  onChange={changeHandler}
                  id="message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <div className="footer">
            <div>
              <h3>Contact</h3>
              <div className="contact-info">
                <p>Email : universal@gmail.com</p>
                <p>phone :+91 1234567890</p>
                <p>
                  address ; Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
            <div>
              <h3>social media</h3>
              <div className="social">
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
                <a href="https://www.facebook.com/">
                  <FacebookIcon />
                </a>
                <a href="https://twitter.com/tweeter?lang=en">
                  <TwitterIcon />
                </a>
                <a href="https://www.youtube.com/">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
            <div className="links">
              <h3>Quick Links</h3>
              <div className="quick-link">
                <NavLink to="/#">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
              </div>
            </div>
          </div>
          <div className="last">@copyright by Anshuman 2023</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
