import React, { useState } from "react";
import axios from "axios";

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/referral`,
        formData,
        {
          withCredentials: true, // Ensure cookies are sent
        }
      );

      if (response.status !== 201) {
        throw new Error(response.data.error || "Failed to submit referral");
      }

      console.log("Referral submitted successfully:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error submitting referral:", error);
      setErrorMessage(error.response?.data?.error || error.message);
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[51]">
        <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                name="referrerName"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
                value={formData.referrerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                name="referrerEmail"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Email"
                value={formData.referrerEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Friend's Name</label>
              <input
                type="text"
                name="refereeName"
                className="w-full px-3 py-2 border rounded"
                placeholder="Friend's Name"
                value={formData.refereeName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Friend's Email</label>
              <input
                type="email"
                name="refereeEmail"
                className="w-full px-3 py-2 border rounded"
                placeholder="Friend's Email"
                value={formData.refereeEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
