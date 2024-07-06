import React from "react";

const Modal = ({ closeModal }) => {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Friend's Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Friend's Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Friend's Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                placeholder="Friend's Email"
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
