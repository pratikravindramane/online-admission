import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const It = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <div className="bms">
        <h1>Bachelor of Science (Information Technology)</h1>
        <p>
          Aspirants are taught all the tools needed for the computer programming
          languages in addition to all the necessary tools that are needed in
          the industry of IT. This course places equal importance to theory as
          well as the practical aspect. This degree is primarily focused on
          subjects like software, databases and networking. This program will
          give a strategic advantage top the building IT professionals.
        </p>
        <br />
        <h3>Total No. of Seats: 60</h3>
        <div className="eligibility">
          <h2>Eligibility</h2>A candidate for being eligible for admission to
          the Degree Course of Bachelor of Science &#8211; Information
          Technology, shall have passed XII standard examination of the
          Maharashtra Board of Higher Secondary Education or its equivalent with{" "}
          <strong>Mathematics and Statistics</strong> as one of the subjects and
          should have secured not less than{" "}
          <strong>
            <em>45% marks in </em>
          </strong>
          <strong>aggregate</strong> for{" "}
          <strong>
            <em>Open Category</em>
          </strong>{" "}
          and{" "}
          <strong>
            <em>40% marks in aggregate</em>
          </strong>{" "}
          in case of{" "}
          <strong>
            <em>Reserved Category candidates</em>
          </strong>
        </div>
        <div className="eligibility">
          <h2>OR</h2>
          <ol>
            <li>
              Marks in Mathematics &amp; Statistics at H.S.C. or equivalent
            </li>
            <li> Aggregate marks of H.S.C. or equivalent</li>
            <li> Aggregate marks at S.S.C.</li>
          </ol>
        </div>
        <div className="eligibility">
          <h2>
            <strong>
              Eligibility for Admission to Direct Second Year of B.Sc. (IT)
            </strong>
          </h2>
          Candidates who have passed Diploma in Computer Engineering/Computer
          Science/Computer Technology/Information Technology/Electrical,
          Electronics & Video Engineering and Allied Branches/Mechanical and
          Allied Branches, Civil and Allied Branches of Engineering after S.S.C.
          (Xth Standard) are eligible for direct admission to the Second Year of
          the B.Sc. (I.T.) degree course. However, the Diploma should be
          recognised by the Maharashtra State Board of Technical Education or
          any other recognised Government body. Minimum marks required 45%
          aggregate for open category candidates and 40% aggregate for reserved
          category candidates.
        </div>
        <div className="eligibility">
          <h2>OR</h2>
          Students with post HSC – Diploma in Computer Engineering/Computer
          Science/Computer Technology/Information Technology and Allied Branches
          will be eligible for direct admission to the Second Year of B.Sc.
          (I.T.) However, the Diploma should be recognised by the Maharashtra
          State Board of Technical Education or any other recognised Government
          body.
        </div>
        <div className="for-table">
          <h1>Syllabus</h1>
          <table className="table1">
            <tbody>
              <tr>
                <td>
                  <strong>Sr. No.</strong>
                </td>
                <td colspan="3">
                  <strong>Subjects</strong>
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>FY BSc (IT) – I</strong>
                </td>
                <td>
                  <strong>FY BSc (IT) – II</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Imperative Programming</td>
                <td>Object Oriented Programming</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Digital Electronics</td>
                <td>Microprocessor Architecture</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Operating Systems</td>
                <td>Web Programming</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Discrete Mathematics</td>
                <td>Numerical and Statistical Methods</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Communication Skills</td>
                <td>Green Computing</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>SY BSc (IT) – III</strong>
                </td>
                <td>
                  <strong>SY BSc (IT) – IV</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Python Programming</td>
                <td>Core Java</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Data Structures</td>
                <td>Introduction to Embedded System</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Computer Networks</td>
                <td>Computer Oriented Statistical Techniques</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Database Management System</td>
                <td>Software Engineering</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Applied Mathematics</td>
                <td>Computer Graphics and Animation</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>TY BSc (IT) – V</strong>
                </td>
                <td>
                  <strong>TY BSc (IT) – VI</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Software Project Management</td>
                <td>Software Quality Assurance</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Internet of Things</td>
                <td>Security in Computing</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Advanced Web Programming</td>
                <td>Business Intelligence</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Artificial Intelligence/Linux System Administration</td>
                <td>Enterprise Networking/Geographic Information System</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Enterprise Java/Next Generation Technology</td>
                <td>Cyber Laws/IT Service Management</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Project Dissertation</td>
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

export default It;
