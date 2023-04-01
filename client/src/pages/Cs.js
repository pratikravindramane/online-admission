import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Cs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <div className="bms">
        <h1>Bachelor of Science (Computer Science)</h1>
        <p>
          Computer Science degree emphasises mathematical and theoretical
          foundation of computing. In addition to basic skills in the design of
          information processing systems. The syllabus develops requisite
          professional skills and problem-solving abilities for pursuing a
          career in the software industry.
        </p>
        <br />
        <h3>Total No. of Seats: 60</h3>
        <div className="eligibility">
          <h2>Eligibility</h2>
          <ul>
            <li>
              Students passing S. Y. J. C. (Std. XII) with Science and
              Mathematics as one subject.
            </li>
            <li>
              Students from other State (eligibility) are required to have
              ENGLISH as a compulsory paper at H.S.C. level.
            </li>
          </ul>
          <br />
          <p>
            A candidate for being eligible for admission to the S.Y. B.Sc.
            (Computer Science Course) shall have passed post HSC – Diploma in
            Computer Engineering/Computer Science & Allied Branches. However,
            the Diploma should be recognized by the Maharashtra State Board of
            Technical Education. Such students of Engineering/Technology courses
            will be offered Computer Science.
          </p>
        </div>
        <div className="for-table">
          <h1>Syllabus</h1>
          <table className="table1">
            <tbody>
              <tr>
                <td>
                  <strong>Sr. No.</strong>
                </td>
                <td colspan="2">
                  <strong>Subjects</strong>
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>FY BSc (CS) – I</strong>
                </td>
                <td>
                  <strong>FY BSc (CS) – II</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Computer Organisation and Design</td>
                <td>Programming with C</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Programming with Python &#8211; I</td>
                <td>Programming with Python &#8211; II</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Free and Open Source Software</td>
                <td>Linux</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Database Systems</td>
                <td>Data Structures</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Discrete Mathematics</td>
                <td>Calculus</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Descriptive Statistics and Introduction to Probability</td>
                <td>Statistics Methods and Testing of Hypothesis</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Soft Skills Development</td>
                <td>Green Technologies</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>SY BSc (CS) – III</strong>
                </td>
                <td>
                  <strong>SY BSc (CS) – IV</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Theory of Computation</td>
                <td>Fundamentals of Algorithm</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Core JAVA</td>
                <td>Advanced JAVA</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Operating System</td>
                <td>Computer Networks</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Database Management System</td>
                <td>Software Engineering</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Combinatorics and Graph Theory</td>
                <td>Linear Algebra Using Python</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Physical Computing and IoT Programming</td>
                <td>(DOT) NET Technologies</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td> </td>
                <td>
                  <strong>TY BSc (CS) – V</strong>
                </td>
                <td>
                  <strong>TY BSc (CS) – VI</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Artificial Intelligence</td>
                <td>Wireless Sensor Network and Mobile Communication</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Software testing and Quality Assurance</td>
                <td>Cloud Computing</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Information and Network Security</td>
                <td>Information Retrieval</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Architecting to IOT</td>
                <td>Ethical Hacking</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Game Programming</td>
                <td>Data Science</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Project Implementation</td>
                <td>Project Implementation</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="login-singup">
          <Link to="/login" className="course-card-link">
            Login
          </Link>
          <Link to="/signup" className="course-card-link">
            Sign up
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cs;
