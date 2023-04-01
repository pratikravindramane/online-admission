import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Baf = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <div className="bms">
        <h1>Bachelor of Commerce (Accounting & Finance)</h1>
        <p>
          Bachelor of Commerce in Accounting and Finance, also known as BAF
          Course, is an undergraduate programme that provides training in the
          areas of accounting and finance. The duration of the course shall be
          six semesters spread over in three years. The objective of this course
          is to improve self-employment and provide benefits to the
          organizations by providing them with suitably trained persons in the
          field of Accounting & Finance by effective mode of interaction,
          presentations, projects, industrial visits and practical training. BAF
          degree will help you to gain knowledge in areas of Financial
          Accounting, Cost Accounting, Auditing, IT, Taxation, Economics and
          Business Law and Business Communications.
        </p>
        <br />
        <h3>Total Number of Seats: 60</h3>
        <p>
          The B.M.S. course shall be a full-time course. The duration of the
          course shall be six semesters spread over three years.
        </p>
        <div className="eligibility">
          <h2>Eligibility</h2>
          <p>
            A candidate for being eligible for admission to the Bachelor of
            Commerce (Accounting & Finance) Degree Course shall have passed
            XIIth Std. Examination of the Maharashtra Board of Higher Secondary
            Education or its equivalent examination and secured not less than
            45% marks in aggregate at FIRST ATTEMPT (40% in the case of Reserved
            Category).
          </p>
          <br />
          <p>
            Every candidate admitted to the Degree Course in the
            Constituent/Affiliated Colleges recognised institution, conducting
            the course, shall have to register himself/herself with the
            University. Students coming from University/Board other than
            Maharashtra must get eligibility for B.Com. (Accounting & Finance).
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
                  <strong>FY BAF – I</strong>
                </td>
                <td>
                  <strong>FY BAF – II</strong>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Financial Accounting &#8211; I</td>
                <td>Financial Accounting &#8211; II</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Cost Accounting &#8211; I</td>
                <td>Auditing &#8211; I</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Financial Management &#8211; I</td>
                <td>Innovative Financial Services</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Business Communication &#8211; I</td>
                <td>Business Communication &#8211; II</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Foundation Course &#8211; I</td>
                <td>Foundation Course &#8211; II</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Commerce &#8211; I</td>
                <td>Business Law &#8211; I</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Business Economics &#8211; I</td>
                <td>Business Mathematics</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>SY BAF – III</strong>
                </td>
                <td>
                  <strong>SY BAF – IV</strong>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Information Technology in Accountancy &#8211; I</td>
                <td>Information Technology in Accountancy &#8211; II</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Foundation Course Contemporary Issues &#8211; III</td>
                <td>Foundation Course Contemporary Issues &#8211; IV</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Business Law &#8211; II (Business Regulatory Framework)</td>
                <td>Business Law &#8211; III (Company Law)</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Business Economics &#8211; II (Macro Economics)</td>
                <td>Research Methodology in Accounting &amp; Finance</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Cost Accounting (Methods of Costing) &#8211; II</td>
                <td>
                  Financial Accounting (Special Accounting Areas) &#8211; IV
                </td>
              </tr>
              <tr>
                <td>13</td>
                <td>
                  Financial Accounting &#8211; III (Special Accounting Areas)
                </td>
                <td>
                  Management Accounting (Introduction to Management Accounting)
                  &#8211; II
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>Taxation II (Direct Taxes Paper I)</td>
                <td>Taxation-III (Direct Taxes Paper II)</td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <strong>TY BAF – V</strong>
                </td>
                <td>
                  <strong>TY BAF – VI</strong>
                </td>
              </tr>
              <tr>
                <td>15</td>
                <td>Financial Accounting &#8211; V </td>
                <td>Financial Accounting Paper &#8211; VII </td>
              </tr>
              <tr>
                <td>16</td>
                <td>Financial Accounting &#8211; VI</td>
                <td>Project Work </td>
              </tr>
              <tr>
                <td>17</td>
                <td>Cost Accounting Paper &#8211; III </td>
                <td>Cost Accounting Paper &#8211; IV</td>
              </tr>
              <tr>
                <td>18</td>
                <td>Financial Management &#8211; II </td>
                <td>Financial Management &#8211; III </td>
              </tr>
              <tr>
                <td>19</td>
                <td>Taxation Paper &#8211; IV (Indirect Tax &#8211; II) </td>
                <td>Taxation Paper &#8211; V (Indirect Taxes &#8211; III) </td>
              </tr>
              <tr>
                <td>20</td>
                <td>International Finance</td>
                <td>Security Analysis and Portfolio Management</td>
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

export default Baf;
