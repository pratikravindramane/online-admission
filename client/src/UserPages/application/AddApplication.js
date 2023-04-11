import Layout from "../../utils/Layout";
import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/User";
import emailjs from "@emailjs/browser";

const AddApplication = () => {
  const { user } = useContext(AuthContext);
  const [course, setCourse] = useState();
  const [math, setMath] = useState();
  const form = useRef();
  const [credentials, setCredentials] = useState({
    userId: user._id,
    email: user.email,
    name: undefined,
    lName: undefined,
    fName: undefined,
    dob: undefined,
    nationality: undefined,
  });
  const [show, setShow] = useState();
  const [refresh, setRefresh] = useState();
  const [profile, setProfile] = useState();
  const [profileInput, setProfileInput] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const fetching = await axios.get("http://localhost:5000/admin/course");
        if (fetching.data.error) {
          console.log(fetching.data.error);
        }
        setCourse(fetching.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetch();
    if (user.payment) {
      setShow(true);
    }
  }, [refresh]);
  useEffect(() => {
    if (credentials.course === "BScIT" || credentials.course === "BScCS") {
      setMath(true);
    } else {
      setMath(false);
    }
  }, [credentials.course]);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profile", profileInput);
      const response = await axios.post(
        "http://localhost:5000/user/add-application",
        { ...credentials, formData }
      );
      console.log(formData);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert("Application Submited");
        setProfile(true);
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
              alert("Message send Successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    } catch (error) {
      console.log(error);
    }
    setRefresh(true);
    console.log("hello");
  };

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_Eq3gnPcqCuq0H8",
      amount: 250,
      currency: "INR",
      name: "Anshuman",
      description: "Test Transaction",
      // image: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          const payment = await axios.get(
            `http://localhost:5000/user/payment/${user._id}`
          );
          console.log(payment.data);
          localStorage.setItem("payment", true);
          setShow(true);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const orderUrl = "http://localhost:5000/payment/";
      const { data } = await axios.post(orderUrl, { amount: 250 });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const currentDate = new Date().toDateString();
  const ProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profile", profileInput);
      const res = await axios.post(
        `http://localhost:5000/user/profile/${user._id}`,
        formData
      );
      alert("successfull uploaded");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(credentials);
  return (
    <Layout>
      {/* {!profile ? ( */}
      <form onSubmit={submitHandler}>
        {/* <div className="lable-input">
            <TextField
              type="file"
              helperText="Ssc Certificate"
              onChange={(e) => {
                setProfileInput(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
            />
          </div> */}
        <div className="lable-input">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="lable-input">
          <label htmlFor="fName">Father name</label>
          <input id="fName" required onChange={handleChange} />
        </div>
        <div className="lable-input">
          <label htmlFor="lName">Last Name</label>
          <input id="lName" type="text" onChange={handleChange} required />
        </div>
        <div className="lable-input">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            required
            max="2003-01-01"
            type="date"
            onChange={handleChange}
          />
        </div>
        <div className="lable-input">
          <label htmlFor="nationality">Nationality</label>

          <input
            id="nationality"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className="lable-input">
          <label htmlFor="dob">Address</label>

          <input rows={4} id="address" required onChange={handleChange} />
        </div>
        <div className="lable-input">
          <label htmlFor="course">Please select your course</label>

          <select id="course" onChange={handleChange}>
            {course &&
              course.map((option) => (
                <option key={option._id} value={option.title} id={option.title}>
                  {option.title}
                </option>
              ))}
            <option selected value="null">
              Select Your Course
            </option>
          </select>
        </div>
        {math && (
          <div className="lable-input">
            <label htmlFor="mathMark">Math Marks</label>
            <input
              id="mathMark"
              type="number"
              pattern="[0-9]{2}"
              maxLength={2}
              required
              max="100"
              onChange={handleChange}
            />
          </div>
        )}
        <div className="lable-input">
          <label htmlFor="gender">Please select your Gender</label>
          <select
            id="gender"
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, gender: e.target.value }))
            }
          >
            <option selected value="null">
              Select Your Gender
            </option>
            <option value="male" id="male">
              Male
            </option>
            <option value="female" id="male">
              Female
            </option>
            <option value="Other" id="male">
              Other
            </option>
          </select>
        </div>
        <div className="lable-input">
          <label htmlFor="category">Please select your Caste</label>
          <select
            id="category"
            onChange={(e) =>
              setCredentials((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
          >
            <option selected value="null">
              Select Your caste
            </option>
            <option value="open" id="open">
              Open
            </option>
            <option value="sc" id="sc">
              SC
            </option>
            <option value="st" id="st">
              ST
            </option>
            <option value="obc" id="obc">
              OBC
            </option>
          </select>
        </div>
        <div className="lable-input">
          <label htmlFor="tenUni">10 Uiversity</label>
          <input
            id="tenUni"
            label="10 Uiversity"
            required
            onChange={handleChange}
          />
        </div>

        <div className="lable-input">
          <label htmlFor="tenYear">10 Passing year</label>
          <input
            id="tenYear"
            required
            type="date"
            onChange={handleChange}
            max="2019-01-04"
            min="2010-01-04"
          />
        </div>
        <div className="lable-input">
          <label htmlFor="tenPer">10 Percentage</label>
          <input
            id="tenPer"
            pattern="[0-9]{2}"
            maxLength={2}
            max="100"
            min="35"
            required
            type="number"
            onChange={handleChange}
          />
        </div>
        <div className="lable-input">
          <label htmlFor="twelveUni">12 Uiversity</label>
          <input id="twelveUni" required onChange={handleChange} />
        </div>
        <div className="lable-input">
          <label htmlFor="twelveYear">12 Passing year</label>
          <input
            id="twelveYear"
            type="date"
            required
            onChange={handleChange}
            min="2012-01-04"
            max="2022-01-04"
          />
        </div>
        <div className="lable-input">
          <label htmlFor="twelvePer">12 Percentage</label>
          <input
            id="twelvePer"
            type="number"
            pattern="[0-9]{2}"
            maxLength={2}
            required
            min="35"
            max="100"
            onChange={handleChange}
          />
        </div>
        <div>
          <form ref={form} className="form-hide">
            <label>Name</label>
            <input type="text" name="user_name" value={user && user.name} />
            <label>Email</label>
            <input type="email" name="user_email" value={user && user.email} />
            <label>Message</label>
            <textarea
              name="message"
              value={`Application with name ${user.name} and with email ${user.email} had been created ${currentDate}`}
            />
          </form>
        </div>
        {!show && (
          <button onClick={handlePayment} className="buy_btn">
            Pay Now
          </button>
        )}
        {show && <Button type="submit">Submit</Button>}
      </form>
      {/* // ) : (
      //   <form
      //     onSubmit={ProfileSubmit}
      //     sx={{
      //       "& .MuiTextField-root": { m: 1, width: "25ch" },
      //     }}
      //   >
      //     <TextField
      //       type="file"
      //       helperText="Ssc Certificate"
      //       onChange={(e) => setProfileInput(e.target.files[0])}
      //     />
      //     <Button type="submit">Submit</Button>
      //   </form>
      // )} */}
    </Layout>
  );
};

export default AddApplication;
