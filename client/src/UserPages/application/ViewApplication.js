import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/User";
import Layout from "../../utils/Layout";
import AddApplication from "./AddApplication";
function ViewApplication() {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState();
  const [app, setApp] = useState();
  const [docuement, setDocument] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/user/application/${user._id}`
        );
        if (data.data.error) {
          setError(data.data.error);
        }
        const applciation = data.data.application;
        setApp(applciation);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  console.log(app);
  return (
    <Layout>
      {app ? (
        <div className="view-app">
          <div className="container">
            <div>
              <h5>Full Name</h5>
              <p>
                {app.name} {app.fName} {app.lName}
              </p>
            </div>
            <div>
              <h5>Course</h5>
              <p>{app.course}</p>
            </div>
            <div>
              <h5>Category</h5>
              <p>{app.category}</p>
            </div>
          </div>
          <div className="container">
            <div>
              <h5>Gender</h5>
              <p>{app.gender}</p>
            </div>
            <div>
              <h5>Date of Birth</h5>
              <p>{app.dob}</p>
            </div>
            <div>
              <h5>address</h5>
              <p>{app.address}</p>
            </div>
          </div>
          <div className="container">
            <div>
              <h5>10 University</h5>
              <p>{app.tenUni}</p>
            </div>
            <div>
              <h5>10 Year</h5>
              <p>{app.tenYear}</p>
            </div>
            <div>
              <h5>10 Percentage</h5>
              <p>{app.tenPer} %</p>
            </div>
          </div>
          <div className="container">
            <div>
              <h5>12 University</h5>
              <p>{app.twelveUni}</p>
            </div>
            <div>
              <h5>12 Year</h5>
              <p>{app.twelveYear}</p>
            </div>
            <div>
              <h5>12 Percentage</h5>
              <p>{app.twelvePer} %</p>
            </div>
          </div>
          <div className="img-container">
            <div>
              <h5>Aadhar Card</h5>
              <img
                src={`http://localhost:5000/${app.aadhar}`}
                alt={app.aadhar}
              />
            </div>
            <div>
              <h5>Ssc result</h5>
              <img src={`http://localhost:5000/${app.ssc}`} alt={app.ssc} />
            </div>
            <div>
              <h5>Hsc result</h5>
              <img src={`http://localhost:5000/${app.hsc}`} alt={app.hsc} />
            </div>
          </div>
        </div>
      ) : (
        <AddApplication />
      )}
    </Layout>
  );
}

export default ViewApplication;
