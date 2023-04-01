import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function About() {
  return (
    <div>
      <Nav />
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
                vero. Asperiores id pariatur, ipsam cumque earum, qui laudantium
                itaque, quia inventore adipisci eius quisquam reprehenderit
                error neque ab harum rem similique est.
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
      <Footer />
    </div>
  );
}

export default About;
