import React from "react";
import logo from "../assets/logo.svg";
import fb from "../assets/fb.svg"
import linkedin from "../assets/linkedin.svg"
import insta from "../assets/insta.svg"
import yt from "../assets/yt.svg"
import twitter from "../assets/twitter.svg"

const Footer = () => {
  return (
    <div className="flex justify-center mb-40 bg-[#282828] text-white">
      <footer>
        <div className="flex flex-col w-[90vw]">
          <div className="flex justify-between">
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="schedule">
                <button className="bg-[#007BFF] text-white">Schedule 1-on-1 Call Now</button>
            </div>
          </div>
          <div className="flex w-[100%] justify-around">
            <div className="cols">
              <h1>Programs</h1>
            </div>
            <div className="cols flex flex-col">
              <h1>Contact Us</h1>
              <a href="">Email us (For Data Science Queries): admissions@accredian.com</a>
              <a href="">Email us (For Product Management Queries):pm@accredian.com</a>
              <a href="">Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</a>
              <a href="">Product Management Admission Helpline:+91 9625811095</a>
              <a href="">Enrolled Student Helpline: +91 7969322507</a>
              <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
              Haryana 122015</p>
              <h3>Why Accredian</h3>
              <h4>Follow Us</h4>
              <div className="flex">
                <img className = "mx-2" src={fb} alt="" />
                <img className = "mx-2" src={linkedin} alt="" />
                <img className = "mx-2" src={twitter} alt="" />
                <img className = "mx-2" src={insta} alt="" />
                <img className = "mx-2" src={yt} alt="" />
              </div>
            </div>
            <div className="cols">
              <h1>Accredian</h1>
            </div>
          </div>
          <div>
            <h4>
              © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
              Rights Reserved
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
