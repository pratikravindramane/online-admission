import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllApplication from "./AdminPages/application/AllApplication";
import AdminLogin from "./pages/AdminLogin";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup";
import Profile from "./UserPages/Profile/Profile";
import Notice from "./AdminPages/notice/Notice.js";
import AddNotice from "./AdminPages/notice/AddNotice.js";
import Pending from "./AdminPages/application/Pending.js";
import Rejected from "./AdminPages/application/Rejected.js";
import Selected from "./AdminPages/application/Selected.js";
import Course from "./AdminPages/course/Course.js";
import AddCourse from "./AdminPages/course/AddCourse.js";
import Application from "./UserPages/application/ViewApplication";
import AddApplication from "./UserPages/application/AddApplication";
import UploadDoc from "./UserPages/application/UploadDoc";
import Status from "./UserPages/Status.js";
import GetNotice from "./UserPages/GetNotice";
import ViewApp from "./AdminPages/application/ViewApp";
import DashBoard from "./AdminPages/DashBoard";
import "./app.css";
import Payment from "./UserPages/Payment";
import Dashboard from "@mui/icons-material/Dashboard";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AddHod from "./AdminPages/hod/AddHod";
import Hod from "./AdminPages/hod/Hods";
import HODLogin from "./pages/HodLogin";
import HodContact from "./HodPages/HodContact";
import Bms from "./pages/Bms";
import Baf from "./pages/Baf";
import It from "./pages/It";
import Cs from "./pages/Cs";
function App() {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [hod, setHod] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
      setAdmin(false);
      setHod(false);
    }
    if (localStorage.getItem("admin")) {
      setAdmin(true);
      setHod(false);
      setLogin(false);
    }
    if (localStorage.getItem("hod")) {
      setHod(true);
      setLogin(false);
      setAdmin(false);
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/home" element={admin ? <Dashboard /> : <Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/hod-login" element={<HODLogin />} />
        <Route path="/bms" element={<Bms />} />
        <Route path="/baf" element={<Baf />} />
        <Route path="/it" element={<It />} />
        <Route path="/cs" element={<Cs />} />
        {admin && (
          <>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/all-application" element={<AllApplication />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/add-notice" element={<AddNotice />} />
            <Route path="/course" element={<Course />} />
            <Route path="/add-course" element={<AddCourse />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/rejected" element={<Rejected />} />
            <Route path="/selected" element={<Selected />} />
            <Route path="/view-app" element={<ViewApp />} />
            <Route path="/view-hod" element={<Hod />} />
            <Route path="/add-hod" element={<AddHod />} />
          </>
        )}
        {login && (
          <>
            <Route path="/application" element={<Application />} />
            <Route path="/add-application" element={<AddApplication />} />
            <Route path="/notice" element={<GetNotice />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/document" element={<UploadDoc />} />
            <Route path="/status" element={<Status />} />
            <Route path="/payment" element={<Payment />} />
          </>
        )}
        {hod && (
          <>
            <Route path="/hod-contact" element={<HodContact />} />
          </>
        )}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
