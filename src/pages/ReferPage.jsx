import React, { useState } from "react";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import photo1 from "../assets/1.svg";
import photo2 from "../assets/photo2.svg";
import notes from "../assets/notes.svg";
import notes2 from "../assets/notes2.svg";
import addFriend from "../assets/add_friend.svg";
import wallet from "../assets/wallet.svg";
import write from "../assets/Layer_10.svg";
import ReferBenefits from "../components/ReferBenefits";
import Faq from "../components/Faq";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const ReferPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [enrolled, setEnrolled] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Nav />
      <div
        style={{ boxShadow: "0px 4px 12px 1px rgba(0, 7, 43, 0.28)" }}
        className="flex flex-col md:flex-row bg-[#EEF5FF] mt-8 w-[90vw] font-[600] rounded-[20px] relative overflow-hidden"
      >
        <img src={notes} className="w-24 absolute top-0 left-0" alt="notes" />
        <img
          src={notes}
          style={{ transform: "rotateY(180deg)" }}
          className="w-24 absolute top-0 right-[44px]"
          alt="notes"
        />
        <img
          src={notes2}
          className="w-24 absolute top-[8%] left-[64%]"
          alt="notes"
        />
        <img
          src={notes2}
          style={{ transform: "rotateY(180deg)" }}
          className="w-24 absolute top-[39%] right-[-9px]"
          alt="notes"
        />
        <img
          src={notes2}
          style={{ transform: "rotateX(180deg)" }}
          className="w-24 absolute top-[69%] left-[54%] z-[51]"
          alt="notes"
        />

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-10 px-6 md:px-10">
          <div className="flex h-full w-full flex-col justify-center items-start">
            <div className="heading">
              <h1 className="text-[2rem] md:text-[3.5rem]">
                Let's Learn <br />& Earn
              </h1>
            </div>
            <div className="mt-6 md:mt-12">
              <p className="text-[1rem] md:text-[1.5rem] font-[400]">
                Get a chance to win <br />
                up-to{" "}
                <span className="text-[#1A73E8] text-[1.5rem] md:text-[2rem] font-[600]">
                  Rs. 15,000
                </span>
              </p>
            </div>
            <div className="mt-4 md:mt-8">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                onClick={openModal}
              >
                Refer Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-10">
          <img
            src={photo1}
            className="w-2/3 md:w-full z-50"
            alt="illustration"
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#EEF5FF] mt-[10rem] rounded-[20px]">
        <div className="heading">
          <h1 className="text-[1.8rem] font-[700]">
            How do I <span className="text-[#1A73E8]">Refer?</span>
          </h1>
        </div>
        <div className="images">
          <div className="photo-container relative">
            <img src={photo2} alt="Photo 2" className="photo2-img block" />
            <div className="logo absolute top-[140px] left-[16.5rem]">
              <img className="w-[70px]" src={addFriend} alt="" />
            </div>
            <div className="text absolute top-[265px] font-[600] left-[12.8rem]">
              <p className="text-center">
                Submit referrals easily via <br />
                our website's referral <br />
                section.
              </p>
            </div>

            <div className="logo absolute top-[140px] left-[40.5rem]">
              <img className="w-[70px]" src={write} alt="" />
            </div>
            <div className="text absolute top-[265px] font-[600] left-[37.5rem]">
              <p className="text-center">
                Earn rewards once your <br />
                referral joins an Accredian <br />
                program.
              </p>
            </div>

            <div className="logo absolute top-[140px] right-[17.5rem]">
              <img className="w-[70px]" src={wallet} alt="" />
            </div>
            <div className="text absolute top-[265px] font-[600] right-[14.5rem]">
              <p className="text-center">
                Both parties receive a <br />
                bonus 30 days after <br />
                program enrollment.
              </p>
            </div>
          </div>
        </div>
        <div className="refer-button">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            onClick={openModal}
          >
            Refer Now
          </button>
        </div>
      </div>

      <div className="benefits" id="benefits">
        <div className="flex items-center mb-4 justify-end">
          <label className="mr-2">Enrolled:</label>
          <input
            type="checkbox"
            checked={enrolled}
            onChange={() => setEnrolled(!enrolled)}
            className="toggle-checkbox"
          />
        </div>
        <ReferBenefits enrolled={enrolled} />
        <div className="mt-6 md:mt-8 flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition mb-4"
            onClick={openModal}
          >
            Refer Now
          </button>
        </div>
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="support">
        <GetInTouch />
      </div>
      <Footer />

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default ReferPage;
