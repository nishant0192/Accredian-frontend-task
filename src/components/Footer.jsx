import React, { useState } from "react";
import logo from "../assets/accredainnew.webp.svg";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";
import yt from "../assets/yt.svg";
import twitter from "../assets/twitter.svg";
import contact from "../assets/contact.svg"

const Footer = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const toggleProgram = (index) => {
    setActiveProgram(activeProgram === index ? null : index);
  };

  const programs = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Business Management",
    "Project Management",
    "Strategy & Leadership",
    "Senior Management",
    "Fintech",
  ];

  return (
    <div className="bg-[#282828] text-white py-16 w-[100%]">
      <footer className="flex flex-col items-center w-full">
        <div className="flex justify-between w-[90%] mb-8">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo h-8" />
          </div>
          <div className="schedule">
            <button className="bg-[#007BFF] text-white px-4 py-2 rounded border border-white">
              Schedule 1-on-1 Call Now
            </button>
            <p className="text-[14px] text-center pt-2 ">Speak with our Learning Advisor</p>
          </div>
        </div>
        <div className="flex justify-between w-[90%] pt-12 border-t-2 border-white">
          <div className="flex flex-col w-[20%]">
            <h1 className="mb-4 text-lg font-bold">Programs</h1>
            {programs.map((program, index) => (
              <div key={index} className="flex flex-col">
                <button
                  className="flex justify-between items-center py-2 text-left"
                  onClick={() => toggleProgram(index)}
                >
                  <p className="mr-8">{program}</p>
                  <span>{activeProgram === index ? "-" : "+"}</span>
                </button>
                {activeProgram === index && (
                  <div className="ml-8">
                    <p>Details about {program}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col w-[50%]">
            <h1 className="mb-4 text-lg font-bold">Contact Us</h1>
            <a
              href="mailto:admissions@accredian.com"
              className="mb-2 hover:underline"
            >
              Email us (For Data Science Queries): admissions@accredian.com
            </a>
            <a href="mailto:pm@accredian.com" className="mb-2 hover:underline">
              Email us (For Product Management Queries): pm@accredian.com
            </a>
            <p className="mb-2">
              Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)
            </p>
            <p className="mb-2">
              Product Management Admission Helpline: +91 9625811095
            </p>
            <p className="mb-2">Enrolled Student Helpline: +91 7969322507</p>
            <p className="mb-2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana 122015
            </p>
            <h3 className="mt-4 mb-2 text-lg font-bold">Why Accredian</h3>
            <h4 className="mb-2 text-lg font-[400]">Follow Us</h4>
            <div className="flex">
              <img className="mx-2 h-6" src={fb} alt="Facebook" />
              <img className="mx-2 h-6" src={linkedin} alt="LinkedIn" />
              <img className="mx-2 h-6" src={twitter} alt="Twitter" />
              <img className="mx-2 h-6" src={insta} alt="Instagram" />
              <img className="mx-2 h-6" src={yt} alt="YouTube" />
            </div>
          </div>
          <div className="flex flex-col w-[20%]">
            <h1 className="mb-4 text-lg font-bold">Accredian</h1>
            <a href="#" className="mb-2 hover:underline">About</a>
            <a href="#" className="mb-2 hover:underline">Career</a>
            <a href="#" className="mb-2 hover:underline">Blog</a>
            <a href="#" className="mb-2 hover:underline">Admission Policy</a>
            <a href="#" className="mb-2 hover:underline">Referral Policy</a>
            <a href="#" className="mb-2 hover:underline">Privacy Policy</a>
            <a href="#" className="mb-2 hover:underline">Terms of Service</a>
            <a href="#" className="mb-2 hover:underline">Master FAQs</a>
          </div>
        </div>
        <div className="contact w-[100%] flex justify-end mr-8">
            <img src={contact} alt="" />
        </div>
        <div className="mt-8">
          <h4>
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </h4>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
