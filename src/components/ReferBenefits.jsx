import React, { useState, useEffect } from "react";
import axios from "axios";
import hat from "../assets/hat.svg";
import downgrey from "../assets/down-grey.svg";

const ReferBenefits = ({ enrolled }) => {
  const [data, setData] = useState([]);
  const [visibleRows, setVisibleRows] = useState(7);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/program`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  const filteredData = data.filter((row) => row.enrolled === enrolled);
  const dataToShow = filteredData.slice(0, visibleRows);

  return (
    <>
      <div className="overflow-x-auto bg-[#EBF3FF] bg-opacity-35 rounded-lg shadow-xl">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="bg-[#1A73E8] text-[#1350A0] bg-opacity-35">
              <th className="p-2 font-bold text-left">Program</th>
              <th className="p-2 font-bold text-left border-l-2 border-r-2 border-[#000000] border-opacity-[22%]">
                Referrer Bonus
              </th>
              <th className="p-2 font-bold text-left">Referee Bonus</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {dataToShow.map((row, index) => (
              <tr key={index} className="bg-gray-100">
                <td className="p-2 text-left flex py-4">
                  <img src={hat} alt="Program" className="w-6 h-6" />
                  <p className="ml-3">{row.program}</p>
                </td>
                <td className="p-2 text-left border-l-2 border-r-2 border-[#000000] border-opacity-[22%]">
                  {row.referrerBonus}
                </td>
                <td className="p-2 text-left">{row.refereeBonus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {visibleRows < filteredData.length && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setVisibleRows(visibleRows + 7)}
            className="mt-4 px-6 rounded-[10px] py-2 text-[#3C4852] text-opacity-[52%] flex items-center border-[1px] border-solid border-[#B6B6B6]"
          >
            Show More <img src={downgrey} className="w-5" alt="" />
          </button>
        </div>
      )}
    </>
  );
};

export default ReferBenefits;
