import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Bms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <div className="bms">
        <h1>Bachelor of Management Studies (BMS)</h1>
        <p>
          BMS provides a basic understanding of management education. This
          course exposes students to practical aspects like project work, group
          studies, case studies and presentations. The curriculum is designed to
          inculcate academic expertise among the students in their chosen area
          among Marketing, Finance and HRM and pursue full-fledged degree in the
          same area. At the end of its three years, a student graduate with
          additional skills, such as Communication Skills, Public Relations
          Skills, Leadership Skills, Teamwork, Team Building, Research Skills
          and Presentation Skills.
        </p>
        <p>
          The B.M.S. course shall be a full-time course. The duration of the
          course shall be six semesters spread over three years.
        </p>
        <div className="for-table">
          <table className="table1">
            <tbody>
              <tr>
                <td>No. of Seats</td>
                <td colspan="4">180 (3 division of 60 students each)</td>
              </tr>
              <tr>
                <td>Seats Reserved</td>
                <td>45% for Commerce</td>
                <td>25% for Arts</td>
                <td>25% for Science</td>
                <td>5% Diploma (Engg. &amp; IB Diploma)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="eligibility">
          <h2>Eligibility</h2>
          <strong>O.3941: </strong>“A candidate for being eligible for admission
          to the <strong>Bachelor of Management Studies</strong> Degree Course
          shall have passed HSC Examination of the Maharashtra State Board of
          Higher Secondary Education or its equivalent examination or diploma
          course in any Engineering Branches with two years or three years after
          S.S.C. conducted by the Board of Technical Education, Maharashtra
          State or its equivalent examination by{" "}
          <strong>
            securing minimum 45% for general category (IN ONE ATTEMPT) at the
            respective Examination and 40% marks for the reserved category (IN
            ONE ATTEMPT)
          </strong>
          .”
        </div>
        <div className="eligibility">
          <h2>OR</h2>
          Students passing Diploma in Administration Services (Commercial and
          Secretarial Practices) conducted by Premila Vithaldas Polytechnic,
          S.N.D.T. Women’s University are eligible for admission to F.Y.B.M.S.
        </div>
        <div className="eligibility">
          <h2>Admission Procedure:</h2> On the basis of aggregate marks at
          H.S.C. Every candidate admitted to the Degree Course in the
          Constituent/Affiliated Colleges recognised institution, conducting the
          course, shall have to register himself/herself with the University.
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
                  <strong>FY BMS – I</strong>
                </td>
                <td>
                  <strong>FY BMS – II</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Introduction to FinanciAl Accounts</td>
                <td>Principles of Marketing</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Business Law</td>
                <td>Industrial Law</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Business Statistics</td>
                <td>Business Mathematics</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Business Communication-I</td>
                <td>Business Communication-II</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Foundation Course-I</td>
                <td>Foundation Course-II</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Foundation of Human Skills</td>
                <td>Business Environment</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Business Economics-I</td>
                <td>Principles of Management</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>SY BMS – III</strong>
                </td>
                <td>
                  <strong>SY BMS – IV</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Information Technology in Business Management-I</td>
                <td>Information Technology in Business Management-II</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Foundation Course Contemporary Issues-III</td>
                <td>
                  Foundation Course Ethics &amp; Corporate Governance &#8211; IV
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Business Planning and Entrepreneurial Management</td>
                <td>Managerial Economics-II</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Accounting for Managerial Decision</td>
                <td>Business Research Methods</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Strategic Management</td>
                <td>Production and Total Quality Management</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>Finance</strong>
                </td>
                <td>
                  <strong>Finance</strong>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Corporate Finance</td>
                <td>Financial Institutions and Market</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Basics of Financial Services</td>
                <td>Auditing</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>Marketing</strong>
                </td>
                <td>
                  <strong>Marketing</strong>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Advertising</td>
                <td>Integrated Market Communication</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Consumer Behaviour</td>
                <td>Rural Marketing</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>Human Resource</strong>
                </td>
                <td>
                  <strong>Human Resource</strong>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Recruitment and Selection</td>
                <td>Change Management</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Motivation &amp; Leadership</td>
                <td>Training and Development in HRM</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>TY BMS – V</strong>
                </td>
                <td>
                  <strong>TY BMS – VI</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Logistics and Supply Chain Management</td>
                <td>Operation Research</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Corporate Communication and Public Relations</td>
                <td>Project Work</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>Finance</strong>
                </td>
                <td>
                  <strong>Finance</strong>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Investment Analysis and Portfolio Management</td>
                <td>International Finance</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Commodity and Derivative Market</td>
                <td>Innovative Financial Services</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Risk Management</td>
                <td>Project Management</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Wealth Management</td>
                <td>Strategic Financial Management</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>Marketing</strong>
                </td>
                <td>
                  <strong>Marketing</strong>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Services Marketing</td>
                <td>Brand Management</td>
              </tr>
              <tr>
                <td>4</td>
                <td>E-Commerce and Digital Marketing</td>
                <td>Retail Management</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Sales and Distribution Management</td>
                <td>International Marketing</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Customer Relationship Management</td>
                <td>Media Planning and Management</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>Human Resources</strong>
                </td>
                <td>
                  <strong>Human Resources</strong>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Performance Management and Career Planning</td>
                <td>HRM in Service Sector</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Industrial Relations</td>
                <td>Indian Ethos in Management</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Strategic HRM</td>
                <td>HRM in Global Perspective</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Stress Management</td>
                <td>Organizational Development</td>
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

export default Bms;
